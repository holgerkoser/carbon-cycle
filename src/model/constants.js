// Ratio of the molar masses of CO₂ and carbon: 44.01 g/mol / 12.011 g/mol
export const PHI = 3.664

// Carbon mass per ppm of atmospheric CO₂ [PgC/ppm],
// from the total mass of the atmosphere (5.148e21 g) and M_dry_air = 28.97 g/mol
export const EPSILON = 2.134

export const START_YEAR = 1750
export const PROJECTION_START = 2025
export const END_YEAR = 2300

// Integration step of the RK4 solver [years]; must divide 1
export const STEP_SIZE = 0.5
