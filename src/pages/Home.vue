<template>
  <main>
    <SearchHeader />
    <CarouselBanner class="mb-2" />
    <div class="content p-4">
      <h3 class="section-title text-lg font-semibold">{{ t('dapp_favorite_title') }}</h3>
      <ListItemCard
        v-for="item in favoriteList"
        :key="item.id"
        :item="item"
        :options="{ showDelete: true }"
        @delete="handleFavoriteDelete"
      />
      <SkeletonListItem v-if="favoriteList.length === 0 && !isFavOnceLoad" :count="3" />
      <div v-else-if="favoriteList.length === 0 && isFavOnceLoad" class="list-empty">
        <p class="text-tx-gray-3 text-center py-4">
          {{ t('dapp_favorite_empty') }} <br />
          <span class="inline-block mt-4 underline io-clickable" @click="refreshPage">
            {{ t('dapp_favorite_refresh') }}
          </span>
        </p>
      </div>
      <h3 class="section-title text-lg font-semibold">{{ t('dapp_list_title') }}</h3>
      <ListItemCard
        v-for="item in discItemList"
        :key="item.id"
        :item="item"
        @open="handleOpenDetail"
      />
      <ScrollObserver v-if="discItemList.length > 0" @load-more="fetchNext" />
      <SkeletonListItem v-if="discItemList.length === 0 || discItemListMeta.hasNext" :count="3" />
    </div>
    <ModalDelete
      :is-open="deleteConfirm.isOpen"
      @close="deleteConfirm.isOpen = false"
      @remove="handleRemove"
    />
    <DrawerDiscovery
      :item="openDiscovery.item"
      :is-open="openDiscovery.isOpen"
      @close="openDiscovery.isOpen = false"
    />
  </main>
</template>
<script setup lang="ts">
import SearchHeader from '@/components/layouts/SearchHeader.vue'
import CarouselBanner from '@/components/display/CarouselBanner.vue'
import ListItemCard from '@/components/display/ListItemCard.vue'
import ModalDelete from '@/components/feedback/modal/ModalDelete.vue'
import { onMounted, ref } from 'vue'
import type { DiscoveryItem } from '@/types/discovery.interface.ts'
import DrawerDiscovery from '@/components/feedback/drawer/DrawerDiscovery.vue'
import type { PageMeta } from '@/types/common.interface.ts'
import { DappService } from '@/services/dapp.service.ts'
import ScrollObserver from '@/components/layouts/ScrollObserver.vue'
import SkeletonListItem from '@/components/surfaces/skeleton/SkeletonListItem.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const dappSvc = new DappService()
const favoriteList = ref<DiscoveryItem[]>([])
const isFavOnceLoad = ref(false)
const discItemList = ref<DiscoveryItem[]>([])
const discItemListMeta = ref<PageMeta>({
  total: 0,
  pageNo: '1',
  hasNext: false,
})
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

onMounted(async () => {
  await Promise.all([fetchDiscItemList(), fetchFavoriteList()])
})

async function fetchFavoriteList() {
  favoriteList.value = await dappSvc.getFavorite()
  isFavOnceLoad.value = true
}

async function fetchDiscItemList() {
  const res = await dappSvc.getDiscoveryItemList()
  console.log(res)
  discItemList.value = res.list
  discItemListMeta.value = res.meta
}

async function fetchNext() {
  if (!discItemListMeta.value.hasNext) return
  const nextPage = Number(discItemListMeta.value.pageNo) + 1
  const { meta, list } = await dappSvc.getDiscoveryItemList({
    page: {
      nextPage: nextPage.toString(),
    },
  })
  discItemList.value.push(...list)
  discItemListMeta.value.total += meta.total
  discItemListMeta.value.pageNo = meta.pageNo
  discItemListMeta.value.hasNext = meta.hasNext
}

async function handleFavoriteDelete(item: DiscoveryItem) {
  deleteConfirm.value.item = item
  deleteConfirm.value.isOpen = true
}

async function handleOpenDetail(item: DiscoveryItem) {
  openDiscovery.value.item = item
  openDiscovery.value.isOpen = true
}

async function handleRemove() {
  const item = deleteConfirm.value.item
  if (!item) return
  favoriteList.value = favoriteList.value.filter((fav) => fav.id !== item.id)
  deleteConfirm.value.item = null
  deleteConfirm.value.isOpen = false
}

async function refreshPage() {
  window.location.reload()
}
</script>
<style scoped>
.section-title {
  padding: 0.5rem 0;
  border-bottom: 2px solid var(--color-border-default);
}

.list-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
  border-bottom: 2px solid var(--color-border-default);
}
</style>
