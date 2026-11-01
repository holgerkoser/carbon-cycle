// Common interface of the carbon cycle models:
//   y0          initial state (the atmosphere is always y[0], in PgC)
//   stepSize    RK4 step [years]
//   dydt        (t, y) => dy/dt
//   fluxesAt    (t, y) => named fluxes [PgC/yr]
//   reservoirs  y => { atmosphere, ocean, land, … } [PgC]; ocean and land may be changes since 1750
import { createBernModel } from './bernModel.js'
import { createSevenBoxSystem } from './boxModel.js'
import { END_YEAR, START_YEAR } from './constants.js'
import { solveRK4 } from './rk4.js'

export const CARBON_MODELS = {
  tomizuka: { label: 'Tomizuka (2009)', create: (p, emissionsAt) => createSevenBoxSystem(p, emissionsAt) },
  bern: { label: 'Bern model (IPCC)', create: (p, emissionsAt, { oceanModel } = {}) => createBernModel(p, emissionsAt, oceanModel) },
}

export const MODEL_IDS = Object.keys(CARBON_MODELS)

export const createCarbonModel = (modelId, p, emissionsAt, options) =>
  CARBON_MODELS[modelId].create(p, emissionsAt, options)

export function runCarbonModel(system, endYear = END_YEAR) {
  return solveRK4(system.dydt, [START_YEAR, endYear], system.y0, { stepSize: system.stepSize })
}
