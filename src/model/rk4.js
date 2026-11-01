// One classic fourth-order Runge–Kutta step
export function rk4Step(dydt, t, y, dt) {
  const k1 = dydt(t, y)
  const k2 = dydt(t + 0.5 * dt, y.map((v, i) => v + 0.5 * dt * k1[i]))
  const k3 = dydt(t + 0.5 * dt, y.map((v, i) => v + 0.5 * dt * k2[i]))
  // The forcing is constant within a calendar year: evaluate the end of the step inside the current year
  const k4 = dydt(t + dt - 1e-9, y.map((v, i) => v + dt * k3[i]))
  return y.map((v, i) => v + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]))
}

// Integrates from tStart to tEnd.
// Returns one record { t, y } per whole year; t = Y is January 1 of year Y.
export function solveRK4(dydt, [tStart, tEnd], y0, { stepSize }) {
  let t = tStart
  let y = [...y0]
  const data = [{ t, y: [...y0] }]

  while (t < tEnd - 1e-9) {
    const dt = Math.min(stepSize, tEnd - t)
    y = rk4Step(dydt, t, y, dt)
    t += dt

    if (Math.abs(t - Math.round(t)) < 1e-6) {
      t = Math.round(t)
      data.push({ t, y: [...y] })
    }
  }
  return data
}
