<template>
  <div class="search-header p-4">
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

const { t } = useI18n()
</script>
<style scoped>
.search-header {
  display: flex;
  gap: 0.5rem;

  .icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
