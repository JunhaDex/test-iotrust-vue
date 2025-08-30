<template>
  <ModalBase :is-open="isOpen" @close="() => emit('close')">
    <div class="io-modal p-4">
      <div class="modal-title text-center p-2 text-lg font-semibold">
        {{ t('dapp_favorite_delete_title') }}
      </div>
      <p class="text-center text-pretty p-2">
        {{ t('dapp_favorite_delete_confirm') }}
      </p>
      <div class="flex justify-between gap-2 mt-4">
        <button class="io-btn btn-outline w-full" @click="emit('close')">
          {{ t('button_cancel') }}
        </button>
        <button class="io-btn btn-outline w-full" @click="emit('remove')">
          {{ t('button_confirm') }}
        </button>
      </div>
    </div>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from '@/components/feedback/modal/ModalBase.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close', 'remove'])
</script>
<style scoped>
.modal-title {
  border-bottom: 2px dashed var(--color-border-default);
}
</style>
