<script setup>
import { computed, ref } from 'vue'
import ChartCard from '@/components/ChartCard.vue'
import KpiCard from '@/components/KpiCard.vue'
import ModelComparisonTable from '@/components/ModelComparisonTable.vue'
import RangeSelector from '@/components/RangeSelector.vue'
import ReserveTile from '@/components/ReserveTile.vue'
import CarbonBudgetChart from '@/components/charts/CarbonBudgetChart.vue'
import ConcentrationChart from '@/components/charts/ConcentrationChart.vue'
import EmissionsChart from '@/components/charts/EmissionsChart.vue'
import PulseResponseChart from '@/components/charts/PulseResponseChart.vue'
import TemperatureChart from '@/components/charts/TemperatureChart.vue'
import { MODEL_STYLES } from '@/components/charts/modelStyles.js'
import { useModel } from '@/composables/useModel.js'
import { useParameters } from '@/composables/useParameters.js'
import { useTimeRange } from '@/composables/useTimeRange.js'
import { END_YEAR, PROJECTION_START, START_YEAR } from '@/model/constants.js'

const { data, error, result, summary, pulse } = useModel()
const { parameters } = useParameters()
const { timeRange } = useTimeRange()

const rangePresets = [
  { label: 'All', range: [START_YEAR, END_YEAR] },
  { label: '1850–2100', range: [1850, 2100] },
  { label: '1950–2050', range: [1950, 2050] },
  { label: 'Projection', range: [PROJECTION_START, END_YEAR] },
]

// CO₂ of both models as overview of the range selector
const overview = computed(() => Object.entries(result.value?.models ?? {}).map(([id, model]) => ({
  label: MODEL_STYLES[id].label,
  color: MODEL_STYLES[id].color,
  points: model.concentration.map(d => ({ year: d.year, value: d.ppm })),
})))

// View settings; they only change what is shown, not the model
const scenario = ref('SSP2-4.5')

// Global carbon budget, one chart each, laid out 2 × 2
const budgetComponents = [
  { key: 'atmosphericGrowth', title: 'Atmospheric growth' },
  { key: 'totalSink', title: 'Land & ocean sink' },
  { key: 'oceanSink', title: 'Ocean sink' },
  { key: 'landSink', title: 'Land sink' },
]

const format = (value, digits = 0) => value.toLocaleString('en-US', { maximumFractionDigits: digits })

// One value per model for a key figure
const perModel = (value, detail) => Object.keys(MODEL_STYLES).map(id => ({
  name: MODEL_STYLES[id].label,
  color: MODEL_STYLES[id].color,
  value: value(summary.value[id]),
  detail: detail?.(summary.value[id]),
}))
</script>

