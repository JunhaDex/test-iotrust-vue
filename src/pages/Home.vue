<template>
  <main>
    <SearchHeader />
    <CarouselBanner />
    <h3>즐겨찾기</h3>
    <!--<ListItemCard item=""/>-->
    <h3>목록</h3>
    <!--<ListItemCard item=""/>-->
  </main>
</template>
<script setup lang="ts">
import SearchHeader from '@/components/layout/SearchHeader.vue'
import CarouselBanner from '@/components/display/CarouselBanner.vue'
import ListItemCard from '@/components/display/ListItemCard.vue'
</script>
<style scoped></style>
