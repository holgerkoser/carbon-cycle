<script setup>
import { computed } from 'vue'

const props = defineProps({
  definition: { type: Object, required: true },
  modified: { type: Boolean, default: false },
})
const emit = defineEmits(['reset'])
const model = defineModel({ type: [Number, Boolean, String], required: true })

const id = computed(() => `parameter-${props.definition.key}`)

// Ignore incomplete input such as an empty field or a lone minus sign
function updateNumber(event) {
  const value = event.target.valueAsNumber
  if (Number.isFinite(value)) model.value = value
}
</script>

<template>
  <div class="field" :class="{ modified }">
    <label v-if="definition.control === 'toggle'" class="toggle">
      <input v-model="model" type="checkbox">
      <span>{{ definition.label }}</span>
    </label>

    <template v-else>
      <div class="field-label">
        <label :for="id">
          {{ definition.label }}<span v-if="definition.unit" class="unit"> · {{ definition.unit }}</span>
        </label>
        <button
          v-if="modified"
          type="button"
          class="reset"
          :title="`Reset to ${definition.default}`"
          @click="emit('reset')"
        >
          ↺
        </button>
      </div>
      <select v-if="definition.control === 'select'" :id="id" v-model="model" class="select">
        <option v-for="option in definition.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div v-else class="inputs">
        <input
          v-if="definition.control === 'range'"
          type="range"
          :min="definition.min"
          :max="definition.max"
          :step="definition.step"
          :value="model"
          :aria-label="definition.label"
          @input="updateNumber"
        >
        <input
          :id="id"
          type="number"
          :class="{ compact: definition.control === 'range' }"
          :min="definition.min"
          :max="definition.max"
          :step="definition.step"
          :value="model"
          @change="updateNumber"
        >
      </div>
    </template>
  </div>
</template>

<style scoped>
.field {
  margin: 10px 0;
}

.field-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.modified .field-label label {
  color: var(--accent);
}

.reset {
  border: none;
  background: none;
  color: var(--accent);
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  padding: 0 2px;
}

.inputs {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

input[type="range"] {
  flex: 1;
  min-width: 0;
  accent-color: var(--accent);
}

input[type="number"] {
  flex: 1;
  min-width: 0;
  padding: 4px 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font: inherit;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
  background: var(--surface);
  color: var(--text);
}

.select {
  width: 100%;
  margin-top: 4px;
  padding: 4px 6px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font: inherit;
  font-size: 0.85rem;
  background: var(--surface);
  color: var(--text);
}

input[type="number"].compact {
  flex: 0 0 72px;
}

.unit {
  color: var(--text-muted);
  font-size: 0.75rem;
  white-space: nowrap;
}

.toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

.toggle input {
  accent-color: var(--accent);
}
</style>
