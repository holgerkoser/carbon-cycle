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

const OBSERVED = {
  maunaLoa: { label: 'Mauna Loa Observatory', color: 'black' },
  iceCore: { label: 'Antarctic ice cores', color: '#999' },
}

function options() {
  const visible = d => inRange(d.year)
  const models = Object.entries(props.result.models)
  const range = props.result.models.bern.uncertainty.concentration.filter(visible)
  const observations = props.observations.filter(visible)
  const lastObserved = props.observations.at(-1)
  const legend = [...models.map(([id]) => MODEL_STYLES[id]), BERN_RANGE, ...Object.values(OBSERVED)]
  const lines = models.flatMap(([id, m]) => m.concentration.filter(visible).map(d => ({ ...d, model: MODEL_STYLES[id].label })))
  const values = [...lines.map(d => d.ppm), ...range.flatMap(d => [d.min, d.max]), ...observations.map(d => d.ppm)]
  const yDomain = paddedDomain(values, 10)
  const insideY = value => value >= yDomain[0] && value <= yDomain[1]

  return {
    height: 400,
    marginLeft: 50,
    color: { domain: legend.map(d => d.label), range: legend.map(d => d.color), legend: true },
    x: { domain: timeRange.value, label: 'Year', tickFormat: 'd', grid: true },
    y: { domain: yDomain, label: 'CO₂ concentration [ppm]', grid: true },
    marks: [
      Plot.ruleY([lastObserved.ppm].filter(insideY), { stroke: '#999', strokeDasharray: '2,4' }),
      Plot.ruleX([PROJECTION_START].filter(year => inRange(year)), { stroke: '#999', strokeDasharray: '2,4' }),
      Plot.areaY(range, { x: 'year', y1: 'min', y2: 'max', fill: () => BERN_RANGE.label }),
      Plot.dot(observations, {
        x: 'year', y: 'ppm', r: 2, stroke: d => OBSERVED[d.source].label, strokeOpacity: 0.6,
      }),
      Plot.line(lines, { x: 'year', y: 'ppm', z: 'model', stroke: 'model', strokeWidth: 2.5 }),
      Plot.tip(lines, Plot.pointerX({ x: 'year', y: 'ppm', title: d => `${d.model}, ${d.year}\n${d.ppm.toFixed(0)} ppm` })),
    ],
  }
}
</script>

<template>
  <PlotFigure :options="options" />
</template>
