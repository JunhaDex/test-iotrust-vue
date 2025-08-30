<template>
  <main>
    <SearchHeader />
    <CarouselBanner class="mb-2" />
    <div class="content p-4">
      <h3 class="section-title text-lg font-semibold">즐겨찾기</h3>
      <!--<ListItemCard item=""/>-->
      <h3 class="section-title text-lg font-semibold">목록</h3>
      <ListItemCard
        item=""
        @delete="deleteConfirm.isOpen = true"
        @open="openDiscovery.isOpen = true"
      />
    </div>
    <ModalDelete :is-open="deleteConfirm.isOpen" @close="deleteConfirm.isOpen = false" />
    <DrawerDiscovery :is-open="openDiscovery.isOpen" @close="openDiscovery.isOpen = false" />
  </main>
</template>
<script setup lang="ts">
import SearchHeader from '@/components/layout/SearchHeader.vue'
import CarouselBanner from '@/components/display/CarouselBanner.vue'
import ListItemCard from '@/components/display/ListItemCard.vue'
import ModalDelete from '@/components/feedback/modal/ModalDelete.vue'
import { ref } from 'vue'
import type { DiscoveryItem } from '@/types/discovery.interface.ts'
import DrawerDiscovery from '@/components/feedback/drawer/DrawerDiscovery.vue'

const deleteConfirm = ref<{
  isOpen: boolean
  item: DiscoveryItem | null
}>({
  isOpen: false,
  item: null,
})
const openDiscovery = ref<{
  isOpen: boolean
  item: DiscoveryItem | null
}>({
  isOpen: false,
  item: null,
})
</script>
<style scoped>
.section-title {
  padding: 0.5rem 0;
  border-bottom: 2px solid var(--color-border-default);
}
</style>
