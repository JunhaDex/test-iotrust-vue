<template>
  <div class="drawer-wrap" :class="{ show: isOpen }">
    <div class="drawer-handle"></div>
    <div class="inner-scroll">
      <slot name="default" />
    </div>
    <slot name="sticky" />
  </div>
  <div v-if="isOpen" class="io-backdrop" @click="() => emit('close')"></div>
</template>
<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits(['close'])
watch(
  () => props.isOpen,
  (changed) => {
    const container = document.getElementById('AppContainer')
    if (changed) {
      container?.classList.add('no-scroll')
    } else {
      container?.classList.remove('no-scroll')
    }
  },
)
</script>
<style scoped>
.drawer-wrap {
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 50%;
  width: 100%;
  max-width: var(--layout-breakpoint);
  transform: translate(-50%, 100%);
  max-height: 75vh;
  background-color: var(--color-background-1);
  border-radius: 1rem 1rem 0 0;
  transition: transform 0.3s ease-in;
  overflow: hidden;
  z-index: 12;

  &.show {
    transform: translate(-50%, 0);
  }

  .drawer-handle {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 1rem 0.5rem 1rem;
    background-color: var(--color-background-1);
    z-index: 1;

    &::before {
      content: '';
      width: 64px;
      height: 6px;
      background-color: var(--color-border-default);
      border-radius: 999px;
    }
  }
}
</style>
