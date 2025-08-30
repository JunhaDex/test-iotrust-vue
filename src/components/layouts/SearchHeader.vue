<template>
  <div class="search-header p-4" :class="{ shrank: isShrank }">
    <span class="io-clickable icon">
      <ScanLine :size="24" />
    </span>
    <div class="flex-1">
      <input class="io-input" :placeholder="t('search_placeholder')" />
    </div>
    <span class="io-clickable icon">
      <Globe :size="24" />
    </span>
  </div>
</template>
<script setup lang="ts">
import { ScanLine, Globe } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { t } = useI18n()
const isShrank = ref(false)

onMounted(() => {
  const scrollContainer = document.getElementById('AppContainer')
  if (scrollContainer) {
    scrollContainer.addEventListener('scroll', handleScroll)
  }
})
onBeforeUnmount(() => {
  const scrollContainer = document.getElementById('AppContainer')
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll)
  }
})

function handleScroll() {
  const scrollContainer = document.getElementById('AppContainer')
  if (scrollContainer) {
    isShrank.value = scrollContainer.scrollTop > 50
  }
}
</script>
<style scoped>
.search-header {
  position: fixed;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--layout-breakpoint);
  background-color: var(--color-background-1);
  display: flex;
  gap: 0.5rem;
  z-index: 3;

  .icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.shrank {
    font-size: var(--text-sm);

    & .icon {
      width: 36px;
      height: 36px;

      & svg {
        width: 18px;
        height: 18px;
      }
    }

    & input {
      padding: 0.5rem 0.75rem;
    }
  }
}
</style>
