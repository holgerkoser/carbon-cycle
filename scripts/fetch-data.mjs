// Downloads all external datasets into public/data so the app works offline
// and results are reproducible. Run with: yarn fetch-data
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const OUT_DIR = fileURLToPath(new URL('../public/data/', import.meta.url))

const SSP_SCENARIOS = [
  'SSP1 - 1.9', 'SSP1 - 2.6', 'SSP1 - 3.4', 'SSP1 - 4.5',
  'SSP2 - 1.9', 'SSP2 - 2.6', 'SSP2 - 3.4', 'SSP2 - 4.5', 'SSP2 - 6.0',
  'SSP3 - 3.4', 'SSP3 - 4.5', 'SSP3 - 6.0',
  'SSP4 - 2.6', 'SSP4 - 3.4', 'SSP4 - 4.5', 'SSP4 - 6.0',
  'SSP5 - 1.9', 'SSP5 - 2.6', 'SSP5 - 3.4', 'SSP5 - 4.5', 'SSP5 - 6.0',
]

const owidGrapher = name =>
  `https://ourworldindata.org/grapher/${name}.csv?v=1&csvType=filtered&useColumnShortNames=true&overlay=download-data`

const sources = {
  // Our World in Data, based on the Global Carbon Budget
  'owid-co2-fossil-plus-land-use.csv': owidGrapher('co2-fossil-plus-land-use'),
  'owid-co2-by-source.csv': owidGrapher('co2-by-source'),
  'owid-temperature-anomaly.csv': owidGrapher('temperature-anomaly'),
  'owid-ipcc-scenarios.csv':
    'https://ourworldindata.org/explorers/ipcc-scenarios.csv?v=1&csvType=filtered&useColumnShortNames=true' +
    `&country=${SSP_SCENARIOS.map(s => s.replaceAll(' ', '+')).join('~')}` +
    '&Metric=Greenhouse+gas+emissions&Sub-metric=Carbon+dioxide+%28CO%E2%82%82%29&Rate=Total&Region=Global',
  // NOAA GML, annual mean CO2 at Mauna Loa
  'noaa-co2-annmean-mlo.csv': 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.csv',
  // NASA GISS, CMIP5 observed CO2 (ice cores before 1959)
  'giss-co2-obs-1850-2005.lpl': 'https://data.giss.nasa.gov/modelforce/ghgases/CMIP5/CO2_OBS_1850-2005.lpl',
  // Global Carbon Budget 2025 (v1.0), "Historical Budget" sheet as CSV via openclimatedata
  'gcb-2025-historical-budget.csv':
    'https://openclimatedata.github.io/global-carbon-budget/data/global-carbon-budget-2025-historical-budget.csv',
}

await mkdir(OUT_DIR, { recursive: true })

// Some servers (NASA GISS) drop requests without a user agent
async function download(url, attempts = 3) {
  for (let i = 1; ; i++) {
    try {
      return await fetch(url, { headers: { 'User-Agent': 'curl/8.7.1', Accept: '*/*' } })
    } catch (error) {
      if (i >= attempts) throw error
    }
  }
}

for (const [file, url] of Object.entries(sources)) {
  const response = await download(url)
  if (!response.ok) {
    throw new Error(`${file}: HTTP ${response.status} for ${url}`)
  }
  const text = await response.text()
  await writeFile(new URL(file, `file://${OUT_DIR}`), text)
  console.log(`${file}  ${(text.length / 1024).toFixed(0)} kB`)
}

await writeFile(
  new URL('sources.json', `file://${OUT_DIR}`),
  JSON.stringify({ fetchedAt: new Date().toISOString(), sources }, null, 2) + '\n',
)
