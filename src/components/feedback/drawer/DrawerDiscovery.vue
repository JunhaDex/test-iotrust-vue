<template>
  <DrawerBase :is-open="isOpen" @close="emit('close')">
    <template #default>
      <div v-if="item" class="content p-4">
        <div class="flex items-stretch justify-between gap-4 mb-4">
          <div class="list-image">
            <img :src="item.profile" alt="item-image" />
          </div>
          <div class="flex-1">
            <h3 class="header-title text-2xl font-semibold mt-2">{{ item.title }}</h3>
            <p v-if="item.network" class="text-tx-gray-3">{{ item.network }}</p>
          </div>
        </div>
        <p class="mb-4" v-if="item.link">{{ item.link }}</p>
        <div class="text-lg font-semibold mb-2 mt-2">Description</div>
        <p class="text-tx-gray-3">{{ item.description }}</p>
      </div>
    </template>
    <template #sticky>
      <div class="p-4 stick-bottom">
        <button class="io-btn btn-outline w-full" @click="emit('close')">Close</button>
      </div>
    </template>
  </DrawerBase>
</template>
<script setup lang="ts">
import DrawerBase from '@/components/feedback/drawer/DrawerBase.vue'
import type { DiscoveryItem } from '@/types/discovery.interface.ts'

const props = defineProps<{
  isOpen: boolean
  item: DiscoveryItem | null
}>()
const emit = defineEmits(['close'])
</script>
<style scoped>
.list-image {
  width: 64px;
  height: 64px;
  background-color: var(--color-background-1);
  border-radius: 0.5rem;
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
  overflow: hidden;
}
</style>
