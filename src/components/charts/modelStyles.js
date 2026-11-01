import { CARBON_MODELS } from '@/model/carbonModels.js'

// Colors of the carbon models in all charts; observations are drawn in grey and black
export const MODEL_STYLES = {
  tomizuka: { label: CARBON_MODELS.tomizuka.label, short: 'Tomizuka', color: '#d95f02' },
  bern: { label: CARBON_MODELS.bern.label, short: 'Bern', color: '#1f77b4' },
}

export const BERN_RANGE = { label: 'Bern: ocean transport range', color: '#c6dbef' }
