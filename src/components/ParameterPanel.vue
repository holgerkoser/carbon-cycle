<script setup>
import { computed, ref } from 'vue'
import ParameterField from './ParameterField.vue'
import { useModel } from '@/composables/useModel.js'
import { useParameters } from '@/composables/useParameters.js'
import { parameterGroups } from '@/model/parameters.js'

const { parameters, resetParameters, isDefault } = useParameters()
const { data, result, tcr, fitParameters } = useModel()

const format = (value, digits = 1) => value.toLocaleString('en-US', { maximumFractionDigits: digits })

const visible = group => group.parameters.filter(d => !d.visibleWhen || d.visibleWhen(parameters))

// Values that follow from other parameters, shown read-only below their group
const derived = computed(() => ({
  consumption: result.value
    ? [{ label: 'Lignite (fixed projection)', value: `${format(result.value.ligniteConsumption)} %` }]
    : [],
  inventories: [
    { label: 'Deep ocean share', value: `${format(100 - parameters.surfaceOceanShare - parameters.intermediateOceanShare)} %` },
    { label: 'Soil share', value: `${format(100 - parameters.vegetationShare)} %` },
  ],
  climate: [
    { label: 'Transient climate response (TCR)', value: `${format(tcr.value)} °C` },
  ],
}))

const warnings = computed(() => ({
  inventories: parameters.surfaceOceanShare + parameters.intermediateOceanShare > 100
    ? 'Surface and intermediate ocean together exceed 100 %.'
    : '',
}))

const fitLabels = {
  tomizuka: 'Fit β and thermohaline circulation',
  bern: 'Fit fertilization factor β',
}

const groupModified = group => group.parameters.some(({ key }) => !isDefault(key))
const resetGroup = group => resetParameters(group.parameters.map(({ key }) => key))

// Which model is being fitted, and the last result per model
const fitting = ref(null)
const fitResults = ref({})

async function fit(modelId) {
  fitting.value = modelId
  try {
    fitResults.value = { ...fitResults.value, [modelId]: await fitParameters(modelId) }
  } finally {
    fitting.value = null
  }
}
</script>

<template>
  <div class="parameter-panel">
    <div class="panel-header">
      <h2>Parameters</h2>
      <button type="button" class="link-button" @click="resetParameters()">Reset all</button>
    </div>

    <details v-for="group in parameterGroups" :key="group.id" class="group" :open="!group.advanced">
      <summary>
        <span class="group-title">{{ group.title }}</span>
        <span v-if="groupModified(group)" class="badge" title="Contains changed values">changed</span>
      </summary>

      <p class="description">{{ group.description }}</p>

      <ParameterField
        v-for="definition in visible(group)"
        :key="definition.key"
        v-model="parameters[definition.key]"
        :definition="definition"
        :modified="!isDefault(definition.key)"
        @reset="resetParameters([definition.key])"
      />

      <dl v-if="derived[group.id]?.length" class="derived">
        <template v-for="item in derived[group.id]" :key="item.label">
          <dt>{{ item.label }}</dt>
          <dd>{{ item.value }}</dd>
        </template>
      </dl>

      <p v-if="warnings[group.id]" class="warning">{{ warnings[group.id] }}</p>

      <div v-if="group.fit" class="fit">
        <button type="button" class="button" :disabled="!data || fitting !== null" @click="fit(group.fit)">
          {{ fitting === group.fit ? 'Fitting…' : fitLabels[group.fit] }}
        </button>
        <p class="hint">
          Fits to the Global Carbon Budget 1951–2024
          (atmospheric growth, ocean and land sink).
        </p>
        <p v-if="fitResults[group.fit]" class="hint">
          Error {{ format(fitResults[group.fit].before, 0) }} → {{ format(fitResults[group.fit].after, 0) }}
        </p>
      </div>

      <button v-if="groupModified(group)" type="button" class="link-button" @click="resetGroup(group)">
        Reset {{ group.title.toLowerCase() }}
      </button>
    </details>
  </div>
</template>

<style scoped>
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 4px 8px;
}

h2 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
}

.group {
  border-top: 1px solid var(--border);
  padding: 10px 4px;
}

summary {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  list-style-position: outside;
}

.badge {
  font-size: 0.65rem;
  font-weight: 500;
  color: var(--accent);
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 0 6px;
}

.description,
.hint {
  margin: 6px 0;
  color: var(--text-muted);
  font-size: 0.75rem;
  line-height: 1.4;
}

.derived {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2px 8px;
  margin: 8px 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.derived dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
  color: var(--text);
}

.warning {
  color: var(--danger);
  font-size: 0.8rem;
}

.fit {
  margin-top: 12px;
}

.button {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: var(--accent);
  color: white;
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}

.button:disabled {
  opacity: 0.6;
  cursor: progress;
}

.link-button {
  border: none;
  background: none;
  padding: 0;
  color: var(--accent);
  font: inherit;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
