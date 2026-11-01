// CO₂ radiative forcing ΔF = 5.35 W/m² · ln(c / c⁰) (Myhre et al., 1998) relative to 1750.
// Returns [[year, ΔF], …]
export function radiativeForcing(concentration, ppm0) {
  return concentration.map(({ year, ppm }) => [year, 5.35 * Math.log(ppm / ppm0)])
}

// Forcing of a CO₂ doubling [W/m²]
export const FORCING_2X = 5.35 * Math.log(2)

const SUBSTEPS = 10

// Two-layer energy balance model (Held et al., 2010; Geoffroy et al., 2013):
//   C  dT/dt  = F − λ T − γ (T − T₀)    surface and upper ocean
//   C₀ dT₀/dt = γ (T − T₀)              deep ocean
// with λ = F₂ₓ / ECS. The forcing is constant within each year.
// Returns [[year, T], …] relative to 1750.
export function twoLayerResponse(forcing, p) {
  const lambda = FORCING_2X / p.ecs
  const dt = 1 / SUBSTEPS
  let T = 0
  let T0 = 0
  return forcing.map(([year, F]) => {
    const state = [year, T]
    for (let i = 0; i < SUBSTEPS; i++) {
      const dT = (F - lambda * T - p.oceanHeatExchange * (T - T0)) / p.mixedLayerHeatCapacity
      const dT0 = p.oceanHeatExchange * (T - T0) / p.deepOceanHeatCapacity
      T += dT * dt
      T0 += dT0 * dt
    }
    return state
  })
}

// Temperature anomaly relative to the 1861–1890 mean, the baseline of the observed record.
// Other forcings (methane, nitrous oxide, aerosols, …) are approximated as a fixed share of the CO₂ forcing.
export function temperatureAnomaly(forcing, p) {
  const scale = 1 + p.otherForcingShare / 100
  const response = twoLayerResponse(forcing.map(([year, F]) => [year, F * scale]), p)
  const baseline = response.filter(([year]) => year >= 1861 && year <= 1890)
  const offset = baseline.reduce((sum, [, T]) => sum + T, 0) / baseline.length
  return response.map(([year, T]) => ({ year, anomaly: T - offset }))
}

// Transient climate response: warming at the time of CO₂ doubling under a 1 %/yr increase (year 70)
export function transientClimateResponse(p) {
  const forcing = Array.from({ length: 70 }, (_, year) => [year, FORCING_2X * (year + 0.5) / 70])
  const [, T] = twoLayerResponse([...forcing, [70, FORCING_2X]], p).at(-1)
  return T
}
