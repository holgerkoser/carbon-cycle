import Spline from 'cubic-spline'
import { PHI, PROJECTION_START, END_YEAR, START_YEAR } from './constants.js'
import { hubbertCurve } from './hubbert.js'

// Fossil and land-use change emissions 1750–1849 [GtC/yr], from the HYDE datasets
// https://landuse.sites.uu.nl/datasets/
const HYDE = [
  { year: 1750, fossil: 0.0025, landUse: 0.0819 },
  { year: 1760, fossil: 0.0033, landUse: 0.0955 },
  { year: 1770, fossil: 0.0041, landUse: 0.1146 },
  { year: 1780, fossil: 0.0068, landUse: 0.1392 },
  { year: 1790, fossil: 0.0087, landUse: 0.1692 },
  { year: 1800, fossil: 0.0104, landUse: 0.2047 },
  { year: 1810, fossil: 0.0123, landUse: 0.2511 },
  { year: 1820, fossil: 0.0164, landUse: 0.3139 },
  { year: 1830, fossil: 0.0246, landUse: 0.3957 },
  { year: 1840, fossil: 0.0368, landUse: 0.5186 },
  { year: 1850, fossil: 0.054, landUse: 0.6823 },
]

const tonnesCO2ToGtC = x => (x ?? 0) / (PHI * 1e9)

// Historical emissions per year [GtC/yr]:
// HYDE before 1850, Our World in Data (Global Carbon Budget) from 1850 on.
export function buildHistoricalEmissions(fossilPlusLandUse, bySource) {
  const xs = HYDE.map(d => d.year)
  const fossilSpline = new Spline(xs, HYDE.map(d => d.fossil))
  const landUseSpline = new Spline(xs, HYDE.map(d => d.landUse))

  const totals = new Map(fossilPlusLandUse.map(d => [d.year, d]))
  const sources = new Map(bySource.map(d => [d.year, d]))
  const lastYear = Math.max(...totals.keys())

  const data = []
  for (let year = START_YEAR; year <= lastYear; year++) {
    const total = totals.get(year)
    const source = sources.get(year) ?? {}
    const fossil = total ? tonnesCO2ToGtC(total.emissions_total) : fossilSpline.at(year)
    const landUse = total ? tonnesCO2ToGtC(total.emissions_from_land_use_change) : landUseSpline.at(year)
    data.push({
      year,
      fossil,
      landUse,
      coal: source.emissions_from_coal == null ? fossil : tonnesCO2ToGtC(source.emissions_from_coal),
      oil: tonnesCO2ToGtC(source.emissions_from_oil),
      gas: tonnesCO2ToGtC(source.emissions_from_gas),
      otherIndustry: tonnesCO2ToGtC(source.emissions_from_other_industry)
        + tonnesCO2ToGtC(source.emissions_from_flaring)
        + tonnesCO2ToGtC(source.emissions_from_cement),
    })
  }
  return data
}

// Projected emissions from 2025 to 2300 [GtCO₂/yr].
// Coal, oil and gas burn the chosen share of their reserves along a Hubbert curve.
export function projectEmissions(p) {
  const t = { t0: PROJECTION_START, t1: END_YEAR }
  const hardCoal = hubbertCurve({
    ...t, y0: p.hardCoalY0, dy0: p.hardCoalDy0,
    I: p.hardCoalReserves * p.hardCoalEmissionFactor * p.hardCoalConsumption / 100,
  })
  const oil = hubbertCurve({
    ...t, y0: p.oilY0, dy0: p.oilDy0,
    I: p.oilReserves * p.oilEmissionFactor * p.oilConsumption / 100,
  })
  const gas = hubbertCurve({
    ...t, y0: p.gasY0, dy0: p.gasDy0,
    I: p.gasReserves * p.gasEmissionFactor * p.gasConsumption / 100,
  })
  const lignite = hubbertCurve({ ...t, y0: p.ligniteY0, tMax: p.ligniteTMax, k: p.ligniteK })
  const otherIndustry = hubbertCurve({ ...t, y0: p.otherIndustryY0, tMax: p.otherIndustryTMax, k: p.otherIndustryK })
  const landUse = hubbertCurve({ ...t, y0: p.landUseY0, tMax: p.landUseTMax, k: p.landUseK })

  return hardCoal.map(([year], i) => {
    const d = {
      year,
      hardCoal: hardCoal[i][1],
      lignite: lignite[i][1],
      oil: oil[i][1],
      gas: gas[i][1],
      otherIndustry: otherIndustry[i][1],
      landUse: landUse[i][1],
    }
    d.coal = d.hardCoal + d.lignite
    d.fossil = d.coal + d.oil + d.gas + d.otherIndustry
    d.total = d.fossil + d.landUse
    return d
  })
}

// Returns t => { delta, gamma }: land-use change and fossil emissions [GtC/yr] in calendar year ⌊t⌋
export function createEmissionLookup(historical, projection, { disabled = false } = {}) {
  const byYear = new Map()
  for (const { year, landUse, fossil } of historical) {
    byYear.set(year, { delta: landUse, gamma: fossil })
  }
  for (const { year, landUse, fossil } of projection) {
    if (!byYear.has(year)) byYear.set(year, { delta: landUse / PHI, gamma: fossil / PHI })
  }
  const none = { delta: 0, gamma: 0 }
  return t => (disabled ? none : byYear.get(Math.floor(t)) ?? none)
}
