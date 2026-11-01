<script setup>
// Carbon cycle diagram of one model with its own timeline, computed with the current parameters
import { computed, ref } from 'vue'
import BernCycleDiagram from './BernCycleDiagram.vue'
import CarbonCycleDiagram from './CarbonCycleDiagram.vue'
import TimelineSlider from './TimelineSlider.vue'
import { MODEL_STYLES } from './charts/modelStyles.js'
import { useModel } from '@/composables/useModel.js'
import { END_YEAR, PROJECTION_START, START_YEAR } from '@/model/constants.js'

const props = defineProps({
  // 'tomizuka' or 'bern'
  model: { type: String, required: true },
})

const { error, result } = useModel()
const year = ref(PROJECTION_START)

const run = computed(() => result.value?.models[props.model])
const style = computed(() => MODEL_STYLES[props.model])

const concentration = computed(() => run.value?.concentration.map(d => ({ year: d.year, value: d.ppm })) ?? [])

const roundFluxes = flux => Object.fromEntries(Object.entries(flux).map(([key, value]) =>
  [key, Number(value.toFixed(key === 'delta' || key === 'gamma' ? 2 : 1))]))

const diagram = computed(() => {
  if (!run.value) return null
  const { system, series } = run.value
  const { reserves } = result.value
  const y = series.find(d => d.t === year.value).y
  // Reserves on January 1 are those left at the end of the previous year
  const reserve = (reserves.find(d => d.year === year.value - 1) ?? reserves[0]).total
  const fluxes = roundFluxes(system.fluxesAt(year.value, y))

  if (props.model === 'tomizuka') {
    return { fluxes, masses: [...y, reserve].map(Math.round) }
  }
  const { atmosphere, land, mixedLayer, deepOcean } = system.reservoirs(y)
  const masses = { atmosphere, land, mixedLayer, deepOcean, reserves: reserve }
  return { fluxes, masses: Object.fromEntries(Object.entries(masses).map(([key, value]) => [key, Math.round(value)])) }
})
</script>

<template>
  <figure class="model-diagram">
    <p v-if="error" class="message">Could not load the data: {{ error.message }}</p>
    <p v-else-if="!diagram" class="message">Loading model…</p>
    <template v-else>
      <TimelineSlider
        v-model="year"
        :min="START_YEAR"
        :max="END_YEAR"
        :projection-start="PROJECTION_START"
        :series="concentration"
        series-label="Atmospheric CO₂"
        :color="style.color"
      />
      <CarbonCycleDiagram v-if="model === 'tomizuka'" :fluxes="diagram.fluxes" :masses="diagram.masses" />
      <BernCycleDiagram v-else :fluxes="diagram.fluxes" :masses="diagram.masses" />
      <figcaption>
        {{ style.label }} on January 1, {{ year }}, computed with the parameters of the dashboard.
        Drag the timeline or press play to follow the carbon through time.
      </figcaption>
    </template>
  </figure>
</template>

<style scoped>
.model-diagram {
  margin: 24px 0;
  padding: 16px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--sans);
}

.message,
figcaption {
  margin: 8px 0 0;
  color: var(--text-muted);
  font-size: 0.8rem;
  line-height: 1.4;
}
</style>
