<script setup>
import * as Plot from '@observablehq/plot'
import PlotFigure from '../PlotFigure.vue'
import { MODEL_STYLES } from './modelStyles.js'
import { joos2013 } from '@/model/pulse.js'

const props = defineProps({
  // { [modelId]: [{ year, fraction }] }
  pulse: { type: Object, required: true },
})

const REFERENCE = { label: 'Joos et al. (2013), multi-model mean', color: 'black' }

function options() {
  const ids = Object.keys(props.pulse)
  const years = props.pulse[ids[0]].map(d => d.year).filter(year => year >= 5)
  const reference = years.map(year => ({ year, fraction: joos2013(year), model: REFERENCE.label }))
  const models = ids.flatMap(id =>
    props.pulse[id].filter(d => d.year >= 5).map(d => ({ ...d, model: MODEL_STYLES[id].label })))
  const legend = [REFERENCE, ...ids.map(id => MODEL_STYLES[id])]

  return {
    height: 380,
    marginLeft: 50,
    color: { domain: legend.map(d => d.label), range: legend.map(d => d.color), legend: true },
    x: { type: 'log', domain: [5, 1000], label: 'Years after the pulse', grid: true },
    y: { domain: [0, 1], label: 'Share of the pulse in the atmosphere', tickFormat: '%', grid: true },
    marks: [
      Plot.ruleY([0], { stroke: 'grey' }),
      Plot.line(reference, { x: 'year', y: 'fraction', stroke: 'model', strokeWidth: 3, strokeDasharray: '4,4' }),
      Plot.line(models, { x: 'year', y: 'fraction', z: 'model', stroke: 'model', strokeWidth: 2.5 }),
      Plot.tip([...reference, ...models], Plot.pointer({
        x: 'year', y: 'fraction', title: d => `${d.model}\n${d.year} years: ${(d.fraction * 100).toFixed(0)} %`,
      })),
    ],
  }
}
</script>

<template>
  <PlotFigure :options="options" />
</template>
