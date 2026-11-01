// Ocean mixed-layer impulse response functions (IRF) and carbonate chemistry of the Bern model,
// from BernSCM v1.0 (Strassmann & Joos, 2018, GMD 11, 1887–1908; https://doi.org/10.5281/zenodo.1038117).
//
// An IRF r(t) = a∞ + Σ a_k exp(−t/τ_k) gives the fraction of carbon entering the mixed layer at t = 0
// that is still there after t years; the rest has been transported into the deep ocean.
// The transport of the underlying ocean models is calibrated with radiocarbon and other tracers,
// independently of the atmospheric CO₂ record.

export const OCEAN_MODELS = {
  hilda: {
    label: 'HILDA (box-diffusion)',
    a: [0.27830433, 0.23337218, 0.13732822, 0.05154051, 0.03503318, 0.24013944],
    tau: [0.45253504, 2.19901724, 12.03837102, 59.58359820, 237.30651757, 0.03855458],
    aInf: 0.022936,
    mixedLayerDepth: 75, // m
    area: 3.62e14, // m²
    gasExchange: 1 / 9.06, // 1/yr
    temperature: 18.1716, // °C, for the carbonate chemistry
  },
  bern2d: {
    label: 'Bern2.5D (zonally averaged)',
    a: [0.09467125, 0.1029231, 0.03928349, 0.4593721, 0.0129862, 0.2702249],
    tau: [2.690038, 13.61728, 86.79685, 0.5762091, 337.2983, 0.07027151],
    aInf: 0.013691,
    mixedLayerDepth: 50,
    area: 3.5375e14,
    gasExchange: 1 / 7.46,
    temperature: 18.2997,
  },
  princeton: {
    label: 'Princeton 3D (GCM)',
    a: [2.27446514, 0.06161763, 0.03726494, 1.28186186, 0.01956537, -2.70925536],
    tau: [1.19761983, 16.67585709, 65.10188851, 2.00904478, 347.58378832, 1.55213441],
    aInf: 0.01481883,
    mixedLayerDepth: 50.9,
    area: 3.55e14,
    gasExchange: 1 / 7.66,
    temperature: 17.7,
  },
}

const SEAWATER_DENSITY = 1026.5 // kg/m³
const CARBON_PER_MICROMOLE = 12.0107e-6 // g

// Change of the mixed-layer DIC concentration per GtC [µmol/kg]
export const dicPerGtC = ocean =>
  1e15 / (CARBON_PER_MICROMOLE * SEAWATER_DENSITY * ocean.mixedLayerDepth * ocean.area)

// Increase of the surface ocean CO₂ partial pressure [ppm] for a DIC increase [µmol/kg]
// at constant alkalinity (Joos et al., 1996; valid for 17.7–18.3 °C and up to 1320 ppm)
export function surfacePCO2Increase(dic, T) {
  return (1.5568 - 1.3993e-2 * T) * dic
    + (7.4706 - 0.20207 * T) * 1e-3 * dic ** 2
    - (1.2748 - 0.12015 * T) * 1e-5 * dic ** 3
    + (2.4491 - 0.12639 * T) * 1e-7 * dic ** 4
    - (1.5468 - 0.15326 * T) * 1e-10 * dic ** 5
}
