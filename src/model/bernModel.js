// Bern carbon cycle model as used in the IPCC assessments (Joos et al., 1996; BernSCM v1.0,
// Strassmann & Joos, 2018) without climate feedbacks:
//   ocean: mixed-layer impulse response of HILDA, Bern2.5D or Princeton 3D and non-linear carbonate chemistry
//   land:  4-box biosphere, NPP = NPP⁰ (1 + β ln(c / c⁰)), decay by the 4-box impulse response
// Land-use change is an emission to the atmosphere; the model tracks perturbations since 1750.
//
// State vector:
//   0 atmosphere, 1–6 mixed-layer IRF terms, 7 constant mixed-layer term,
//   8 cumulative air–sea flux, 9–12 land IRF terms, 13 cumulative land-use change emissions
import { EPSILON } from './constants.js'
import { OCEAN_MODELS, dicPerGtC, surfacePCO2Increase } from './oceanResponse.js'

// 4-box biosphere (Siegenthaler & Joos, 1992) as impulse response of the decay of NPP
const LAND = {
  a: [2.006028671730, 0.26828, -1.56754896028, 0.29323],
  tau: [2.857143, 20, 2.181818, 100],
}

const MIXED = [1, 2, 3, 4, 5, 6]
const MIXED_CONSTANT = 7
const OCEAN_UPTAKE = 8
const LAND_TERMS = [9, 10, 11, 12]
const LAND_USE = 13

export function createBernModel(p, emissionsAt, oceanModel = p.oceanModel) {
  const ocean = OCEAN_MODELS[oceanModel]
  const dicPerCarbon = dicPerGtC(ocean)
  const gasExchange = ocean.gasExchange * p.gasExchangeFactor
  const ppm0 = p.atmosphere0 / EPSILON

  const sum = (y, indices) => indices.reduce((total, i) => total + y[i], 0)
  const mixedLayer = y => sum(y, MIXED) + y[MIXED_CONSTANT]

  const fluxesAt = (t, y) => {
    const ppm = y[0] / EPSILON
    const surfacePpm = ppm0 + surfacePCO2Increase(mixedLayer(y) * dicPerCarbon, ocean.temperature)
    const { delta, gamma } = emissionsAt(t)
    return {
      airSea: gasExchange * EPSILON * (ppm - surfacePpm),
      // Net transport from the mixed layer into the deep ocean: the decay of the IRF terms
      toDeepOcean: MIXED.reduce((total, i, k) => total + y[i] / ocean.tau[k], 0),
      // Additional NPP by CO₂ fertilization and the decay of the additional biomass
      extraNpp: p.bernNpp0 * p.bernBeta * Math.log(ppm / ppm0),
      extraDecay: LAND_TERMS.reduce((total, i, k) => total + y[i] / LAND.tau[k], 0),
      delta,
      gamma,
    }
  }

  const dydt = (t, y) => {
    const f = fluxesAt(t, y)
    const d = new Array(y.length).fill(0)
    d[0] = f.gamma + f.delta - f.airSea - f.extraNpp + f.extraDecay
    MIXED.forEach((i, k) => { d[i] = ocean.a[k] * f.airSea - y[i] / ocean.tau[k] })
    d[MIXED_CONSTANT] = ocean.aInf * f.airSea
    d[OCEAN_UPTAKE] = f.airSea
    LAND_TERMS.forEach((i, k) => { d[i] = LAND.a[k] * f.extraNpp - y[i] / LAND.tau[k] })
    d[LAND_USE] = f.delta
    return d
  }

  return {
    id: 'bern',
    y0: [p.atmosphere0, ...new Array(13).fill(0)],
    // The fastest ocean IRF term (≈ 2 weeks) needs a short step for a stable explicit integration
    stepSize: 0.05,
    dydt,
    fluxesAt,
    reservoirs: y => ({
      atmosphere: y[0],
      ocean: y[OCEAN_UPTAKE],
      // Change of land carbon: fertilization uptake minus the carbon lost by land-use change
      land: sum(y, LAND_TERMS) - y[LAND_USE],
      landUptake: sum(y, LAND_TERMS),
      mixedLayer: mixedLayer(y),
      deepOcean: y[OCEAN_UPTAKE] - mixedLayer(y),
    }),
  }
}
