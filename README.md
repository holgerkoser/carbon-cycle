# Seven-Box Carbon Cycle Model

Interactive model of how burning today’s fossil reserves changes the CO₂ concentration of the atmosphere, based on

> Tomizuka, A. (2009): [Is a box model effective for understanding the carbon cycle?](https://doi.org/10.1119/1.3013196) American Journal of Physics 77(2), 156–163.

The app is built with Vue 3, Vite and Observable Plot. It started as the Observable notebook
[ee28ad2bba71cf15](https://observablehq.com/d/ee28ad2bba71cf15).

## Getting started

```sh
yarn install
yarn dev            # http://localhost:5173
yarn build          # static site in dist/
yarn fetch-data     # refresh the data snapshot in public/data
```

- **Dashboard** (`#/`): Tomizuka's seven-box model and the Bern model side by side: the reserves burned, key figures, a comparison with observations, and all charts. A time range selector (drag or resize the window, or pick a preset) zooms all time-axis charts at once. Every model
  parameter is set in the sidebar; changes are saved in the browser and can be reset per value, per group or all at once.
- **Theory** (`#/theory`): model equations with an interactive carbon cycle diagram of each model (timeline with play button), emission projection, reserves, calibration, limitations and data sources. A line `<!-- diagram:tomizuka -->` or `<!-- diagram:bern -->` in a Markdown section inserts the diagram.
- **Notebook viewer** (`/notebook/`): the original Observable export, kept for reference.

## Project structure

```
src/
  model/        UI-free model code
    parameters.js   schema and defaults of all adjustable parameters (drives the sidebar)
    carbonModels.js common interface of the two carbon cycle models
    bernModel.js    Bern model (BernSCM v1.0: ocean pulse response + 4-box land)
    oceanResponse.js Bern ocean pulse response functions and carbonate chemistry (BernSCM v1.0)
    boxModel.js     inventories, fluxes and ODEs of Tomizuka's seven-box model
    rk4.js          Runge–Kutta solver
    hubbert.js      Hubbert curves for the emission projection
    emissions.js    historical and projected emissions
    reserves.js     reserve accounting
    budget.js       modelled and observed carbon budget
    climate.js      radiative forcing and two-layer energy balance model
    pulse.js        CO₂ pulse test after Joos et al. (2013)
    simulate.js     runs both models, Bern ocean uncertainty range, key figures and calibration
  data/         loading and parsing of the data snapshot
  composables/  shared parameter store and model results
  components/   generic components (Plot wrapper, cards, KaTeX, Markdown) and charts/
  pages/        dashboard and theory page
  content/theory/  theory page as Markdown with $…$ / $$…$$ formulas
public/data/    data snapshot (see src/content/theory/10-sources.md)
scripts/        data download
notebook/       original Observable export and its file attachments
```

To add a parameter, add it to `src/model/parameters.js` and read it from `p` in the model; the sidebar picks it up automatically.
