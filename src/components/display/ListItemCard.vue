<template>
  <div>
    ListItemCard
  </div>
</template>
<script lang="ts" setup>
import type { DiscoveryItem } from '@/types/discovery.interface.ts'

const props = defineProps<{
  item: DiscoveryItem
  options?: {
    showDelete?: boolean
  }
}>()

const showDelete = computed(() => props.options?.showDelete ?? false)
</script>
