import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AllowLocale, AllowPlatform } from '@/types/discovery.interface.ts'
import { useI18n } from 'vue-i18n'

export const useAgentStore = defineStore(
  'agent',
  () => {
    const { locale: i18nLocale } = useI18n()
    const access = ref<{
      locale: AllowLocale
      platform: AllowPlatform
    }>({
      locale: import.meta.env.VITE_DEFAULT_LOCALE || 'ko',
      platform: 'ios',
    })

    function changeLocale(locale: AllowLocale) {
      access.value.locale = locale
      i18nLocale.value = locale
    }

    return {
      access,
      changeLocale,
    }
  },
  { persist: true },
)
