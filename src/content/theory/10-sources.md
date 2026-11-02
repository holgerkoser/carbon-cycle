## Data sources

The data are stored in `public/data` and can be updated with `yarn fetch-data`.

| Data | Source |
| --- | --- |
| Fossil and land-use change emissions since 1850, emissions by source | [Our World in Data: CO₂ emissions](https://ourworldindata.org/co2-emissions), based on the Global Carbon Budget |
| Emissions 1750–1849 | [HYDE datasets](https://landuse.sites.uu.nl/datasets/) |
| Historical carbon budget | [Global Carbon Budget 2025](https://doi.org/10.18160/gcp-2025), Friedlingstein et al. (2025), via [openclimatedata](https://github.com/openclimatedata/global-carbon-budget) |
| CO₂ concentration before 1959 | [NASA GISS: observed greenhouse gas concentrations](https://data.giss.nasa.gov/modelforce/ghgases/) |
| CO₂ concentration since 1959 | [NOAA GML: Mauna Loa annual mean](https://gml.noaa.gov/ccgg/trends/data.html) |
| Temperature anomaly | [Our World in Data: temperature anomaly](https://ourworldindata.org/grapher/temperature-anomaly) |
| SSP emission scenarios | [Our World in Data: IPCC scenarios](https://ourworldindata.org/explorers/ipcc-scenarios) |

### Model references

| Component | Source |
| --- | --- |
| Seven-box model, land biosphere | Tomizuka (2009), [Am. J. Phys. 77, 156](https://doi.org/10.1119/1.3013196) |
| Ocean pulse response functions, carbonate chemistry | Strassmann & Joos (2018), [BernSCM v1.0, GMD 11, 1887](https://doi.org/10.5194/gmd-11-1887-2018), code: [Zenodo](https://doi.org/10.5281/zenodo.1038117); Joos et al. (1996), [Tellus B 48, 397](https://doi.org/10.3402/tellusb.v48i3.15921) |
| Pulse response reference | Joos et al. (2013), [ACP 13, 2793](https://doi.org/10.5194/acp-13-2793-2013) |
| Two-layer energy balance model | Geoffroy et al. (2013), [J. Climate 26, 1841](https://doi.org/10.1175/JCLI-D-12-00195.1) |
| CO₂ radiative forcing | Myhre et al. (1998), [GRL 25, 2715](https://doi.org/10.1029/98GL01908) |
