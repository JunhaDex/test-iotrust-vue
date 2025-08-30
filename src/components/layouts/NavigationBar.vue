<template>
  <div class="navigation-bar">
    <nav class="menu flex flex-1 justify-end gap-4">
      <span class="nav-item io-clickable io-clickable-nav">
        <Wallet :size="24" color="var(--nav-inactive)" />
        <label>{{ t('nav_wallet') }}</label>
      </span>
      <span class="nav-item io-clickable io-clickable-nav">
        <Lightbulb :size="24" color="var(--nav-inactive)" />
        <label>{{ t('nav_insight') }}</label>
      </span>
    </nav>
    <div class="hexagon io-clickable" @click="updateTheme">
      <ArrowRightLeft :size="24" />
    </div>
    <nav class="menu flex flex-1 justify-start gap-4">
      <span class="nav-item io-clickable io-clickable-nav active">
        <Compass :size="24" color="var(--nav-active)" />
        <label>{{ t('nav_discover') }}</label>
      </span>
      <span class="nav-item io-clickable io-clickable-nav" @click="isLang = true">
        <Languages :size="24" color="var(--nav-inactive)" />
        <label>{{ t('nav_language') }}</label>
      </span>
    </nav>
  </div>
  <ModalLang :is-open="isLang" @close="isLang = false" />
</template>
<script setup lang="ts">
import { Wallet, Lightbulb, ArrowRightLeft, Compass, Languages } from 'lucide-vue-next'
import ModalLang from '@/components/feedback/modal/ModalLang.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAgentStore } from '@/stores/agent.store.ts'

const { t } = useI18n()
const agentStore = useAgentStore()
const isLang = ref(false)

function updateTheme() {
  agentStore.uiMode = agentStore.uiMode === 'theme-light' ? 'theme-dark' : 'theme-light'
}
</script>
<style scoped>
.navigation-bar {
  --nav-bg: #1a1d1e;
  --nav-bg-2: #2c2f31;
  --v-s-nav-darker: hsl(from var(--nav-bg-2) h s calc(l - 10));
  --nav-inactive: #878993;
  --nav-active: #388e4a;

  position: fixed;
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: var(--layout-breakpoint);
  background-color: var(--nav-bg);
  padding: 0.5rem 1rem;
  z-index: 10;
  height: 74px;
  overflow: hidden;
}

.nav-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;

  & svg {
    width: 24px;
    height: 24px;
  }

  & label {
    font-size: var(--text-xs);
    text-wrap: nowrap;
    color: var(--nav-inactive);
  }

  &.active {
    & label {
      color: var(--nav-active);
      font-weight: var(--font-weight-semibold);
    }
  }
}

.io-clickable-nav {
  &:hover {
    background-color: var(--nav-bg-2);
  }

  &:active {
    background-color: var(--v-s-nav-darker);
  }
}

.hexagon {
  width: 56px;
  height: 56px;
  background-color: white;
  mask-image: url('@/assets/icons/Hexagon.svg');
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & svg {
    color: var(--nav-bg);
    width: 24px;
    height: 24px;
  }
}
</style>
