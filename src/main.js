import { createApp } from 'vue'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/source-serif-4/wght.css'
import '@fontsource-variable/source-serif-4/wght-italic.css'
import '@fontsource-variable/spline-sans-mono/wght.css'
import './styles/main.css'
import App from './App.vue'
import { router } from './router.js'

createApp(App).use(router).mount('#app')
