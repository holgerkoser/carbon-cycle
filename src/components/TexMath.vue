<script setup>
import katex from 'katex'
import { computed } from 'vue'

const props = defineProps({
  expression: { type: String, required: true },
  block: { type: Boolean, default: false },
})

const html = computed(() =>
  katex.renderToString(props.expression, { displayMode: props.block, throwOnError: false }),
)
</script>

<template>
  <div v-if="block" class="tex-block" v-html="html" />
  <span v-else v-html="html" />
</template>

<style scoped>
.tex-block {
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
