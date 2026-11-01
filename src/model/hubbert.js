// Hubbert curve y(t) = yMax / cosh²(k (t − tMax)), the derivative of a logistic function.
// Its integral from t0 to infinity is yMax / k · (1 + tanh(k (tMax − t0))).
//
// Exactly one of these parameter sets determines the curve, given its start value y0 = y(t0):
//   { I, dy0 }  remaining amount I and initial slope dy0
//   { I, tMax } remaining amount I and peak year tMax
//   { k, tMax } steepness k and peak year tMax
//
// Returns [[year, y], …] for every year from t0 to t1.
export function hubbertCurve({ t0, t1, y0, dy0, I, k, tMax }) {
  if (I && tMax !== undefined) {
    k = steepnessFromPeak(I, y0, tMax - t0)
  } else if (I && dy0 !== undefined) {
    k = steepnessFromSlope(I, y0, dy0)
    tMax = t0 + Math.atanh(dy0 / (2 * k * y0)) / k
  }

  const yMax = y0 * Math.cosh(k * (t0 - tMax)) ** 2
  const data = []
  for (let t = t0; t <= t1; t++) {
    data.push([t, yMax / Math.cosh(k * (t - tMax)) ** 2])
  }
  return data
}

// Solves 2 I k = y0 (exp(2 k τ) + 1) for k with Newton–Raphson
function steepnessFromPeak(I, y0, tau) {
  let k = y0 / I
  if (tau === 0) return k
  for (let i = 0; i < 15; i++) {
    const e = Math.exp(2 * k * tau)
    const f = 2 * I * k - y0 * (e + 1)
    const df = 2 * I - 2 * tau * y0 * e
    k -= f / df
  }
  return k
}

// From y'(t0) = 2 k y0 tanh(k τ) and the integral condition
const steepnessFromSlope = (I, y0, dy0) => y0 / I + dy0 / (2 * y0)
