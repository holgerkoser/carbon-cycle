<script setup>
import * as Plot from '@observablehq/plot'
import PlotFigure from '../PlotFigure.vue'
import { MODEL_STYLES } from './modelStyles.js'
import { paddedDomain } from './scales.js'
import { useTimeRange } from '@/composables/useTimeRange.js'
import { PHI, PROJECTION_START } from '@/model/constants.js'

const props = defineProps({
  result: { type: Object, required: true },
  observations: { type: Array, required: true },
  // Budget component: atmosphericGrowth, totalSink, oceanSink or landSink
  component: { type: String, required: true },
})

const { timeRange, inRange } = useTimeRange()

const KEYS = ['atmosphericGrowth', 'totalSink', 'oceanSink', 'landSink']
const OBSERVED = { label: 'Global Carbon Budget 2025', color: '#888' }

const withTotalSink = d => ({ ...d, totalSink: d.oceanSink + d.landSink })

// One value per year [GtCO₂/yr]
const toSeries = (rows, key) => rows.filter(d => inRange(d.year)).map(d => ({ year: d.year, value: withTotalSink(d)[key] * PHI }))

function options(width) {
  const models = Object.entries(props.result.models)
  const observed = toSeries(props.observations, props.component)
  const lines = models.flatMap(([id, m]) =>
    toSeries(m.budget, props.component).map(d => ({ ...d, model: MODEL_STYLES[id].label })))
  const legend = [...models.map(([id]) => MODEL_STYLES[id]), OBSERVED]

  // All four charts share the y range so they stay comparable
  const values = [
    ...models.flatMap(([, m]) => KEYS.flatMap(key => toSeries(m.budget, key).map(d => d.value))),
    ...KEYS.flatMap(key => toSeries(props.observations, key).map(d => d.value)),
  ]

  return {
    height: 320,
    marginLeft: 50,
    color: { domain: legend.map(d => d.label), range: legend.map(d => d.color), legend: true },
    x: { domain: timeRange.value, label: 'Year', tickFormat: 'd', grid: true, ticks: width < 480 ? 4 : 8 },
    y: {
      domain: paddedDomain(values, 2, { include: [0] }),
      label: 'Carbon flux [GtCO₂/yr]',
      grid: true,
    },
    marks: [
      Plot.ruleY([0], { stroke: 'grey' }),
      Plot.ruleX([PROJECTION_START].filter(year => inRange(year)), { stroke: '#999', strokeDasharray: '2,4' }),
      Plot.dot(observed, { x: 'year', y: 'value', r: 2, stroke: () => OBSERVED.label, strokeOpacity: 0.5 }),
      Plot.line(lines, { x: 'year', y: 'value', z: 'model', stroke: 'model', strokeWidth: 2.5 }),
      Plot.tip(lines, Plot.pointerX({
        x: 'year',
        y: 'value',
        title: d => `${d.model}, ${d.year}\n${d.value.toFixed(1)} GtCO₂/yr`,
      })),
    ],
  }
}
</script>

<template>
  <PlotFigure :options="options" />
</template>
