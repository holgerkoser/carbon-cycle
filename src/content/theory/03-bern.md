## The Bern model

The **Bern model** ([Joos et al., 1996](https://doi.org/10.3402/tellusb.v48i3.15921)) is the reduced-form carbon cycle model that the IPCC used in its second and third assessment reports and for the global warming potentials of greenhouse gases. This application implements it as in [BernSCM v1.0](https://doi.org/10.5194/gmd-11-1887-2018) (Strassmann & Joos, 2018), without climate feedbacks. Like Tomizuka’s model it is driven by the fossil and land-use change emissions; unlike it, it only tracks the **change** of each reservoir since 1750.

The diagram therefore shows the land and the ocean as the carbon they have gained since 1750, and the land fluxes as the additional production and decay caused by CO₂ fertilization. The large natural fluxes, which balance each other, do not appear.

<!-- diagram:bern -->

### Ocean

Carbon enters the well-mixed surface layer of the ocean by gas exchange:

$$
f_O = k_g \, \varepsilon \, \big( c_A - c_S \big)
$$

with the atmospheric and surface ocean CO₂ partial pressures $c_A$, $c_S$ in ppm and the gas exchange rate $k_g$ (≈ 1/9 per year). From the surface layer it is transported into the deep ocean. Instead of resolving the ocean interior, the Bern model describes this transport by a **pulse response function** of the mixed layer:

$$
r_O(t) = a_\infty + \sum_{k=1}^{6} a_k \, e^{-t/\tau_k},
\qquad
\Delta m_S(t) = \int_{1750}^{t} f_O(t') \, r_O(t - t') \, \mathrm dt'
$$

$r_O(t)$ is the share of carbon entering the mixed layer at time 0 that is still there after $t$ years. It was derived from ocean models that reproduce the observed distribution of **radiocarbon**, independently of the CO₂ record; its time scales range from two weeks to 340 years. Three such models are available: HILDA (box-diffusion model, default), Bern2.5D (zonally averaged circulation model) and the Princeton 3D general circulation model. The dashboard shows the range of the three as the uncertainty of the ocean transport.

The surface ocean partial pressure follows from the carbon added to the mixed layer with the **non-linear carbonate chemistry** at constant alkalinity:

$$
c_S = c_A^0 + \sum_{n=1}^{5} b_n(T) \, \Delta \text{DIC}^n ,
\qquad
\Delta \text{DIC} = \frac{\Delta m_S}{M_\text{C} \, \rho \, h \, A_O}
$$

with the dissolved inorganic carbon $\Delta\text{DIC}$ in µmol/kg, mixed layer depth $h$ and ocean area $A_O$. The polynomial reproduces the increase of the Revelle factor with rising CO₂: the more carbon the ocean has taken up, the less it can take up in addition.

### Land

The land biosphere is a 4-box model (ground vegetation, wood, detritus, soil). CO₂ fertilization increases the net primary production

$$
\Delta\text{NPP} = \text{NPP}^0 \, \beta \, \ln \frac{c_A}{c_A^0},
\qquad \text{NPP}^0 = 60~\text{PgC/yr},
$$

and the additional biomass decays again with the response function of the four boxes,

$$
r_L(t) = 2.006\,e^{-t/2.86} + 0.268\,e^{-t/20} - 1.568\,e^{-t/2.18} + 0.293\,e^{-t/100} ,
\qquad
\Delta m_L(t) = \int_{1750}^{t} \Delta\text{NPP}(t')\, r_L(t - t')\, \mathrm dt' .
$$

Land-use change is an emission to the atmosphere; there is no regrowth of cleared vegetation.

### Equations

Written as differential equations, each response term becomes a box that receives the share $a_k$ of its input and decays with $\tau_k$:

$$
\begin{aligned}
\dot N_1 &= \gamma + \delta - f_O - \Delta\text{NPP} + \textstyle\sum_k L_k / \tau^L_k \\
\dot S_k &= a_k \, f_O - S_k / \tau_k , \qquad \dot S_\infty = a_\infty \, f_O \\
\dot L_k &= a^L_k \, \Delta\text{NPP} - L_k / \tau^L_k
\end{aligned}
$$

The mixed-layer perturbation is $\Delta m_S = \sum_k S_k + S_\infty$; everything else taken up by the ocean is in the deep ocean. The system is solved with the same Runge–Kutta method as Tomizuka’s model, with a step of 0.05 years because the fastest response term decays within two weeks.

### Comparison with Tomizuka’s model

Both models run with the same emissions and are fitted with the same cost function (see Calibration). With the default parameters:

| | Observed / reference | Tomizuka | Bern (fitted, β = 0.446) | Bern (published, β = 0.287) |
| --- | ---: | ---: | ---: | ---: |
| CO₂ deviation 1959–2024 (RMSE) | – | 1.3 ppm | 9.4 ppm | 19.6 ppm |
| CO₂ concentration 2024 | 424.6 ppm | 423.3 ppm | 430.8 ppm | 448.0 ppm |
| Land sink 2015–2024 | 2.57 GtC/yr | 2.78 | 3.00 | 2.10 |
| Pulse remaining after 100 years | 41 % | 38 % | 32 % | 38 % |
| Pulse remaining after 300 years | 32 % | 20 % | 25 % | 28 % |
| Pulse remaining after 1000 years | 24 % | 17 % | 20 % | 22 % |

The pulse reference is the multi-model mean of [Joos et al. (2013)](https://doi.org/10.5194/acp-13-2793-2013): 100 GtC are emitted at once in 2010, and the share remaining in the atmosphere is followed for 1000 years.

- **History:** Tomizuka’s model reproduces the measured concentration better. With today’s land-use change estimates, which are larger than those of the 1990s, the published Bern model ends 23 ppm too high; fitting β brings it closer, but only with a land sink that is too strong.
- **Long term:** Tomizuka’s deep ocean exchanges carbon within about a century, while radiocarbon gives deep-water ages of about 1000 years. It therefore removes CO₂ too quickly after a few decades. The Bern ocean is calibrated with radiocarbon and stays closer to the reference, especially with the published β.
- **For the reserves:** both models agree on the peak concentration within a few ppm, but disagree by about 60 ppm on the concentration in 2300. The historical record cannot decide between them; it is too short to constrain the slow deep ocean.

### Air–sea gas exchange

Waves, breaking waves and bubbles speed up the gas exchange between air and sea. In the Bern model they are contained in the empirical gas exchange rate, which is derived from the oceanic uptake of bomb radiocarbon. The sidebar can scale this rate: doubling it lowers the CO₂ concentration of 2024 by only about 2.5 ppm, quadrupling it by about 4 ppm. The surface layer reaches equilibrium with the atmosphere within about a year; the uptake is limited by the transport into the deep ocean and by the carbonate chemistry, not by the gas exchange.
