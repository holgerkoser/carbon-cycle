<script setup>
// Today's fossil reserves as circles whose area is proportional to their carbon content;
// the coloured segment is the share burned until the end of the simulation.
import { computed } from 'vue'
import { END_YEAR, PROJECTION_START } from '@/model/constants.js'

const props = defineProps({
  // Remaining reserves per year [PgC] (see reserves.js)
  reserves: { type: Array, required: true },
  // Total fossil emissions over the projection [PgC], including cement and other industry
  fossilEmissions: { type: Number, required: true },
})

const FUELS = [
  { key: 'hardCoal', label: 'Hard coal', color: '#333333' },
  { key: 'oil', label: 'Oil', color: '#a1281f' },
  { key: 'gas', label: 'Natural gas', color: '#e08214' },
  { key: 'lignite', label: 'Lignite', color: '#8c564b' },
]

const WIDTH = 360
const MAX_RADIUS = 36
const LABELS = 34 // height of name and amount above the circles
const BASELINE = LABELS + 2 * MAX_RADIUS // bottom of the circles

// SVG path of a pie segment from 12 o'clock, clockwise
function segment(cx, cy, r, share) {
  if (share >= 0.9999) return null
  const angle = 2 * Math.PI * share
  const x = cx + r * Math.sin(angle)
  const y = cy - r * Math.cos(angle)
  return `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${share > 0.5 ? 1 : 0} 1 ${x} ${y} Z`
}

const circles = computed(() => {
  // Reserves at the start of the projection (end of the last historical year) and at the end of the simulation
  const start = props.reserves.find(d => d.year === PROJECTION_START - 1)
  const end = props.reserves.find(d => d.year === END_YEAR)
  const largest = Math.max(...FUELS.map(({ key }) => start[key]))
  const slot = WIDTH / FUELS.length

  return FUELS.map((fuel, i) => {
    const total = Math.max(0, start[fuel.key])
    const share = total > 0 ? Math.min(1, Math.max(0, (start[fuel.key] - end[fuel.key]) / total)) : 0
    const r = MAX_RADIUS * Math.sqrt(total / largest)
    const cx = slot * (i + 0.5)
    const cy = BASELINE - r
    return { ...fuel, total, share, r, cx, cy, path: segment(cx, cy, r, share) }
  })
})

const percent = share => share.toLocaleString('en-US', { style: 'percent', maximumFractionDigits: 0 })
</script>

<template>
  <section class="reserve-tile">
    <div class="label">Reserves burned {{ PROJECTION_START }}–{{ END_YEAR }}</div>
    <div class="total">
      <span class="total-value">{{ Math.round(fossilEmissions).toLocaleString('en-US') }}</span>
      <span class="total-unit">GtC fossil emissions</span>
      <span class="total-note">incl. cement and other industry</span>
    </div>
    <svg :viewBox="`0 0 ${WIDTH} ${BASELINE + 20}`" role="img" aria-label="Share of each fossil reserve that is burned">
      <g v-for="c in circles" :key="c.key">
        <title>{{ c.label }}: {{ percent(c.share) }} of {{ Math.round(c.total) }} PgC burned</title>
        <text :x="c.cx" y="11" class="fuel">{{ c.label }}</text>
        <text :x="c.cx" y="25" class="amount">{{ Math.round(c.total) }} PgC</text>
        <circle :cx="c.cx" :cy="c.cy" :r="c.r" :fill="c.color" fill-opacity="0.12" :stroke="c.color" stroke-opacity="0.5" />
        <circle v-if="!c.path && c.share > 0" :cx="c.cx" :cy="c.cy" :r="c.r" :fill="c.color" />
        <path v-else-if="c.path" :d="c.path" :fill="c.color" />
        <text :x="c.cx" :y="BASELINE + 15" :fill="c.color" class="share">{{ percent(c.share) }}</text>
      </g>
    </svg>
    <div class="detail">Area ∼ carbon in today’s reserves; segment = share burned. Lignite follows a fixed projection.</div>
  </section>
</template>

<style scoped>
.reserve-tile {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 14px;
  min-width: 0;
}

.label {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.total {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0 6px;
  margin-top: 2px;
}

.total-value {
  font-size: 1.3rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.total-unit,
.total-note {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.total-note {
  font-size: 0.7rem;
}

svg {
  display: block;
  width: 100%;
  max-width: 420px;
  height: auto;
  /* Centre the circles vertically when the tile is stretched next to a taller card */
  margin: auto;
  padding: 12px 0;
}

text {
  text-anchor: middle;
  font-family: var(--sans);
  fill: var(--text);
}

.fuel {
  font-size: 11px;
  font-weight: 600;
}

.amount {
  font-size: 10px;
  fill: var(--text-muted);
}

.share {
  font-size: 12px;
  font-weight: 700;
}

.detail {
  margin-top: 2px;
  color: var(--text-muted);
  font-size: 0.7rem;
}
</style>
