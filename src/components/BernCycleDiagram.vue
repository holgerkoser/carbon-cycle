<script setup>
// Carbon cycle diagram of the Bern model: masses [PgC] and fluxes [PgC/yr].
// The Bern model tracks perturbations: land and ocean show the carbon gained since 1750,
// the land fluxes are the additional production and decay caused by CO₂ fertilization.
defineProps({
  // Formatted masses: atmosphere, land, mixedLayer, deepOcean, reserves
  masses: { type: Object, required: true },
  // Formatted fluxes: extraNpp, extraDecay, delta, gamma, airSea, toDeepOcean
  fluxes: { type: Object, required: true },
})

const signed = value => (value > 0 ? `+${value}` : `${value}`)
</script>

<template>
  <svg
    class="bern-cycle-diagram"
    viewBox="0 0 604 400"
    role="img"
    aria-label="Bern carbon cycle model with reservoir changes and fluxes"
  >
    <defs>
      <marker id="bern-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
      </marker>
    </defs>

    <!-- Fluxes -->
    <g class="flux">
      <line x1="70" y1="62" x2="70" y2="178" marker-end="url(#bern-arrow)" />
      <text x="76" y="122">{{ fluxes.extraNpp }}</text>
      <text x="76" y="110" class="caption">Extra NPP</text>

      <line x1="135" y1="178" x2="135" y2="62" marker-end="url(#bern-arrow)" />
      <text x="141" y="122">{{ fluxes.extraDecay }}</text>
      <text x="141" y="110" class="caption">Extra decay</text>

      <line x1="200" y1="178" x2="200" y2="62" class="dashed" marker-end="url(#bern-arrow)" />
      <text x="206" y="122">{{ fluxes.delta }}</text>
      <text x="206" y="110" class="caption">Land use</text>

      <line x1="320" y1="298" x2="320" y2="62" class="dashed" marker-end="url(#bern-arrow)" />
      <text x="326" y="182">{{ fluxes.gamma }}</text>
      <text x="326" y="170" class="caption">Fossil emissions</text>

      <line x1="490" y1="62" x2="490" y2="138" marker-end="url(#bern-arrow)" />
      <text x="483" y="104" text-anchor="end">{{ fluxes.airSea }}</text>
      <text x="483" y="92" text-anchor="end" class="caption">Net air–sea flux</text>

      <line x1="490" y1="182" x2="490" y2="248" marker-end="url(#bern-arrow)" />
      <text x="483" y="222" text-anchor="end">{{ fluxes.toDeepOcean }}</text>
      <text x="483" y="210" text-anchor="end" class="caption">Net mixing into the deep ocean</text>
    </g>

    <!-- Reservoirs -->
    <g class="box">
      <rect x="40" y="20" width="520" height="42" rx="6" fill="#ffffff" stroke="#000" />
      <text x="300" y="37" class="mass">{{ masses.atmosphere }}</text>
      <text x="300" y="53">Atmosphere</text>

      <rect x="40" y="178" width="200" height="50" rx="6" fill="#d5e8d4" stroke="#82b366" />
      <text x="140" y="199" class="mass">{{ signed(masses.land) }}</text>
      <text x="140" y="216">Land biosphere</text>

      <rect x="260" y="298" width="120" height="44" rx="6" fill="#ffcccc" stroke="#b85450" />
      <text x="320" y="316" class="mass">{{ masses.reserves }}</text>
      <text x="320" y="333">Fossil reserves</text>

      <rect x="420" y="138" width="140" height="44" rx="6" fill="#d4e1f5" stroke="#6c8ebf" />
      <text x="490" y="156" class="mass">{{ signed(masses.mixedLayer) }}</text>
      <text x="490" y="173">Ocean mixed layer</text>

      <rect x="420" y="248" width="140" height="60" rx="6" fill="#7ea6e0" stroke="#6c8ebf" />
      <text x="490" y="272" class="mass">{{ signed(masses.deepOcean) }}</text>
      <text x="490" y="289">Deep ocean</text>
    </g>

    <text x="40" y="250" class="note">Land: gain by fertilization minus land-use losses</text>
    <text x="420" y="330" class="note">Ocean: carbon added since 1750</text>
    <text x="40" y="372" class="note">Atmosphere and reserves in PgC, changes since 1750 in PgC, fluxes in PgC/yr</text>
  </svg>
</template>

<style scoped>
.bern-cycle-diagram {
  display: block;
  width: 100%;
  max-width: 720px;
  height: auto;
  margin: 0 auto;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  color-scheme: light;
}

.flux line {
  stroke: #333;
  stroke-width: 1;
}

.flux .dashed {
  stroke-dasharray: 3 3;
}

.flux text {
  fill: #000;
}

.caption {
  font-size: 9px;
  fill: #555 !important;
}

.box text {
  text-anchor: middle;
  fill: #000;
}

.mass {
  font-weight: bold;
}

.note {
  font-size: 9px;
  font-style: italic;
  fill: #555;
}
</style>