<template>
  <div class="dashboard">
    <p v-if="error" class="message error">Could not load the data: {{ error.message }}</p>
    <p v-else-if="!result" class="message">Loading data…</p>

    <template v-else>
      <p class="intro">
        How does burning today’s fossil <em>reserves</em> change the CO₂ concentration of the atmosphere?
        Both carbon cycle models, <strong :style="{ color: MODEL_STYLES.tomizuka.color }">Tomizuka (2009)</strong>
        and the <strong :style="{ color: MODEL_STYLES.bern.color }">Bern model</strong> used by the IPCC,
        run with the same emissions. Set the share of each reserve consumed until {{ END_YEAR }} in the sidebar;
        the <RouterLink to="/theory">theory page</RouterLink> explains the models with an interactive diagram of each.
      </p>

      <div class="range">
        <RangeSelector
          v-model="timeRange"
          :min="START_YEAR"
          :max="END_YEAR"
          :series="overview"
          :presets="rangePresets"
        />
      </div>

      <h2 class="section-title">Assumption: burning the reserves</h2>
      <div class="assumption">
        <ReserveTile :reserves="result.reserves" :fossil-emissions="summary.tomizuka.cumulativeFossil" />
        <ChartCard
          title="Anthropogenic CO₂ emissions"
          subtitle="Historical data (solid) and the projection driving both models (dashed)"
          caption="The SSP scenario is shown for comparison only; it does not drive the models."
        >
          <template #controls>
            <label for="scenario">Reference</label>
            <select id="scenario" v-model="scenario">
              <option v-for="name in data.scenarios.names" :key="name" :value="name">{{ name }}</option>
            </select>
          </template>
          <EmissionsChart
            :result="result"
            :historical="data.historicalEmissions"
            :scenarios="data.scenarios"
            :scenario="scenario"
            :height="300"
          />
        </ChartCard>
      </div>

      <h2 class="section-title">Results</h2>
      <div class="kpis">
        <KpiCard label="Peak CO₂" unit="ppm" :values="perModel(s => format(s.peak.ppm), s => `in ${s.peak.year}`)" />
        <KpiCard label="CO₂ in 2100" unit="ppm" :values="perModel(s => format(s.ppm2100))" />
        <KpiCard label="CO₂ in 2300" unit="ppm" :values="perModel(s => format(s.ppm2300))" />
        <KpiCard label="Peak warming" unit="°C" :values="perModel(s => format(s.peakWarming.anomaly, 1), s => `in ${s.peakWarming.year}`)" />
        <KpiCard label="Warming in 2100" unit="°C" :values="perModel(s => format(s.warming2100, 1))" />
        <KpiCard label="CO₂ in 2025" unit="ppm" :values="perModel(s => format(s.ppm2025))" />
      </div>

      <div class="grid">
        <ChartCard
          title="Atmospheric CO₂ concentration"
          subtitle="Both models compared to measurements"
          caption="The shaded range spans the three ocean transport models of the Bern model (HILDA, Bern2.5D, Princeton). Ice core records are smoothed multi-year averages."
        >
          <ConcentrationChart :result="result" :observations="data.concentration" />
        </ChartCard>

        <ChartCard
          title="Temperature anomaly"
          :subtitle="parameters.otherForcingShare > 0
            ? `Two-layer energy balance model, CO₂ forcing + ${parameters.otherForcingShare} % for other forcings`
            : 'Two-layer energy balance model, CO₂ forcing only'"
          caption="The observed warming also contains methane, nitrous oxide and aerosols; with CO₂ forcing only the models stay about 0.25 °C below the recent observations. The black line is the 10-year mean of the observations."
        >
          <TemperatureChart :result="result" :observations="data.temperature" />
        </ChartCard>
      </div>

      <h2 class="section-title">Comparison with the observed carbon budget</h2>
      <div class="budget-grid">
        <ChartCard
          v-for="budget in budgetComponents"
          :key="budget.key"
          :title="budget.title"
          subtitle="Both models compared to the Global Carbon Budget 2025"
        >
          <CarbonBudgetChart :result="result" :observations="data.gcb" :component="budget.key" />
        </ChartCard>
      </div>

      <h2 class="section-title">Model test</h2>
      <div class="grid">
        <ChartCard
          title="Long-term test: response to a CO₂ pulse"
          subtitle="Share of 100 GtC emitted in 2010 that stays in the atmosphere"
          caption="Protocol of Joos et al. (2013): historical emissions up to 2010, then constant background concentration. The reference is the mean of the carbon cycle models compared in that study."
        >
          <PulseResponseChart v-if="pulse" :pulse="pulse" />
        </ChartCard>

        <ChartCard
          title="Model comparison"
          subtitle="Deviation from observations; the value closer to the observation is bold"
          caption="Observations: NOAA Mauna Loa, Global Carbon Budget 2025. For the pulse rows the reference is the multi-model mean of Joos et al. (2013)."
        >
          <ModelComparisonTable :summary="summary" :pulse="pulse" :data="data" />
        </ChartCard>
      </div>
    </template>
  </div>
</template>

<style scoped>
.intro {
  margin: 0 0 20px;
  max-width: 80ch;
  color: var(--text-muted);
}

.message {
  color: var(--text-muted);
}

.message.error {
  color: var(--danger);
}

.range {
  position: sticky;
  top: 56px;
  z-index: 5;
  margin: 0 -4px 8px;
  padding: 8px 4px;
  background: var(--background);
}

.section-title {
  margin: 28px 0 12px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.assumption {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
}

@media (min-width: 1100px) {
  .assumption {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }
}

.kpis {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

/* Six key figures in two rows of three, or one row on wide screens */
@media (min-width: 640px) {
  .kpis {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1500px) {
  .kpis {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
}

@media (min-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.budget-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
}

@media (min-width: 640px) {
  .budget-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

select {
  padding: 4px 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
}
</style>
