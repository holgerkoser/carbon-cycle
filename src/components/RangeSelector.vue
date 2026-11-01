<script setup>
// Time range selector as known from stock charts: an overview with a window that can be moved and resized
import { computed, ref } from 'vue'

const props = defineProps({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  // Overview lines: [{ label, color, points: [{ year, value }] }]
  series: { type: Array, default: () => [] },
  // Quick selections: [{ label, range: [from, to] }]
  presets: { type: Array, default: () => [] },
  minSpan: { type: Number, default: 10 },
})
const range = defineModel({ type: Array, required: true })

const track = ref(null)
const span = computed(() => props.max - props.min)
const position = year => ((year - props.min) / span.value) * 100

const ticks = computed(() => {
  const first = Math.ceil(props.min / 50) * 50
  return Array.from({ length: Math.floor((props.max - first) / 50) + 1 }, (_, i) => {
    const value = first + i * 50
    return { value, left: position(value), major: value % 100 === 0 }
  })
})

// Overview lines in a 1000 × 100 box, stretched to the width of the track
const lines = computed(() => {
  const values = props.series.flatMap(s => s.points.map(d => d.value))
  if (!values.length) return []
  const low = Math.min(...values)
  const high = Math.max(...values)
  return props.series.map(s => ({
    ...s,
    d: s.points.map((p, i) => `${i ? 'L' : 'M'} ${(position(p.year) * 10).toFixed(1)} ${(92 - ((p.value - low) / (high - low || 1)) * 84).toFixed(1)}`).join(' '),
  }))
})

const clamp = (value, low, high) => Math.min(high, Math.max(low, value))

function setRange(from, to) {
  range.value = [Math.round(from), Math.round(to)]
}

function yearAt(clientX) {
  const box = track.value.getBoundingClientRect()
  return props.min + clamp((clientX - box.left) / box.width, 0, 1) * span.value
}

// Dragging: 'move' pans the window, 'from' / 'to' move one edge
let drag = null

function startDrag(mode, event) {
  event.preventDefault()
  event.currentTarget.setPointerCapture(event.pointerId)
  drag = { mode, startYear: yearAt(event.clientX), startRange: [...range.value] }
}

function onDrag(event) {
  if (!drag) return
  const [from, to] = drag.startRange
  const delta = yearAt(event.clientX) - drag.startYear
  if (drag.mode === 'move') {
    const shift = clamp(delta, props.min - from, props.max - to)
    setRange(from + shift, to + shift)
  } else if (drag.mode === 'from') {
    setRange(clamp(from + delta, props.min, to - props.minSpan), to)
  } else {
    setRange(from, clamp(to + delta, from + props.minSpan, props.max))
  }
}

function endDrag() {
  drag = null
}

// A click outside the window centres the window there
function jumpTo(event) {
  if (event.target !== event.currentTarget) return
  const [from, to] = range.value
  const width = to - from
  const centre = clamp(yearAt(event.clientX), props.min + width / 2, props.max - width / 2)
  setRange(centre - width / 2, centre + width / 2)
}

function nudge(edge, event) {
  const step = { ArrowLeft: -1, ArrowRight: 1, ArrowDown: -1, ArrowUp: 1 }[event.key]
  if (!step) return
  event.preventDefault()
  const delta = step * (event.shiftKey ? 10 : 1)
  const [from, to] = range.value
  if (edge === 'from') setRange(clamp(from + delta, props.min, to - props.minSpan), to)
  else setRange(from, clamp(to + delta, from + props.minSpan, props.max))
}

const isActive = preset => preset.range[0] === range.value[0] && preset.range[1] === range.value[1]
</script>

<template>
  <div class="range-selector">
    <div class="header">
      <span class="label">Time range</span>
      <span class="value">{{ range[0] }} – {{ range[1] }}</span>
      <div class="presets">
        <button
          v-for="preset in presets"
          :key="preset.label"
          type="button"
          :class="{ active: isActive(preset) }"
          @click="setRange(...preset.range)"
        >
          {{ preset.label }}
        </button>
      </div>
    </div>

    <div ref="track" class="track" @pointerdown="jumpTo">
      <svg class="overview" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
        <path v-for="line in lines" :key="line.label" :d="line.d" fill="none" :stroke="line.color" stroke-width="1.5" vector-effect="non-scaling-stroke" />
      </svg>
      <div class="shade" :style="{ left: 0, width: `${position(range[0])}%` }" />
      <div class="shade" :style="{ left: `${position(range[1])}%`, right: 0 }" />
      <div
        class="window"
        :style="{ left: `${position(range[0])}%`, width: `${position(range[1]) - position(range[0])}%` }"
        @pointerdown="startDrag('move', $event)"
        @pointermove="onDrag"
        @pointerup="endDrag"
        @pointercancel="endDrag"
      >
        <div
          class="handle from"
          role="slider"
          tabindex="0"
          aria-label="Start year"
          :aria-valuemin="min"
          :aria-valuemax="range[1] - minSpan"
          :aria-valuenow="range[0]"
          @pointerdown.stop="startDrag('from', $event)"
          @pointermove="onDrag"
          @pointerup="endDrag"
          @pointercancel="endDrag"
          @keydown="nudge('from', $event)"
        />
        <div
          class="handle to"
          role="slider"
          tabindex="0"
          aria-label="End year"
          :aria-valuemin="range[0] + minSpan"
          :aria-valuemax="max"
          :aria-valuenow="range[1]"
          @pointerdown.stop="startDrag('to', $event)"
          @pointermove="onDrag"
          @pointerup="endDrag"
          @pointercancel="endDrag"
          @keydown="nudge('to', $event)"
        />
      </div>
    </div>

    <div class="ticks">
      <span
        v-for="tick in ticks"
        :key="tick.value"
        class="tick"
        :class="{ major: tick.major }"
        :style="{ left: `${tick.left}%` }"
      >{{ tick.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.range-selector {
  padding: 10px 14px 4px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  margin-bottom: 8px;
}

.label {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.value {
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.presets {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-left: auto;
}

.presets button {
  padding: 2px 8px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text-muted);
  font: inherit;
  font-size: 0.75rem;
  cursor: pointer;
}

.presets button:hover {
  color: var(--text);
}

.presets button.active {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent);
}

.track {
  position: relative;
  height: 40px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  touch-action: none;
  user-select: none;
}

.overview {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.shade {
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(246 247 249 / 0.75);
  pointer-events: none;
}

.window {
  position: absolute;
  top: 0;
  bottom: 0;
  border: 1px solid var(--accent);
  border-radius: 3px;
  background: rgb(59 95 192 / 0.06);
  cursor: grab;
}

.window:active {
  cursor: grabbing;
}

.handle {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 24px;
  margin-top: -12px;
  border: 1px solid var(--accent);
  border-radius: 3px;
  background: var(--surface);
  cursor: ew-resize;
}

.handle::after {
  content: '';
  position: absolute;
  inset: 6px 3px;
  border-left: 1px solid var(--accent);
  border-right: 1px solid var(--accent);
}

.handle.from {
  left: -6px;
}

.handle.to {
  right: -6px;
}

.handle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.ticks {
  position: relative;
  height: 18px;
}

.tick {
  position: absolute;
  top: 2px;
  transform: translateX(-50%);
  font-size: 0.68rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

.tick:first-child {
  transform: none;
}

.tick:last-child {
  transform: translateX(-100%);
}

@media (max-width: 560px) {
  .tick:not(.major) {
    font-size: 0;
  }
}
</style>
