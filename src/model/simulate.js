import { observedBudget, modelBudget, modelBudgetSeries } from './budget.js'
import { MODEL_IDS, createCarbonModel, runCarbonModel } from './carbonModels.js'
import { radiativeForcing, temperatureAnomaly } from './climate.js'
import { EPSILON, PROJECTION_START, END_YEAR } from './constants.js'
import { createEmissionLookup, projectEmissions } from './emissions.js'
import { OCEAN_MODELS } from './oceanResponse.js'
import { calibrationSteps } from './parameters.js'
import { reserveSeries } from './reserves.js'

const toConcentration = series => series.map(({ t, y }) => ({ year: t, ppm: y[0] / EPSILON }))

// Runs both carbon cycle models with the same emissions
export function simulate(p, data) {
  const projection = projectEmissions(p)
  const emissionsAt = createEmissionLookup(data.historicalEmissions, projection, {
    disabled: p.noAnthropogenicEmissions,
  })
  return {
    projection,
    emissionsAt,
    reserves: reserveSeries(p, data.historicalEmissions, projection),
    ligniteConsumption: ligniteConsumption(p, projection),
    models: Object.fromEntries(MODEL_IDS.map(id => [id, runModel(id, p, emissionsAt)])),
  }
}

function runModel(id, p, emissionsAt) {
  const system = createCarbonModel(id, p, emissionsAt)
  const series = runCarbonModel(system)
  const concentration = toConcentration(series)
  const forcing = radiativeForcing(concentration, p.atmosphere0 / EPSILON)
  return {
    id,
    system,
    series,
    concentration,
    budget: modelBudgetSeries(series, emissionsAt, system.reservoirs),
    forcing,
    temperature: temperatureAnomaly(forcing, p),
    uncertainty: id === 'bern' ? oceanUncertainty(p, emissionsAt) : null,
  }
}

// Range of concentration and temperature of the Bern model over the three ocean transport models
function oceanUncertainty(p, emissionsAt) {
  const runs = Object.keys(OCEAN_MODELS).map(oceanModel => {
    const concentration = toConcentration(runCarbonModel(createCarbonModel('bern', p, emissionsAt, { oceanModel })))
    const temperature = temperatureAnomaly(radiativeForcing(concentration, p.atmosphere0 / EPSILON), p)
    return { concentration, temperature }
  })
  const range = (key, value) => runs[0][key].map((d, i) => {
    const values = runs.map(run => run[key][i][value])
    return { year: d.year, min: Math.min(...values), max: Math.max(...values) }
  })
  return { concentration: range('concentration', 'ppm'), temperature: range('temperature', 'anomaly') }
}

// Share of the lignite reserves burned by the fixed lignite projection [%]
function ligniteConsumption(p, projection) {
  const burned = projection.reduce((sum, d) => sum + d.lignite, 0)
  return 100 * burned / (p.ligniteReserves * p.ligniteEmissionFactor)
}

const mean = values => values.reduce((sum, value) => sum + value, 0) / values.length

// Key figures of one model run, including its deviation from the observations
export function summarize(result, model, data) {
  const { concentration, temperature, budget } = model
  const at = year => concentration.find(d => d.year === year)
  const future = concentration.filter(d => d.year >= PROJECTION_START)
  const peak = future.reduce((max, d) => (d.ppm > max.ppm ? d : max), future[0])
  const futureTemperature = temperature.filter(d => d.year >= PROJECTION_START)
  const peakWarming = futureTemperature.reduce((max, d) => (d.anomaly > max.anomaly ? d : max), futureTemperature[0])
  const cumulativeFossil = result.projection.reduce((sum, d) => sum + result.emissionsAt(d.year).gamma, 0)

  // Annual mean concentration ≈ mean of January 1 and December 31
  const annualMean = year => (at(year).ppm + at(year + 1).ppm) / 2
  const maunaLoa = data.concentration.filter(d => d.source === 'maunaLoa' && d.year < PROJECTION_START)
  const budgetMean = (key, from, to) => mean(budget.filter(d => d.year >= from && d.year <= to).map(d => d[key]))

  return {
    ppm2025: at(PROJECTION_START).ppm,
    ppm2100: at(2100).ppm,
    ppm2300: at(END_YEAR).ppm,
    peak,
    cumulativeFossil,
    warming2100: temperature.find(d => d.year === 2100).anomaly,
    peakWarming,
    rmse: Math.sqrt(mean(maunaLoa.map(d => (annualMean(d.year) - d.ppm) ** 2))),
    ppm2024: annualMean(2024),
    oceanSink: budgetMean('oceanSink', 2015, 2024),
    landSink: budgetMean('landSink', 2015, 2024),
  }
}

// Weighted squared deviation of the modelled from the observed carbon budget 1851–2024 for one carbon model
export function calibrationError(p, data, modelId) {
  const lastYear = Math.min(data.gcb.at(-1).year, data.historicalEmissions.at(-1).year)
  const emissionsAt = createEmissionLookup(data.historicalEmissions, projectEmissions(p))
  const system = createCarbonModel(modelId, p, emissionsAt)
  const series = runCarbonModel(system, lastYear + 1)

  let error = 0
  for (let year = 1851; year <= lastYear; year++) {
    const model = modelBudget(series, emissionsAt, year, system.reservoirs)
    const observed = observedBudget(data.gcb, year)
    const weight = year < 1870 ? 0 : year > 1950 ? 8 : 0
    error += weight * (
      + 8 * (model.atmosphericGrowth - observed.atmosphericGrowth) ** 2
      + 4 * (model.oceanSink - observed.oceanSink) ** 2
      + 1 * (model.landSink - observed.landSink) ** 2
    )
  }
  return error
}

// Coordinate search: tries ± step for each parameter and halves the step when neither improves the fit
export function calibrate(p, data, modelId, { tolerance = 1e-5, maxIterations = 1000 } = {}) {
  const steps = calibrationSteps[modelId]
  const keys = Object.keys(steps)
  const current = { ...p }
  const step = { ...steps }
  let error = calibrationError(current, data, modelId)

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let converged = true
    for (const key of keys) {
      const value = current[key]
      let improved = false
      for (const delta of [step[key], -step[key]]) {
        const candidate = { ...current, [key]: value + delta }
        const candidateError = calibrationError(candidate, data, modelId)
        if (candidateError < error) {
          Object.assign(current, candidate)
          error = candidateError
          improved = true
          break
        }
      }
      if (!improved) step[key] /= 2
      if (step[key] >= steps[key] * tolerance) converged = false
    }
    if (converged) break
  }

  return { parameters: Object.fromEntries(keys.map(key => [key, current[key]])), error }
}
