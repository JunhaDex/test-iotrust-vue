<template>
  <div class="list-item-card" @click="handleItemClick">
    <div class="card-content flex justify-between items-center flex-nowrap gap-4">
      <div class="list-image"></div>
      <div class="flex-1 list-content">
        <h3 class="text-xl font-medium ellipse">Title</h3>
        <p class="text-sm text-tx-gray-3 ellipse">
          Description text goes here. This is a sample description to illustrate the layout of the
          list item card.
        </p>
      </div>
      <button class="io-btn btn-outline btn-delete" @click.stop="handleDelete">
        <Bookmark :size="24" fill="var(--color-tx-red)" stroke-width="0" />
        <span class="inline-block text-sm">삭제</span>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DiscoveryItem } from '@/types/discovery.interface.ts'
import { Bookmark } from 'lucide-vue-next'

// const props = defineProps<{
//   item: DiscoveryItem
//   options?: {
//     showDelete?: boolean
//   }
// }>()
//
const emit = defineEmits(['delete', 'open'])

// const showDelete = computed(() => props.options?.showDelete ?? false)
function handleDelete() {
  emit('delete')
}

function handleItemClick() {
  emit('open')
}
</script>
<style scoped>
.list-item-card {
  padding: 1rem;
  border-bottom: 2px solid var(--color-border-default);

  & .card-content {
    transition: all 0.15s ease-in-out;
  }

  &:active {
    & .card-content {
      transform: scale(0.98);
    }

    & .card-content:has(.btn-delete:active) {
      transform: scale(1);
    }
  }
}

.list-image {
  width: 64px;
  height: 64px;
  background-color: var(--color-background-1);
  border-radius: 0.5rem;
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
}

.ellipse {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-delete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 100%;
}
</style>
