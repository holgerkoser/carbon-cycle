import { reactive, watch } from 'vue'
import { defaultParameters } from '@/model/parameters.js'

const STORAGE_KEY = 'carbon-cycle:parameters'

// Restores saved values for known parameters only, ignoring values of the wrong type
function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
    return Object.fromEntries(
      Object.entries(saved).filter(([key, value]) => typeof value === typeof defaultParameters[key]),
    )
  } catch {
    return {}
  }
}

// Single source of truth for all model parameters, shared by the sidebar and the model
const parameters = reactive({ ...defaultParameters, ...restore() })

watch(parameters, value => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // Storage may be unavailable (private mode); parameters then only live for this session
  }
}, { deep: true })

function resetParameters(keys = Object.keys(defaultParameters)) {
  for (const key of keys) parameters[key] = defaultParameters[key]
}

const isDefault = key => parameters[key] === defaultParameters[key]

export function useParameters() {
  return { parameters, resetParameters, isDefault }
}
