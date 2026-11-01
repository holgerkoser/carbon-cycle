import * as d3 from 'd3'
import Spline from 'cubic-spline'
import { PHI, PROJECTION_START } from '@/model/constants.js'
import { buildHistoricalEmissions } from '@/model/emissions.js'

const url = file => `${import.meta.env.BASE_URL}data/${file}`

const world = rows => rows.filter(d => d.entity === 'World')

// Comment lines start with '#'
const parseCsvWithComments = text => d3.csvParse(text.replace(/^#.*\n/gm, ''), d3.autoType)

async function loadTemperature() {
  const rows = world(await d3.csv(url('owid-temperature-anomaly.csv'), d3.autoType))
  return rows.map(d => ({
    year: d.year,
    lower: d.near_surface_temperature_anomaly_lower,
    mean: d.near_surface_temperature_anomaly,
    upper: d.near_surface_temperature_anomaly_upper,
  }))
}

// Ice cores and early measurements (NASA GISS) before 1959, Mauna Loa (NOAA) from 1959 on [ppm]
async function loadConcentration() {
  const [giss, noaa] = await Promise.all([
    d3.text(url('giss-co2-obs-1850-2005.lpl')),
    d3.text(url('noaa-co2-annmean-mlo.csv')),
  ])
  const iceCore = giss
    .split('\n')
    .map(line => line.trim().split(/\s+/).map(Number))
    .filter(([year, ppm]) => Number.isInteger(year) && year > 0 && Number.isFinite(ppm) && year < 1959)
    .map(([year, ppm]) => ({ year, ppm, source: 'iceCore' }))
  const maunaLoa = parseCsvWithComments(noaa).map(d => ({ year: d.year, ppm: d.mean, source: 'maunaLoa' }))
  return [...iceCore, ...maunaLoa]
}

// Global Carbon Budget, historical budget [GtC/yr]
async function loadGlobalCarbonBudget() {
  const rows = parseCsvWithComments(await d3.text(url('gcb-2025-historical-budget.csv')))
  return rows.map(d => ({
    year: d.Year,
    fossilEmissions: d['fossil emissions excluding carbonation'] ?? 0,
    landUseChangeEmissions: d['land-use change emissions'] ?? 0,
    atmosphericGrowth: d['atmospheric growth'] ?? 0,
    oceanSink: d['ocean sink'] ?? 0,
    landSink: (d['land sink'] ?? 0) + (d['cement carbonation sink'] ?? 0),
  }))
}

// IPCC SSP scenarios [GtCO₂/yr], joined to the latest observations and interpolated per year up to 2150
async function loadScenarios(historicalEmissions) {
  const rows = await d3.csv(url('owid-ipcc-scenarios.csv'), d3.autoType)
  const names = [...new Set(rows.map(d => d.entity.replaceAll(/\s/g, '')))]
  const points = new Map(names.map(name => [name, new Map()]))
  for (const { entity, year, emissions_co2__region_global: value } of rows) {
    points.get(entity.replaceAll(/\s/g, '')).set(year, value * 1e-9)
  }
  // The last five observed years anchor every scenario, and all scenarios reach zero in 2150
  for (const { year, fossil, landUse } of historicalEmissions.slice(-5)) {
    for (const series of points.values()) series.set(year, (fossil + landUse) * PHI)
  }
  for (const series of points.values()) series.set(2150, 0)

  const data = []
  const splines = new Map([...points].map(([name, series]) => {
    const sorted = [...series].sort(([a], [b]) => a - b)
    return [name, new Spline(sorted.map(([x]) => x), sorted.map(([, y]) => y))]
  }))
  for (let year = PROJECTION_START; year <= 2150; year++) {
    for (const [name, spline] of splines) data.push({ year, scenario: name, value: spline.at(year) })
  }
  return { names, data }
}

export async function loadData() {
  const [fossilPlusLandUse, bySource, temperature, concentration, gcb] = await Promise.all([
    d3.csv(url('owid-co2-fossil-plus-land-use.csv'), d3.autoType).then(world),
    d3.csv(url('owid-co2-by-source.csv'), d3.autoType).then(world),
    loadTemperature(),
    loadConcentration(),
    loadGlobalCarbonBudget(),
  ])
  const historicalEmissions = buildHistoricalEmissions(fossilPlusLandUse, bySource)
  const scenarios = await loadScenarios(historicalEmissions)
  return { historicalEmissions, temperature, concentration, gcb, scenarios }
}
