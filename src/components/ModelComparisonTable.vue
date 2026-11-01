<script setup>
import { computed } from 'vue'
import { MODEL_STYLES } from './charts/modelStyles.js'
import { joos2013 } from '@/model/pulse.js'

const props = defineProps({
  // Key figures per model (see summarize in simulate.js)
  summary: { type: Object, required: true },
  // Pulse response per model
  pulse: { type: Object, default: null },
  data: { type: Object, required: true },
})

const mean = values => values.reduce((sum, value) => sum + value, 0) / values.length
const format = digits => value => value.toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
const percent = value => `${Math.round(value * 100)} %`

const ids = Object.keys(MODEL_STYLES)

const rows = computed(() => {
  const gcb = props.data.gcb.filter(d => d.year >= 2015 && d.year <= 2024)
  const maunaLoa2024 = props.data.concentration.find(d => d.source === 'maunaLoa' && d.year === 2024)
  const pulseAt = (id, year) => props.pulse?.[id].find(d => d.year === year)?.fraction

  const row = (label, observed, value, show) => {
    const values = Object.fromEntries(ids.map(id => [id, value(id)]))
    // The model closer to the observation (or to zero for an error measure)
    const target = observed ?? 0
    const best = ids.reduce((a, b) => (Math.abs(values[a] - target) <= Math.abs(values[b] - target) ? a : b))
    return { label, observed: observed === undefined ? '–' : show(observed), values: Object.fromEntries(ids.map(id => [id, show(values[id])])), best }
  }

  return [
    row('CO₂ deviation 1959–2024 (RMSE, ppm)', undefined, id => props.summary[id].rmse, format(1)),
    row('CO₂ concentration 2024 (ppm)', maunaLoa2024?.ppm, id => props.summary[id].ppm2024, format(1)),
    row('Ocean sink 2015–2024 (GtC/yr)', mean(gcb.map(d => d.oceanSink)), id => props.summary[id].oceanSink, format(2)),
    row('Land sink 2015–2024 (GtC/yr)', mean(gcb.map(d => d.landSink)), id => props.summary[id].landSink, format(2)),
    ...(props.pulse
      ? [100, 300, 1000].map(year => row(`Pulse remaining after ${year} years`, joos2013(year), id => pulseAt(id, year), percent))
      : []),
  ]
})
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th />
          <th class="number">Observed</th>
          <th v-for="id in ids" :key="id" class="number" :title="MODEL_STYLES[id].label">
            <span class="swatch" :style="{ background: MODEL_STYLES[id].color }" />{{ MODEL_STYLES[id].short }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.label">
          <td>{{ row.label }}</td>
          <td class="number">{{ row.observed }}</td>
          <td v-for="id in ids" :key="id" class="number" :class="{ best: row.best === id }">{{ row.values[id] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

th,
td {
  padding: 8px 10px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

.number {
  white-space: nowrap;
}

th {
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.number {
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.best {
  font-weight: 700;
}

.swatch {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 6px;
  border-radius: 50%;
}
</style>
