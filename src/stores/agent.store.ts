import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AllowLocale, AllowPlatform } from '@/types/discovery.interface.ts'

export const useAgentStore = defineStore(
  'agent',
  () => {
    const access = ref<{
      locale: AllowLocale
      platform: AllowPlatform
    }>({
      locale: 'en',
      platform: 'ios',
    })
    return {
      access,
    }
  },
  { persist: true },
)
