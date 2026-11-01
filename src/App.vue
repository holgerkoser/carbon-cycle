<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ParameterPanel from './components/ParameterPanel.vue'

const route = useRoute()
const hasSidebar = computed(() => route.meta.sidebar === true)

// On narrow screens the sidebar is a drawer that is closed by default
const drawerOpen = ref(false)
watch(() => route.path, () => { drawerOpen.value = false })

watch(() => route.meta.title, title => {
  document.title = title ? `${title} · Seven-Box Carbon Cycle Model` : 'Seven-Box Carbon Cycle Model'
}, { immediate: true })
</script>

<template>
  <header class="app-header">
    <RouterLink to="/" class="brand">Seven-Box Carbon Cycle</RouterLink>
    <nav>
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/theory">Theory</RouterLink>
    </nav>
    <button
      v-if="hasSidebar"
      type="button"
      class="drawer-toggle"
      :aria-expanded="drawerOpen"
      aria-controls="parameters"
      @click="drawerOpen = !drawerOpen"
    >
      Parameters
    </button>
  </header>

  <div class="layout" :class="{ 'with-sidebar': hasSidebar }">
    <aside v-if="hasSidebar" id="parameters" class="sidebar" :class="{ open: drawerOpen }">
      <ParameterPanel />
    </aside>
    <div v-if="hasSidebar && drawerOpen" class="backdrop" @click="drawerOpen = false" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 24px;
  height: 56px;
  padding: 0 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.brand {
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
}

nav {
  display: flex;
  gap: 4px;
}

nav a {
  padding: 6px 10px;
  border-radius: 6px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
}

nav a:hover {
  color: var(--text);
}

nav a.router-link-exact-active {
  color: var(--accent);
  background: var(--accent-soft);
}

.drawer-toggle {
  margin-left: auto;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text);
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}

.layout {
  display: block;
}

main {
  min-width: 0;
  padding: 24px 16px 48px;
}

.sidebar {
  position: fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  z-index: 15;
  width: min(320px, 88vw);
  overflow-y: auto;
  padding: 16px 12px 32px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  transform: translateX(-100%);
  transition: transform 0.2s ease;
}

.sidebar.open {
  transform: none;
}

.backdrop {
  position: fixed;
  inset: 56px 0 0;
  z-index: 10;
  background: rgb(0 0 0 / 0.25);
}

@media (min-width: 900px) {
  .with-sidebar {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
  }

  .sidebar {
    position: sticky;
    top: 56px;
    height: calc(100vh - 56px);
    width: auto;
    transform: none;
  }

  .drawer-toggle,
  .backdrop {
    display: none;
  }

  main {
    padding: 24px 24px 48px;
  }
}

@media (max-width: 480px) {
  .brand {
    display: none;
  }
}
</style>
