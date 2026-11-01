import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
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
  build: {
    rollupOptions: {
      input: {
        app: fileURLToPath(new URL('./index.html', import.meta.url)),
        // Reference viewer for the original Observable notebook export
        notebook: fileURLToPath(new URL('./notebook/index.html', import.meta.url)),
      },
    },
  },
})
