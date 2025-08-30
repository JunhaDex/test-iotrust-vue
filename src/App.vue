<template>
  <div class="screen">
    <div class="app-container" id="AppContainer">
      <RouterView />
      <NavigationBar />
    </div>
  </div>
</template>
<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
</script>
<style scoped></style>
