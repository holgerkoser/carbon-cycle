<script setup>
import * as Plot from '@observablehq/plot'
import PlotFigure from '../PlotFigure.vue'
import { paddedDomain } from './scales.js'
import { useTimeRange } from '@/composables/useTimeRange.js'
import { PHI } from '@/model/constants.js'

const props = defineProps({
  result: { type: Object, required: true },
  historical: { type: Array, required: true },
  scenarios: { type: Object, required: true },
  scenario: { type: String, required: true },
  height: { type: Number, default: 420 },
})

const { timeRange, inRange } = useTimeRange()

const sources = [
  { label: 'Coal', color: 'black', historical: 'coal', projected: 'coal' },
  { label: 'Oil', color: 'darkred', historical: 'oil', projected: 'oil' },
  { label: 'Gas', color: 'darkorange', historical: 'gas', projected: 'gas' },
  { label: 'Other industry', color: '#76b7b2', historical: 'otherIndustry', projected: 'otherIndustry' },
  { label: 'Land-use change', color: '#59a14f', historical: 'landUse', projected: 'landUse' },
  { label: 'Total', color: 'steelblue', historical: d => d.fossil + d.landUse, projected: 'total' },
]

const value = (d, accessor) => (typeof accessor === 'function' ? accessor(d) : d[accessor])

function options() {
  // Historical data in GtC/yr, projections in GtCO₂/yr
  const visible = d => inRange(d.year)
  const historical = sources.flatMap(source => props.historical.filter(visible)
    .map(d => ({ year: d.year, source: source.label, value: value(d, source.historical) * PHI })))
  const projected = sources.flatMap(source => props.result.projection.filter(visible)
    .map(d => ({ year: d.year, source: source.label, value: value(d, source.projected) })))
  const scenario = props.scenarios.data.filter(d => d.scenario === props.scenario && visible(d))

  return {
    height: props.height,
    marginLeft: 50,
    color: {
      domain: [...sources.map(s => s.label), props.scenario],
      range: [...sources.map(s => s.color), '#bc80bd'],
      legend: true,
    },
    x: { domain: timeRange.value, label: 'Year', tickFormat: 'd', grid: true },
    y: { domain: paddedDomain([...historical, ...projected, ...scenario].map(d => d.value), 5, { include: [0] }), label: 'CO₂ emissions [Gt/yr]', grid: true },
    marks: [
      Plot.ruleY([0], { stroke: 'grey' }),
      Plot.line(scenario, { x: 'year', y: 'value', stroke: () => props.scenario, strokeWidth: 2, strokeDasharray: '3,6' }),
      Plot.line(projected, { x: 'year', y: 'value', z: 'source', stroke: 'source', strokeWidth: 2, strokeDasharray: '3,6' }),
      Plot.line(historical, { x: 'year', y: 'value', z: 'source', stroke: 'source' }),
      Plot.tip([...historical, ...projected], Plot.pointer({
        x: 'year',
        y: 'value',
        title: d => `${d.source}, ${d.year}\n${d.value.toFixed(1)} GtCO₂/yr`,
      })),
    ],
  }
}
</script>

<template>
  <PlotFigure :options="options" />
</template>
