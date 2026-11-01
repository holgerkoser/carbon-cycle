import { PHI } from './constants.js'

// Remaining fossil reserves [GtC] at the end of each year.
// Today's reserves are extended back to 1750 by adding all historical emissions,
// then the historical and projected emissions are subtracted year by year.
export function reserveSeries(p, historical, projection) {
  const ligniteShare = p.ligniteShare / 100
  const R = {
    oil: p.oilReserves * p.oilEmissionFactor / PHI,
    gas: p.gasReserves * p.gasEmissionFactor / PHI,
    hardCoal: p.hardCoalReserves * p.hardCoalEmissionFactor / PHI,
    lignite: p.ligniteReserves * p.ligniteEmissionFactor / PHI,
  }

  for (const { oil, gas, coal } of historical) {
    R.oil += oil
    R.gas += gas
    R.hardCoal += coal * (1 - ligniteShare)
    R.lignite += coal * ligniteShare
  }

  const data = []
  const push = year => data.push({ year, ...R, total: R.oil + R.gas + R.hardCoal + R.lignite })

  for (const { year, oil, gas, coal } of historical) {
    R.oil -= oil
    R.gas -= gas
    R.hardCoal -= coal * (1 - ligniteShare)
    R.lignite -= coal * ligniteShare
    push(year)
  }
  for (const { year, oil, gas, hardCoal, lignite } of projection) {
    R.oil -= oil / PHI
    R.gas -= gas / PHI
    R.hardCoal -= hardCoal / PHI
    R.lignite -= lignite / PHI
    push(year)
  }
  return data
}
