<template>
  <div class="screen">
    <div class="app-container" id="AppContainer">
      <RouterView />
      <NavigationBar />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/layouts/NavigationBar.vue'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAgentStore } from '@/stores/agent.store.ts'
import { detectPlatform } from '@/utils/common.util.ts'

const { locale } = useI18n()
const agentStore = useAgentStore()

onMounted(() => {
  locale.value = agentStore.access.locale
  agentStore.access.platform = detectPlatform()
})
</script>
<style scoped></style>
