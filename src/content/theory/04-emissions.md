## Emissions

### Historical emissions

Up to 2024 the model is driven by observed emissions:

- **1750–1849:** fossil and land-use change emissions of the [HYDE datasets](https://landuse.sites.uu.nl/datasets/), interpolated with a cubic spline between the decadal values.
- **From 1850:** fossil, industry and land-use change emissions from [Our World in Data](https://ourworldindata.org/co2-emissions), based on the Global Carbon Budget. The split into coal, oil, gas and other industry (cement, flaring, other) is used for the reserve accounting.

### Projected emissions

From 2025 on each source follows a **Hubbert curve**, the bell-shaped derivative of a logistic function:

$$
y(t) = \frac{y_\text{max}}{\cosh^2\!\big(k \, (t - t_\text{max})\big)}
$$

with peak year $t_\text{max}$, peak value $y_\text{max}$ and steepness $k$. The area under the curve from the start year $t_0 = 2025$ on is

$$
I = \int_{t_0}^{\infty} y(t)\,\mathrm dt = \frac{y_0}{2k} \left( e^{2k\tau} + 1 \right),
\qquad \tau = t_\text{max} - t_0 ,
$$

where $y_0 = y(t_0)$ is today’s emission rate.

For **hard coal, oil and gas** the area $I$ is the part of the reserves that is burned: the reserve times its emission factor times the consumption share set in the sidebar. Together with the current rate $y_0$ and its current slope $y'_0$ the curve is fully determined:

$$
k = \frac{y_0}{I} + \frac{y'_0}{2 y_0},
\qquad
t_\text{max} = t_0 + \frac{1}{k} \operatorname{artanh} \frac{y'_0}{2 k y_0}
$$

**Lignite, other industry and land-use change** follow curves with a fixed peak year and steepness. Their totals are not tied to a reserve; for lignite the resulting share of the reserves is shown in the sidebar.

The projection ends in 2300. With the default steepness the emissions after 2300 are negligible.
