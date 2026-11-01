## Fossil reserves

The global proven reserves and average CO₂ emission factors of the primary fossil fuels determine how much carbon can be released by burning them.

| Fuel | Reserves | Emission factor | Carbon content |
| --- | ---: | ---: | ---: |
| Crude oil | 1,770 bn barrels | 0.43 GtCO₂ per bn barrels | 208 PgC |
| Natural gas | 206 trillion m³ | 2.0 GtCO₂ per trillion m³ | 112 PgC |
| Hard coal | 745 Gt (≈ 70 % of coal) | 2.6 GtCO₂ per Gt | 529 PgC |
| Lignite | 320 Gt (≈ 30 % of coal) | 1.2 GtCO₂ per Gt | 105 PgC |

The carbon content follows from the reserve $R$ and the emission factor $EF$:

$$
M_C = \frac{R \cdot EF}{\phi}
$$

with the CO₂-to-carbon mass ratio $\phi$ (see Constants).

### Reserve accounting

The reserves are taken as today’s values at the end of 2024. To follow them through time, all historical emissions of each fuel are first added back, giving the amount available in 1750. Then the historical and projected emissions are subtracted year by year. Historical coal emissions are split between hard coal and lignite with a fixed lignite share (7.5 % by default).

The dashboard compares the reserves at the end of 2024 with those left in 2300.

Reserves are an economic quantity: they grow when new deposits are proven or become profitable. Burning 100 % of today’s reserves is therefore not an upper bound for future emissions.
