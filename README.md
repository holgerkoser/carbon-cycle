# Carbon Cycle Models

Interactive comparison of two carbon cycle models: how does burning today’s fossil fuel reserves change the CO₂ concentration of the atmosphere, and how much warming follows?

**Live:** https://holgerkoser.github.io/carbon-cycle/

## Motivation

The amount of fossil carbon that is still in the ground is often quoted, but it is hard to say what it means for the atmosphere: part of every emitted tonne is taken up by the ocean and the land biosphere, and how much depends on time scales from years to millennia.

The project started from the paper

> Tomizuka, A. (2009): [Is a box model effective for understanding the carbon cycle?](https://doi.org/10.1119/1.3013196) American Journal of Physics 77(2), 156–163.

Tomizuka shows that seven well-mixed boxes (atmosphere, three ocean layers, vegetation, soil, sediments) and a handful of fluxes reproduce the historical CO₂ record remarkably well. A model this small can be understood completely, and every parameter can be changed and the effect seen immediately.

A good fit to the past does not make a good forecast, though. The deep ocean of the box model exchanges carbon much faster than radiocarbon measurements allow, so it removes CO₂ too quickly once emissions stop. To show how much the answer depends on the model, the app runs the **Bern model** used by the IPCC side by side with the same emissions. Where the two models agree, the result is robust; where they diverge, the difference is a measure of the uncertainty.

The goal is not a new climate projection, but a transparent tool: every assumption — emissions, reserves, inventories, fluxes, fertilization, climate sensitivity — is visible, documented on the theory page and adjustable in the sidebar.

## Features

- **Dashboard** (`#/`): both models side by side: the reserves burned, key figures, a comparison with observations, and all charts. A time range selector (drag or resize the window, or pick a preset) zooms all time-axis charts at once. Every model parameter is set in the sidebar; changes are saved in the browser and can be reset per value, per group or all at once. Each model has a button that fits its free parameters to the Global Carbon Budget.
- **Theory** (`#/theory`): model equations with an interactive carbon cycle diagram of each model (timeline with play button), emission projection, reserves, calibration, climate response, limitations and data sources. A line `<!-- diagram:tomizuka -->` or `<!-- diagram:bern -->` in a Markdown section inserts the diagram.

## Getting started

```sh
yarn install
yarn dev            # http://localhost:5173
yarn build          # static site in dist/
yarn fetch-data     # refresh the data snapshot in public/data
```

The app is built with Vue 3, Vite, Observable Plot and KaTeX.

## Deployment

Every push to `main` is built and published to GitHub Pages by [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The build uses relative asset paths (`base: './'`) and hash routing, so it works under any sub-path without further configuration.

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
```

To add a parameter, add it to `src/model/parameters.js` and read it from `p` in the model; the sidebar picks it up automatically.
