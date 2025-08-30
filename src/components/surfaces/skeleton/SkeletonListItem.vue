<template>
  <div v-for="i in count" :key="i" class="i-list-item">
    <div class="io-skeleton i-list-image"></div>
    <div class="flex-1 min-w-0">
      <div class="io-skeleton i-list-title"></div>
      <div class="io-skeleton i-list-subtitle"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  count: number
}>()
</script>
<style scoped>
.i-list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 2px solid var(--color-border-default);
}

.i-list-image {
  border-radius: 0.5rem;
  width: 64px;
  height: 64px;
}

.i-list-title {
  height: 1.25rem;
  width: 70%;
  margin-bottom: 0.5rem;
  border-radius: 0.125rem;
}

.i-list-subtitle {
  height: 1rem;
  width: 95%;
  border-radius: 0.125rem;
}
</style>
