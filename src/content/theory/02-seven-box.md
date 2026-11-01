## The seven-box model

The carbon of the fast carbon cycle is distributed over seven reservoirs. $N_i$ denotes the carbon mass of box $i$ in PgC (1 PgC = 1 GtC = 10¹⁵ g of carbon), $N_i^0$ its pre-industrial value in 1750.

| Box | Reservoir | $N_i^0$ [PgC] |
| --- | --- | ---: |
| 1 | Atmosphere | 598 |
| 2 | Surface ocean | 885 |
| 3 | Intermediate ocean | 9,733 |
| 4 | Deep ocean | 26,249 |
| 5 | Sediments | 90,000,000 |
| 6 | Biosphere (vegetation) | 729 |
| 7 | Soil | 1,240 |

The ocean values follow from the hydrosphere total of 36,866 PgC and the shares 2.4 %, 26.4 % and 71.2 %; vegetation and soil share the 1,969 PgC of the biosphere in the ratio 37 : 63.

The diagram shows all seven reservoirs with their carbon content and the fluxes between them. Solid arrows are the natural fluxes, dashed arrows the human emissions.

<!-- diagram:tomizuka -->

### Fluxes

$F_{ij}$ is the carbon flux from box $i$ to box $j$ in PgC/yr. Most fluxes are proportional to the mass of the source box, $F_{ij} = k_{ij} N_i$. The rate constants are chosen so that the pre-industrial state is a steady state. They follow from the gross fluxes in the sidebar: air–sea exchange $F_\text{as} = 60$, primary production $F_\text{pp} = 62$, volcanism $F_\text{v} = 0.2$, subduction $z_0$, thermohaline circulation $z_1$ and diapycnal mixing $z_2$.

$$
\begin{aligned}
k_{12} &= \frac{F_\text{as} + F_\text{v}}{N_1^0} &
k_{21} &= \frac{F_\text{as}}{N_2^0} &
k_{23} &= \frac{z_0 + F_\text{v}}{N_2^0} &
k_{24} &= \frac{z_1}{N_2^0} \\[4pt]
k_{32} &= \frac{z_0 + z_1}{N_3^0} &
k_{34} &= \frac{z_2 + F_\text{v}}{N_3^0} &
k_{43} &= \frac{z_2 + z_1}{N_4^0} &
k_{45} &= \frac{F_\text{v}}{N_4^0} \\[4pt]
k_{51} &= \frac{F_\text{v}}{N_5^0} &
k_{67} &= \frac{F_\text{pp}}{N_6^0} &
k_{71} &= \frac{F_\text{pp}}{N_7^0}
\end{aligned}
$$

Water circulates from the surface to the deep ocean ($z_1$), up to the intermediate layer ($z_1 + z_2$) and back to the surface ($z_0 + z_1$). The small volcanic flux $F_\text{v}$ closes a slow loop through the sediments.

Two fluxes are non-linear:

**Ocean outgassing** is controlled by the CO₂ partial pressure of the surface water. Its sensitivity to the dissolved carbon is described by the Revelle (buffer) factor $\xi$, which grows with the atmospheric concentration $c = N_1 / \varepsilon$ in ppm:

$$
F_{21} = k_{21} \left[ N_2^0 + \xi(c) \, (N_2 - N_2^0) \right],
\qquad
\xi(c) = 3.69 + 1.86 \cdot 10^{-2} \, c - 1.80 \cdot 10^{-6} \, c^2
$$

**Photosynthesis** rises logarithmically with the atmospheric CO₂ (CO₂ fertilization, factor $\beta$):

$$
F_{16} = F_\text{pp} \left( 1 + \beta \ln \frac{N_1}{N_1^0} \right)
$$

### Differential equations

With the fossil emissions $\gamma(t)$ and the land-use change emissions $\delta(t)$ the masses change as

$$
\begin{aligned}
\dot N_1 &= F_{21} - F_{12} + F_{51} + F_{71} - F_{16} + \delta + \gamma \\
\dot N_2 &= F_{12} - F_{21} + F_{32} - F_{23} - F_{24} \\
\dot N_3 &= F_{23} - F_{32} - F_{34} + F_{43} \\
\dot N_4 &= F_{34} - F_{43} + F_{24} - F_{45} \\
\dot N_5 &= F_{45} - F_{51} \\
\dot N_6 &= F_{16} - F_{67} - 2\delta \\
\dot N_7 &= F_{67} - F_{71} + \delta
\end{aligned}
$$

Land-use change removes $2\delta$ from the vegetation: one half is released to the atmosphere, the other half ends up in the soil. Summing all equations gives $\sum_i \dot N_i = \gamma$, so only fossil carbon is added to the system.

The system is integrated from 1750 to 2300 with a fourth-order Runge–Kutta method and a step of half a year. The emissions are constant within each calendar year; $t = Y$ denotes January 1 of year $Y$.

### Differences from the paper

The equations are those of Tomizuka (2009), Eqs. (5)–(12), with the buffer factor of his Eq. (A9). Some parameters differ:

| | Tomizuka (2009) | This model (default) |
| --- | ---: | ---: |
| Atmosphere $N_1^0$ | 615 PgC (289 ppm) | 598 PgC (280 ppm, ice cores) |
| Surface / intermediate / deep ocean | 842 / 9,744 / 26,280 PgC | 885 / 9,733 / 26,249 PgC |
| Vegetation / soil | 731 / 1,238 PgC | 729 / 1,240 PgC |
| Subduction $z_0$ | 9 PgC/yr | 11 PgC/yr |
| Thermohaline circulation $z_1$ | 43 PgC/yr | 75.1 PgC/yr |
| Diapycnal mixing $z_2$ | 162 PgC/yr | 162 PgC/yr |
| Fertilization factor $\beta$ | 0.42 (0.38–0.50) | 0.107 |

The totals of ocean and land carbon are the same; $z_1$ and $\beta$ were fitted to the Global Carbon Budget (see Calibration). In the paper the volcanic flux of 0.2 PgC/yr leaves the sediments but does not enter them from the atmosphere side ($k_{12} = 60/615$), so the pre-industrial state drifts slightly. Here the 0.2 PgC/yr loop runs through all ocean boxes, which makes $N^0$ an exact steady state.
