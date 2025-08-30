<template>
  <DrawerBase :is-open="isOpen" @close="emit('close')">
    <template #default>
      <div class="content p-4">hahaha</div>
    </template>
    <template #sticky>
      <div class="p-4 bg-white">
        <button class="io-btn btn-outline w-full" @click="emit('close')">Close</button>
      </div>
    </template>
  </DrawerBase>
</template>
<script setup lang="ts">
import DrawerBase from '@/components/feedback/drawer/DrawerBase.vue'

const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close'])
</script>
<style scoped></style>
