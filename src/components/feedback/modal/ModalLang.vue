<template>
  <ModalBase :is-open="isOpen" @close="() => emit('close')">
    <div class="io-modal p-4">
      <div class="modal-title text-center p-2 text-lg font-semibold">
        {{ t('lang_setting_title') }}
      </div>
      <p class="text-center text-pretty p-2 mb-2">{{ t('lang_setting_confirm') }}</p>
      <div class="flex gap-4 mb-4">
        <div
          class="io-btn btn-lang"
          :class="agentStore.access.locale === 'ko' ? 'btn-green' : 'btn-outline'"
          @click="() => handleLangChange('ko')"
        >
          <img src="https://flagcdn.com/kr.svg" width="30" alt="lang_kr" />
          <span class="ml-2">한국어</span>
        </div>
        <div
          class="io-btn btn-lang"
          :class="agentStore.access.locale === 'en' ? 'btn-green' : 'btn-outline'"
          @click="() => handleLangChange('en')"
        >
          <img src="https://flagcdn.com/us.svg" width="30" alt="lang_en" />
          <span class="ml-2">English</span>
        </div>
      </div>
      <div>
        <button class="io-btn btn-outline w-full" @click="emit('close')">
          {{ t('button_close') }}
        </button>
      </div>
    </div>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from '@/components/feedback/modal/ModalBase.vue'
import { useAgentStore } from '@/stores/agent.store.ts'
import type { AllowLocale } from '@/types/discovery.interface.ts'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close'])
const agentStore = useAgentStore()

function handleLangChange(lang: AllowLocale) {
  agentStore.changeLocale(lang)
}
</script>
<style scoped>
.modal-title {
  border-bottom: 2px dashed var(--color-border-default);
}

.btn-lang {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  & img {
    width: 24px;
    height: auto;
  }
}
</style>
