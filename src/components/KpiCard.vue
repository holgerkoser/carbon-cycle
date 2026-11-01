<script setup>
defineProps({
  label: { type: String, required: true },
  // One value per model: [{ name, color, value, detail }]
  values: { type: Array, required: true },
  unit: { type: String, default: '' },
})
</script>

<template>
  <div class="kpi">
    <div class="label">{{ label }}</div>
    <div v-for="item in values" :key="item.name" class="row">
      <span class="swatch" :style="{ background: item.color }" :title="item.name" />
      <span class="value">{{ item.value }}</span>
      <span v-if="unit" class="unit">{{ unit }}</span>
      <span v-if="item.detail" class="detail">{{ item.detail }}</span>
    </div>
  </div>
</template>

<style scoped>
.kpi {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 14px;
}

.label {
  margin-bottom: 4px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  line-height: 1.35;
}

.swatch {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  align-self: center;
}

.value {
  font-size: 1.3rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.unit,
.detail {
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
