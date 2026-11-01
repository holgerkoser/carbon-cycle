// Response of the atmosphere to a CO₂ pulse, following the protocol of Joos et al. (2013), ACP 13, 2793–2825:
// historical emissions up to 2010, then the concentration of the background run is held constant
// and 100 GtC are emitted at once in the pulse run.
import { createCarbonModel } from './carbonModels.js'
import { createEmissionLookup } from './emissions.js'
import { rk4Step } from './rk4.js'
import { START_YEAR } from './constants.js'

const PULSE = 100 // GtC
const PULSE_YEAR = 2010

// Multi-model mean impulse response of Joos et al. (2013) for a 100 GtC pulse at 389 ppm
export const joos2013 = t =>
  0.2173 + 0.2240 * Math.exp(-t / 394.4) + 0.2824 * Math.exp(-t / 36.54) + 0.2763 * Math.exp(-t / 4.304)

// Returns [{ year, fraction }]: share of the pulse still in the atmosphere `year` years after the emission
export function pulseResponse(p, historicalEmissions, modelId, { years = 1000, every = 5 } = {}) {
  const history = createEmissionLookup(historicalEmissions, [])
  // Both runs read their emissions from this variable after the spin-up
  let emission = null
  const emissionsAt = t => emission ?? (t < PULSE_YEAR ? history(t) : { delta: 0, gamma: 0 })
  const system = createCarbonModel(modelId, p, emissionsAt)
  const { dydt, stepSize } = system
  const clamped = (t, y) => { const d = dydt(t, y); d[0] = 0; return d }

  let y = system.y0
  for (let t = START_YEAR; t < PULSE_YEAR - 1e-9; t += stepSize) y = rk4Step(dydt, t, y, stepSize)

  let background = y
  let pulsed = y
  const baseline = y[0]
  const data = [{ year: 0, fraction: 1 }]
  const stepsPerYear = Math.round(1 / stepSize)
  for (let year = 0; year < years; year++) {
    for (let i = 0; i < stepsPerYear; i++) {
      const t = PULSE_YEAR + year + i * stepSize
      // Emission that keeps the background concentration constant
      emission = { delta: 0, gamma: 0 }
      const neutral = -dydt(t, background)[0]
      background = rk4Step(clamped, t, background, stepSize)
      emission = { delta: 0, gamma: neutral + (year === 0 ? PULSE : 0) }
      pulsed = rk4Step(dydt, t, pulsed, stepSize)
    }
    if ((year + 1) % every === 0) data.push({ year: year + 1, fraction: (pulsed[0] - baseline) / PULSE })
  }
  return data
}
