## Temperature response

The additional CO₂ in the atmosphere changes the radiation balance. The radiative forcing of CO₂ relative to 1750 is approximated by the logarithmic formula of [Myhre et al. (1998)](https://doi.org/10.1029/98GL01908):

$$
\Delta F = 5.35~\frac{\text{W}}{\text{m}^2} \cdot \ln \frac{c}{c^0},
\qquad
F_{2\times} = 5.35 \ln 2 \approx 3.71~\frac{\text{W}}{\text{m}^2}
$$

The temperature of each carbon model follows from the same **two-layer energy balance model** ([Held et al., 2010](https://doi.org/10.1175/2009JCLI3466.1); [Geoffroy et al., 2013](https://doi.org/10.1175/JCLI-D-12-00195.1)). An upper layer (atmosphere, land and ocean mixed layer) with heat capacity $C$ exchanges heat with the deep ocean (heat capacity $C_0$):

$$
\begin{aligned}
C \, \frac{\mathrm dT}{\mathrm dt} &= \Delta F - \lambda T - \gamma \, (T - T_0) \\
C_0 \, \frac{\mathrm dT_0}{\mathrm dt} &= \gamma \, (T - T_0)
\end{aligned}
\qquad
\lambda = \frac{F_{2\times}}{\text{ECS}}
$$

The defaults are the CMIP5 multi-model mean $C = 7.7$ and $C_0 = 106~\text{W yr m}^{-2}\,\text{K}^{-1}$, $\gamma = 0.70~\text{W m}^{-2}\,\text{K}^{-1}$ (Geoffroy et al., 2013) and the IPCC AR6 best estimate of the equilibrium climate sensitivity, ECS = 3 °C. They give a transient climate response of about 1.9 °C (AR6 best estimate: 1.8 °C).

The deep ocean makes the temperature lag behind the forcing. When the emissions end, the CO₂ forcing slowly decreases while the deep ocean stops absorbing heat; both effects nearly cancel, so the temperature stays almost constant for centuries. This agrees with the near-zero “zero emissions commitment” found by full climate models.

The model temperature is shifted so that its 1861–1890 mean is zero, the baseline of the temperature record of [Our World in Data](https://ourworldindata.org/grapher/temperature-anomaly).

**Other forcings.** The observed warming also contains methane, nitrous oxide, ozone and aerosols. In 2019 their net effect added about 26 % to the CO₂ forcing (IPCC AR6: total anthropogenic forcing 2.72 W/m², CO₂ 2.16 W/m²). With CO₂ forcing only, the models stay about 0.25 °C below the recent observations; with 26 % added they come close to the observed 2015–2024 mean of 1.26 °C. The sidebar can add other forcings as a fixed share of the CO₂ forcing; this is a rough scenario assumption, since their future depends on methane emissions and air pollution control.
