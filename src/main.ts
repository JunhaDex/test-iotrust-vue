import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createI18n } from 'vue-i18n'
import ko from '@/assets/langs/ko.json'
import en from '@/assets/langs/en.json'

import App from './App.vue'
import router from './router'

/* vue carousel css */
import 'vue3-carousel/carousel.css'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE || 'ko',
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    ko,
    en,
  },
})
pinia.use(createPersistedState())

app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
