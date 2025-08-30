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

onMounted(() => {
  console.log('App mounted.', import.meta.env.MODE)
  console.log(import.meta.env.VITE_API_URL)
})
</script>
<style scoped></style>
