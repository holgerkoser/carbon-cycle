// Central definition of every adjustable model parameter.
// The sidebar is generated from this schema, and the model reads the values by key.
// `fit` marks the group whose parameters the fit button of that carbon model calibrates.

export const parameterGroups = [
  {
    id: 'consumption',
    title: 'Reserve consumption',
    description: 'Share of today’s proven reserves that is burned between 2025 and 2300.',
    parameters: [
      { key: 'gasConsumption', label: 'Natural gas', unit: '%', control: 'range', min: 5, max: 100, step: 5, default: 100 },
      { key: 'oilConsumption', label: 'Crude oil', unit: '%', control: 'range', min: 5, max: 100, step: 5, default: 80 },
      { key: 'hardCoalConsumption', label: 'Hard coal', unit: '%', control: 'range', min: 5, max: 100, step: 5, default: 40 },
      { key: 'noAnthropogenicEmissions', label: 'No anthropogenic emissions', control: 'toggle', default: false },
    ],
  },
  {
    id: 'reserves',
    title: 'Fossil reserves',
    description: 'Proven reserves and average CO₂ emission factors of the primary fossil fuels.',
    parameters: [
      { key: 'oilReserves', label: 'Oil reserves', unit: 'bn bbl', control: 'number', step: 10, default: 1770 },
      { key: 'oilEmissionFactor', label: 'Oil emission factor', unit: 'GtCO₂ / bn bbl', control: 'number', step: 0.01, default: 0.43 },
      { key: 'gasReserves', label: 'Gas reserves', unit: 'tcm', control: 'number', step: 1, default: 206 },
      { key: 'gasEmissionFactor', label: 'Gas emission factor', unit: 'GtCO₂ / tcm', control: 'number', step: 0.1, default: 2 },
      { key: 'hardCoalReserves', label: 'Hard coal reserves', unit: 'Gt', control: 'number', step: 5, default: 745 },
      { key: 'hardCoalEmissionFactor', label: 'Hard coal emission factor', unit: 'GtCO₂ / Gt', control: 'number', step: 0.1, default: 2.6 },
      { key: 'ligniteReserves', label: 'Lignite reserves', unit: 'Gt', control: 'number', step: 5, default: 320 },
      { key: 'ligniteEmissionFactor', label: 'Lignite emission factor', unit: 'GtCO₂ / Gt', control: 'number', step: 0.1, default: 1.2 },
      { key: 'ligniteShare', label: 'Lignite share of historical coal emissions', unit: '%', control: 'number', min: 0, max: 100, step: 0.5, default: 7.5 },
    ],
  },
  {
    id: 'projection',
    title: 'Emission projection',
    description: 'Hubbert curves from 2025 on. Coal, oil and gas start at y₀ with slope dy₀ and burn the consumed share of their reserves; the other sources follow fixed curves.',
    advanced: true,
    parameters: [
      { key: 'hardCoalY0', label: 'Hard coal y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 15.36 },
      { key: 'hardCoalDy0', label: 'Hard coal dy₀', unit: 'GtCO₂/yr²', control: 'number', step: 0.01, default: 0.17 },
      { key: 'oilY0', label: 'Oil y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 12.63 },
      { key: 'oilDy0', label: 'Oil dy₀', unit: 'GtCO₂/yr²', control: 'number', step: 0.01, default: 0.2 },
      { key: 'gasY0', label: 'Gas y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 8.1 },
      { key: 'gasDy0', label: 'Gas dy₀', unit: 'GtCO₂/yr²', control: 'number', step: 0.01, default: 0.2 },
      { key: 'ligniteY0', label: 'Lignite y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 0.64 },
      { key: 'ligniteTMax', label: 'Lignite peak year', unit: '', control: 'number', step: 1, default: 2035 },
      { key: 'ligniteK', label: 'Lignite steepness k', unit: '1/yr', control: 'number', step: 0.001, default: 0.016 },
      { key: 'otherIndustryY0', label: 'Other industry y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 2.23 },
      { key: 'otherIndustryTMax', label: 'Other industry peak year', unit: '', control: 'number', step: 1, default: 1980 },
      { key: 'otherIndustryK', label: 'Other industry steepness k', unit: '1/yr', control: 'number', step: 0.001, default: 0.016 },
      { key: 'landUseY0', label: 'Land-use change y₀', unit: 'GtCO₂/yr', control: 'number', step: 0.01, default: 4.46 },
      { key: 'landUseTMax', label: 'Land-use change peak year', unit: '', control: 'number', step: 1, default: 1980 },
      { key: 'landUseK', label: 'Land-use change steepness k', unit: '1/yr', control: 'number', step: 0.001, default: 0.016 },
    ],
  },
  {
    id: 'inventories',
    title: 'Tomizuka: pre-industrial inventories',
    description: 'Carbon stored in each reservoir in 1750, when the model starts in steady state. The atmosphere also sets the pre-industrial concentration of the Bern model.',
    parameters: [
      { key: 'atmosphere0', label: 'Atmosphere', unit: 'GtC', control: 'number', step: 1, default: 598 },
      { key: 'ocean0', label: 'Hydrosphere', unit: 'GtC', control: 'number', step: 1, default: 36866 },
      { key: 'surfaceOceanShare', label: 'Surface ocean share', unit: '%', control: 'range', min: 0, max: 100, step: 0.1, default: 2.4 },
      { key: 'intermediateOceanShare', label: 'Intermediate ocean share', unit: '%', control: 'range', min: 0, max: 100, step: 0.1, default: 26.4 },
      { key: 'land0', label: 'Biosphere', unit: 'GtC', control: 'number', step: 1, default: 1969 },
      { key: 'vegetationShare', label: 'Vegetation share', unit: '%', control: 'range', min: 0, max: 100, step: 0.1, default: 37 },
      { key: 'sediments0', label: 'Sediments', unit: 'GtC', control: 'number', step: 1000, default: 90_000_000 },
    ],
  },
  {
    id: 'exchange',
    title: 'Tomizuka: exchange fluxes',
    description: 'Pre-industrial gross fluxes between the reservoirs and the CO₂ fertilization of the biosphere. β and the thermohaline circulation are fitted to the Global Carbon Budget (notebook values: 0.11 and 59).',
    fit: 'tomizuka',
    parameters: [
      { key: 'beta', label: 'CO₂ fertilization factor β', unit: '', control: 'number', step: 0.001, default: 0.107 },
      { key: 'primaryProduction', label: 'Photosynthesis / respiration', unit: 'PgC/yr', control: 'number', step: 1, default: 62 },
      { key: 'subduction', label: 'Subduction (surface → intermediate)', unit: 'PgC/yr', control: 'number', step: 0.1, default: 11 },
      { key: 'thermohalineCirculation', label: 'Thermohaline circulation (surface → deep)', unit: 'PgC/yr', control: 'number', step: 0.1, default: 75.1 },
      { key: 'diapycnalMixing', label: 'Diapycnal mixing (intermediate ↔ deep)', unit: 'PgC/yr', control: 'number', step: 1, default: 162 },
      { key: 'airSeaExchange', label: 'Air–sea gas exchange', unit: 'PgC/yr', control: 'number', step: 1, default: 60 },
      { key: 'volcanism', label: 'Volcanism / sedimentation', unit: 'PgC/yr', control: 'number', step: 0.05, default: 0.2 },
    ],
  },
  {
    id: 'bern',
    title: 'Bern model',
    description: 'BernSCM v1.0 without climate feedbacks: ocean impulse response with carbonate chemistry, 4-box land biosphere with CO₂ fertilization. The default β is fitted to the Global Carbon Budget; the published value is 0.287 (IPCC SAR).',
    fit: 'bern',
    parameters: [
      { key: 'bernBeta', label: 'CO₂ fertilization factor β', unit: '', control: 'number', step: 0.001, default: 0.446 },
      { key: 'bernNpp0', label: 'Pre-industrial net primary production', unit: 'PgC/yr', control: 'number', step: 1, default: 60 },
      {
        key: 'oceanModel', label: 'Ocean transport', control: 'select', default: 'hilda',
        options: [
          { value: 'hilda', label: 'HILDA (box-diffusion)' },
          { value: 'bern2d', label: 'Bern2.5D (zonally averaged)' },
          { value: 'princeton', label: 'Princeton 3D (GCM)' },
        ],
      },
      { key: 'gasExchangeFactor', label: 'Air–sea gas exchange (× published rate)', unit: '×', control: 'number', min: 0.1, step: 0.1, default: 1 },
    ],
  },
  {
    id: 'climate',
    title: 'Climate response',
    description: 'Two-layer energy balance model. The defaults are the CMIP5 multi-model mean heat capacities and heat exchange (Geoffroy et al., 2013) and the IPCC AR6 best estimate of the climate sensitivity.',
    parameters: [
      { key: 'ecs', label: 'Equilibrium climate sensitivity', unit: '°C', control: 'number', min: 0.5, step: 0.1, default: 3 },
      { key: 'mixedLayerHeatCapacity', label: 'Upper layer heat capacity C', unit: 'W yr m⁻² K⁻¹', control: 'number', min: 0.5, step: 0.1, default: 7.7 },
      { key: 'deepOceanHeatCapacity', label: 'Deep ocean heat capacity C₀', unit: 'W yr m⁻² K⁻¹', control: 'number', min: 1, step: 1, default: 106 },
      { key: 'oceanHeatExchange', label: 'Heat exchange coefficient γ', unit: 'W m⁻² K⁻¹', control: 'number', min: 0, step: 0.01, default: 0.7 },
      // IPCC AR6 (2019): total anthropogenic ERF 2.72 W/m², CO₂ 2.16 W/m² → +26 %
      { key: 'otherForcingShare', label: 'Non-CO₂ forcing (share of CO₂ forcing; AR6 2019: 26 %)', unit: '%', control: 'range', min: 0, max: 50, step: 1, default: 0 },
    ],
  },
]

export const parameterDefinitions = parameterGroups.flatMap(group => group.parameters)

export const defaultParameters = Object.fromEntries(
  parameterDefinitions.map(({ key, default: value }) => [key, value]),
)

// Parameters fitted by the calibration of each carbon model, with their initial search step
export const calibrationSteps = {
  tomizuka: { beta: 0.02, thermohalineCirculation: 1 },
  bern: { bernBeta: 0.02 },
}
