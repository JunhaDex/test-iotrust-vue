<template>
  <ModalBase :is-open="isOpen" @close="() => emit('close')">
    <div class="io-modal p-4">
      <div class="modal-title text-center p-2 text-lg">Delete Favorite</div>
      <p class="text-center text-pretty p-2">
        Do you really want to delete this site from your favorites?
      </p>
      <div class="flex justify-between gap-2 mt-4">
        <button class="io-btn btn-outline w-full" @click="emit('close')">Cancel</button>
        <button class="io-btn btn-outline w-full" @click="emit('remove')">OK</button>
      </div>
    </div>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from '@/components/feedback/modal/ModalBase.vue'

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
