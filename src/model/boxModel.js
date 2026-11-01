// Seven-box carbon cycle model after Tomizuka (2009), Am. J. Phys. 77(2), 156–163.
//
// Reservoirs (index → box):
//   N1 atmosphere, N2 surface ocean, N3 intermediate ocean, N4 deep ocean,
//   N5 sediments, N6 biosphere (vegetation), N7 soil
import { EPSILON, STEP_SIZE } from './constants.js'

export const RESERVOIRS = [
  'Atmosphere', 'Surface ocean', 'Intermediate ocean', 'Deep ocean', 'Sediments', 'Biosphere', 'Soil',
]

// Pre-industrial carbon inventories N⁰ [PgC]
export function initialInventories(p) {
  const deepOceanShare = 100 - p.surfaceOceanShare - p.intermediateOceanShare
  return [
    p.atmosphere0,
    Math.round(p.ocean0 * p.surfaceOceanShare / 100),
    Math.round(p.ocean0 * p.intermediateOceanShare / 100),
    Math.round(p.ocean0 * deepOceanShare / 100),
    Math.round(p.sediments0),
    Math.round(p.land0 * p.vegetationShare / 100),
    Math.round(p.land0 * (100 - p.vegetationShare) / 100),
  ]
}

// Revelle (buffer) factor as a function of the atmospheric CO₂ concentration [ppm]
export const revelleFactor = ppm => 3.69 + 1.86e-2 * ppm - 1.80e-6 * ppm * ppm

// Returns (t, N) => all fluxes [PgC/yr]; fij is the flux from box i to box j.
// emissionsAt(t) returns { delta, gamma }: land-use change and fossil emissions [PgC/yr].
export function createFluxCalculator(N0, p, emissionsAt) {
  const [N1_0, N2_0, N3_0, N4_0, N5_0, N6_0, N7_0] = N0
  const {
    beta,
    subduction: z0,
    thermohalineCirculation: z1,
    diapycnalMixing: z2,
    primaryProduction: z3,
    airSeaExchange: z4,
    volcanism: z5,
  } = p

  // Rate constants chosen so that N0 is a steady state
  const k12 = (z4 + z5) / N1_0
  const k21 = z4 / N2_0
  const k23 = (z0 + z5) / N2_0
  const k24 = z1 / N2_0
  const k32 = (z0 + z1) / N3_0
  const k34 = (z2 + z5) / N3_0
  const k43 = (z2 + z1) / N4_0
  const k45 = z5 / N4_0
  const k51 = z5 / N5_0
  const k67 = z3 / N6_0
  const k71 = z3 / N7_0

  return (t, N) => {
    const [N1, N2, N3, N4, N5, N6, N7] = N
    const { delta, gamma } = emissionsAt(t)
    return {
      f12: k12 * N1,
      f21: k21 * (N2_0 + revelleFactor(N1 / EPSILON) * (N2 - N2_0)),
      f23: k23 * N2,
      f24: k24 * N2,
      f32: k32 * N3,
      f34: k34 * N3,
      f43: k43 * N4,
      f45: k45 * N4,
      f51: k51 * N5,
      f16: z3 * (1 + beta * Math.log(N1 / N1_0)),
      f67: k67 * N6,
      f71: k71 * N7,
      delta,
      gamma,
    }
  }
}

// Right-hand side dN/dt of the seven coupled ODEs
export function createSevenBoxModel(N0, p, emissionsAt) {
  const fluxesAt = createFluxCalculator(N0, p, emissionsAt)
  return (t, N) => {
    const { f12, f21, f23, f24, f32, f34, f43, f45, f51, f16, f67, f71, delta, gamma } = fluxesAt(t, N)
    return [
      f21 - f12 + f51 + f71 - f16 + delta + gamma,
      f12 - f21 + f32 - f23 - f24,
      f23 - f32 - f34 + f43,
      f34 - f43 + f24 - f45,
      f45 - f51,
      // Land-use change removes 2δ from the vegetation: δ goes to the atmosphere, δ to the soil
      f16 - f67 - 2 * delta,
      f67 - f71 + delta,
    ]
  }
}

// The seven-box model behind the common carbon model interface (see carbonModels.js)
export function createSevenBoxSystem(p, emissionsAt) {
  const N0 = initialInventories(p)
  return {
    id: 'tomizuka',
    y0: N0,
    stepSize: STEP_SIZE,
    dydt: createSevenBoxModel(N0, p, emissionsAt),
    fluxesAt: createFluxCalculator(N0, p, emissionsAt),
    reservoirs: y => ({
      atmosphere: y[0],
      ocean: y[1] + y[2] + y[3] + y[4],
      land: y[5] + y[6],
    }),
  }
}
