<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  caption: { type: String, default: '' },
})
</script>

<template>
  <section class="card">
    <header class="card-header">
      <div>
        <h2>{{ title }}</h2>
        <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.controls" class="controls">
        <slot name="controls" />
      </div>
    </header>
    <slot />
    <p v-if="caption" class="caption">{{ caption }}</p>
  </section>
</template>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  min-width: 0;
}

.card-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px 24px;
  margin-bottom: 12px;
}

h2 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
}

.subtitle {
  margin: 4px 0 0;
  color: var(--text-muted);
  font-size: 0.875rem;
}

.controls {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.caption {
  margin: 12px 0 0;
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
