## Calibration

Both carbon models are compared with the **historical carbon budget** of the [Global Carbon Budget 2025](https://globalcarbonbudget.org/). For each calendar year $Y$ the model budget is computed from the change of the reservoirs between January 1 of $Y$ and of $Y+1$:

$$
\begin{aligned}
\text{atmospheric growth} &= \Delta N_\text{atmosphere} \\
\text{ocean sink} &= \Delta N_\text{ocean} \\
\text{land sink} &= \Delta N_\text{vegetation} + \Delta N_\text{soil} + \delta
\end{aligned}
$$

The land sink adds back the land-use change emissions, because the Global Carbon Budget reports them separately; its land sink also includes the cement carbonation sink.

Each model has its own fit button. It minimizes the weighted squared deviation from the observations (centered three-year means):

$$
E = 8 \sum_{Y=1951}^{2024} \left[ 8\,(\Delta_\text{atm})^2 + 4\,(\Delta_\text{ocean})^2 + (\Delta_\text{land})^2 \right]
$$

Only the years after 1950 count; before, the budget relies more on ice cores and model estimates.

| Model | Fitted parameters | Defaults (fitted) | Earlier values |
| --- | --- | --- | --- |
| Tomizuka | $\beta$ and thermohaline circulation $z_1$ | 0.107 and 75.1 PgC/yr | 0.42 and 43 PgC/yr (paper) |
| Bern | CO₂ fertilization factor $\beta$ | 0.446 | 0.287 (published, IPCC SAR) |

The Bern model only fits the land: its ocean is fixed by the radiocarbon calibration of the ocean models.

The search is a coordinate search: each parameter is changed by ± its step, and the step is halved whenever neither direction improves the fit.

Tomizuka’s fertilization factor is much lower than the values of 0.3–0.6 usually quoted, because the regrowth after land-use change already provides part of the land sink in his land model. The Bern model has no such regrowth and needs a larger β; the published 0.287 was determined in 1996 with the smaller land-use change estimates of that time.
