import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

/* vue carousel css */
import 'vue3-carousel/carousel.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(createPersistedState())

app.use(pinia)
app.use(router)

app.mount('#app')
