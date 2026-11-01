<script setup>
// Full-width year slider with a time scale, a sparkline of a model quantity and a play button
import { computed, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
  // Years from here on are marked as projection
  projectionStart: { type: Number, default: null },
  // Sparkline drawn behind the slider: [{ year, value }]
  series: { type: Array, default: () => [] },
  seriesLabel: { type: String, default: '' },
  color: { type: String, default: 'var(--accent)' },
})
const year = defineModel({ type: Number, required: true })

const span = computed(() => props.max - props.min)
const position = value => ((value - props.min) / span.value) * 100

// Ticks every 50 years, labelled every 50 (wide) or 100 years (narrow screens hide the odd ones)
const ticks = computed(() => {
  const first = Math.ceil(props.min / 50) * 50
  return Array.from({ length: Math.floor((props.max - first) / 50) + 1 }, (_, i) => {
    const value = first + i * 50
    return { value, left: position(value), major: value % 100 === 0 }
  })
})

// Sparkline in a 1000 × 100 box, stretched to the width of the slider
const sparkline = computed(() => {
  if (!props.series.length) return null
  const values = props.series.map(d => d.value)
  const low = Math.min(...values)
  const high = Math.max(...values)
  const x = d => position(d.year) * 10
  // Leave the top quarter free for the "Projection" label
  const y = d => 94 - ((d.value - low) / (high - low || 1)) * 68
  const line = props.series.map((d, i) => `${i ? 'L' : 'M'} ${x(d).toFixed(1)} ${y(d).toFixed(1)}`).join(' ')
  return { line, area: `${line} L 1000 100 L 0 100 Z` }
})

const current = computed(() => props.series.find(d => d.year === year.value))

const playing = ref(false)
let timer = null

function stop() {
  clearInterval(timer)
  timer = null
  playing.value = false
}

function toggle() {
  if (playing.value) return stop()
  if (year.value >= props.max) year.value = props.min
  playing.value = true
  timer = setInterval(() => {
    year.value = Math.min(props.max, year.value + 2)
    if (year.value >= props.max) stop()
  }, 40)
}

onBeforeUnmount(stop)
</script>

<template>
  <div class="timeline">
    <div class="header">
      <button type="button" class="play" :aria-label="playing ? 'Pause' : 'Play'" @click="toggle">
        <svg v-if="playing" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2" width="3.5" height="12" rx="1" /><rect x="9.5" y="2" width="3.5" height="12" rx="1" /></svg>
        <svg v-else viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" /></svg>
      </button>
      <span class="year">{{ year }}</span>
      <span v-if="current && seriesLabel" class="value">
        {{ seriesLabel }} {{ current.value.toFixed(0) }} ppm
      </span>
    </div>

    <div class="track">
      <div class="scale">
        <div
          v-if="projectionStart !== null"
          class="projection"
          :style="{ left: `${position(projectionStart)}%` }"
        >
          <span>Projection</span>
        </div>
        <svg v-if="sparkline" class="sparkline" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
          <path :d="sparkline.area" :fill="color" fill-opacity="0.12" />
          <path :d="sparkline.line" fill="none" :stroke="color" stroke-width="2" vector-effect="non-scaling-stroke" />
        </svg>
        <div class="cursor" :style="{ left: `${position(year)}%` }" />
      </div>

      <input
        v-model.number="year"
        type="range"
        :min="min"
        :max="max"
        step="1"
        aria-label="Year"
        :style="{ '--thumb': color }"
        @pointerdown="stop"
      >

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
  </div>
</template>

<style scoped>
.timeline {
  margin: 8px 0 16px;
  font-family: var(--sans);
}

.header {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 6px;
}

.play {
  align-self: center;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
}

.play svg {
  width: 12px;
  height: 12px;
  fill: currentColor;
}

.year {
  font-size: 1.4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.value {
  color: var(--text-muted);
  font-size: 0.85rem;
}

/* The scale and ticks are inset by the thumb radius so that the thumb centre lines up with them */
.track {
  --thumb-size: 18px;
  position: relative;
}

.scale,
.ticks {
  position: relative;
  margin: 0 calc(var(--thumb-size) / 2);
}

.scale {
  height: 56px;
  border-bottom: 1px solid var(--border);
}

.sparkline {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.projection {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(-45deg, transparent 0 6px, rgb(0 0 0 / 0.035) 6px 12px);
  border-left: 1px dashed #bbb;
}

.projection span {
  position: absolute;
  top: 2px;
  left: 6px;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.cursor {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1.5px solid var(--text);
}

input[type="range"] {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 14px;
  width: 100%;
  height: var(--thumb-size);
  margin: 0;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: var(--thumb-size);
  background: transparent;
}

input[type="range"]::-moz-range-track {
  height: var(--thumb-size);
  background: transparent;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--thumb-size);
  height: var(--thumb-size);
  border: 3px solid var(--surface);
  border-radius: 50%;
  background: var(--thumb);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 0.25), 0 1px 3px rgb(0 0 0 / 0.3);
}

input[type="range"]::-moz-range-thumb {
  width: var(--thumb-size);
  height: var(--thumb-size);
  box-sizing: border-box;
  border: 3px solid var(--surface);
  border-radius: 50%;
  background: var(--thumb);
  box-shadow: 0 0 0 1px rgb(0 0 0 / 0.25), 0 1px 3px rgb(0 0 0 / 0.3);
}

input[type="range"]:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.ticks {
  height: 22px;
}

.tick {
  position: absolute;
  top: 4px;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

.tick::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  height: 3px;
  border-left: 1px solid #bbb;
}

@media (max-width: 560px) {
  .tick:not(.major) {
    font-size: 0;
  }
}
</style>
