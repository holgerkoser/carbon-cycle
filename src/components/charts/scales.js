// y domain around the visible values with 5 % padding, rounded outward to multiples of `step`.
// `include` adds values that must stay visible, for example 0.
export function paddedDomain(values, step, { include = [] } = {}) {
  const all = [...values, ...include].filter(Number.isFinite)
  const low = Math.min(...all)
  const high = Math.max(...all)
  const pad = (high - low) * 0.05 || step
  return [
    include.includes(low) ? low : Math.floor((low - pad) / step) * step,
    Math.ceil((high + pad) / step) * step,
  ]
}
