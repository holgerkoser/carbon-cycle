<script setup>
// Renders an Observable Plot chart that fills the container width and redraws when its inputs change
import * as Plot from '@observablehq/plot'
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'

const props = defineProps({
  // (width) => Plot options; reactive values read inside are tracked
  options: { type: Function, required: true },
})

const container = ref(null)
const width = ref(0)
let observer = null
let frame = 0

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    // Redraw in the next frame so the new figure doesn't resize the page within the same observation
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(() => {
      width.value = Math.floor(entry.contentRect.width)
    })
  })
  observer.observe(container.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})

watchEffect(() => {
  if (!container.value || width.value === 0) return
  const figure = Plot.plot({ width: width.value, ...props.options(width.value) })
  container.value.replaceChildren(figure)
})
</script>

<template>
  <div ref="container" class="plot-figure" />
</template>

<style scoped>
.plot-figure {
  width: 100%;
  min-height: 1px;
}
</style>
