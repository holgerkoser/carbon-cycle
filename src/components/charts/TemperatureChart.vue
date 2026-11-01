<script setup>
import * as Plot from '@observablehq/plot'
import PlotFigure from '../PlotFigure.vue'
import { BERN_RANGE, MODEL_STYLES } from './modelStyles.js'
import { paddedDomain } from './scales.js'
import { useTimeRange } from '@/composables/useTimeRange.js'
import { PROJECTION_START } from '@/model/constants.js'

const props = defineProps({
  result: { type: Object, required: true },
  observations: { type: Array, required: true },
})

const { timeRange, inRange } = useTimeRange()

const OBSERVED = { label: 'Observed', color: 'black' }

function options() {
  const visible = d => inRange(d.year)
  const models = Object.entries(props.result.models)
  const range = props.result.models.bern.uncertainty.temperature.filter(visible)
  const observations = props.observations.filter(visible)
  const lastObserved = props.observations.at(-1)
  const lines = models.flatMap(([id, m]) => m.temperature.filter(visible).map(d => ({ ...d, model: MODEL_STYLES[id].label })))
  const values = [...lines.map(d => d.anomaly), ...range.flatMap(d => [d.min, d.max]), ...observations.map(d => d.mean)]
  const yDomain = paddedDomain(values, 0.2)
  const insideY = value => value >= yDomain[0] && value <= yDomain[1]
  const legend = [...models.map(([id]) => MODEL_STYLES[id]), BERN_RANGE, OBSERVED]

  return {
    height: 380,
    marginLeft: 50,
    color: { domain: legend.map(d => d.label), range: legend.map(d => d.color), legend: true },
    x: { domain: timeRange.value, label: 'Year', tickFormat: 'd', grid: true },
    y: { domain: yDomain, label: 'Temperature anomaly [°C]', grid: true },
    marks: [
      Plot.ruleY([0].filter(insideY), { stroke: 'grey' }),
      Plot.ruleX([PROJECTION_START].filter(year => inRange(year)), { stroke: '#999', strokeDasharray: '2,4' }),
      Plot.ruleY([lastObserved.mean].filter(insideY), { stroke: '#999', strokeDasharray: '2,4' }),
      Plot.areaY(range, { x: 'year', y1: 'min', y2: 'max', fill: () => BERN_RANGE.label }),
      Plot.dot(observations, {
        x: 'year', y: 'mean', r: 2, stroke: () => OBSERVED.label, strokeOpacity: 0.5,
        title: d => `${d.year}\n${d.mean.toFixed(2)} °C`,
      }),
      Plot.lineY(observations, Plot.windowY({ k: 10, reduce: 'mean' }, { x: 'year', y: 'mean', stroke: () => OBSERVED.label, strokeWidth: 1.5 })),
      Plot.line(lines, { x: 'year', y: 'anomaly', z: 'model', stroke: 'model', strokeWidth: 2.5 }),
      Plot.tip(lines, Plot.pointerX({ x: 'year', y: 'anomaly', title: d => `${d.model}, ${d.year}\n${d.anomaly.toFixed(2)} °C` })),
    ],
  }
}
</script>

<template>
  <PlotFigure :options="options" />
</template>
