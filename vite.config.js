import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Relative asset paths, so the build works under any sub-path (e.g. GitHub Pages /carbon-cycle/)
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    // Used only by the lazily loaded theory page; pre-bundle them so the first visit doesn't trigger a reload
    include: ['markdown-it', '@mdit/plugin-katex', 'katex'],
  },
})
