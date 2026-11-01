import { computed, ref, shallowRef } from 'vue'
import { loadData } from '@/data/loadData.js'
import { MODEL_IDS } from '@/model/carbonModels.js'
import { transientClimateResponse } from '@/model/climate.js'
import { defaultParameters, parameterGroups } from '@/model/parameters.js'
import { pulseResponse } from '@/model/pulse.js'
import { calibrate, calibrationError, simulate, summarize } from '@/model/simulate.js'
import { useParameters } from './useParameters.js'

const { parameters } = useParameters()

const data = shallowRef(null)
const error = ref(null)
let loading = null

// Re-runs both models whenever a parameter changes
const result = computed(() => (data.value ? simulate({ ...parameters }, data.value) : null))
const summary = computed(() => result.value && Object.fromEntries(
  MODEL_IDS.map(id => [id, summarize(result.value, result.value.models[id], data.value)]),
))

// Parameters of the carbon cycles themselves; the pulse response depends on nothing else
const carbonKeys = parameterGroups
  .filter(group => ['inventories', 'exchange', 'bern'].includes(group.id))
  .flatMap(group => group.parameters.map(({ key }) => key))

// Pulse response of both models, recomputed only when a carbon cycle parameter changes
const pulse = computed(() => {
  if (!data.value) return null
  const p = { ...defaultParameters, ...Object.fromEntries(carbonKeys.map(key => [key, parameters[key]])) }
  return Object.fromEntries(MODEL_IDS.map(id => [id, pulseResponse(p, data.value.historicalEmissions, id)]))
})

const tcr = computed(() => transientClimateResponse(parameters))

const decimals = step => (String(step).split('.')[1] ?? '').length
const stepOf = key => parameterGroups.flatMap(g => g.parameters).find(d => d.key === key).step

// Fits the calibrated parameters of one model to the Global Carbon Budget and writes them back
async function fitParameters(modelId) {
  // Let the UI show the busy state before the synchronous fit blocks the main thread
  await new Promise(resolve => setTimeout(resolve, 20))
  const before = calibrationError({ ...parameters }, data.value, modelId)
  const fit = calibrate({ ...parameters }, data.value, modelId)
  for (const [key, value] of Object.entries(fit.parameters)) {
    parameters[key] = Number(value.toFixed(decimals(stepOf(key))))
  }
  return { before, after: calibrationError({ ...parameters }, data.value, modelId) }
}

export function useModel() {
  loading ??= loadData()
    .then(value => { data.value = value })
    .catch(reason => { error.value = reason })
  return { data, error, result, summary, pulse, tcr, fitParameters }
}
