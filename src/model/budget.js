// Annual carbon budget: atmospheric growth, ocean sink and land sink [GtC/yr]

// Model budget for calendar year `year`, i.e. the interval from January 1 of `year` to January 1 of `year + 1`.
// `reservoirs` maps a state vector to { atmosphere, ocean, land } (see carbonModels.js).
export function modelBudget(series, emissionsAt, year, reservoirs) {
  const i = year - series[0].t
  if (i < 0 || i + 1 >= series.length) {
    throw new Error(`Year ${year} is out of the simulated range`)
  }
  const a = reservoirs(series[i].y)
  const b = reservoirs(series[i + 1].y)
  const { delta, gamma } = emissionsAt(year)
  return {
    year,
    fossilEmissions: gamma,
    landUseChangeEmissions: delta,
    atmosphericGrowth: b.atmosphere - a.atmosphere,
    oceanSink: b.ocean - a.ocean,
    // Natural land sink: net change of vegetation and soil plus the land-use change losses
    landSink: b.land - a.land + delta,
  }
}

export function modelBudgetSeries(series, emissionsAt, reservoirs) {
  const data = []
  for (let i = 0; i + 1 < series.length; i++) {
    data.push(modelBudget(series, emissionsAt, series[i].t, reservoirs))
  }
  return data
}

// Observed budget from the Global Carbon Budget, as a centered moving average over n years [GtC/yr]
export function observedBudget(gcb, year, n = 3) {
  const i = year - gcb[0].year
  if (i <= 0 || i >= gcb.length) {
    throw new Error(`Year ${year} is out of the observed range`)
  }
  let m = (n - 1) / 2
  while (i + m >= gcb.length) m--
  const window = gcb.slice(i - m, i + m + 1)
  const mean = key => window.reduce((sum, d) => sum + d[key], 0) / window.length
  return {
    atmosphericGrowth: mean('atmosphericGrowth'),
    oceanSink: mean('oceanSink'),
    landSink: mean('landSink'),
  }
}
