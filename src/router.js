import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardPage from './pages/DashboardPage.vue'

export const router = createRouter({
  // Hash history works on any static host without server configuration
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: DashboardPage, meta: { title: 'Dashboard', sidebar: true } },
    // Loaded on demand: Markdown and KaTeX are only needed here
    { path: '/theory', name: 'theory', component: () => import('./pages/TheoryPage.vue'), meta: { title: 'Theory' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
