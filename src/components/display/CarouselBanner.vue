<template>
  <div class="carousel-banner">
    <SkeletonBanner v-if="bannerList.length === 0" />
    <template v-else>
      <Carousel v-bind="carouselConfig" @slide-end="handleSlide" ref="bannerRef">
        <Slide v-for="banner in bannerList" :key="banner.id">
          <img class="carousel-img" :src="banner.image" alt="home banner" />
        </Slide>
      </Carousel>
      <div class="banner-page">{{ currentPage }} / {{ bannerList.length }}</div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { Carousel, type CarouselConfig, Slide } from 'vue3-carousel'
import type { BannerItem } from '@/types/discovery.interface.ts'
import { onMounted, ref } from 'vue'
import SkeletonBanner from '@/components/surfaces/skeleton/SkeletonBanner.vue'
import { BannerService } from '@/services/banner.service.ts'

const bannerSvc = new BannerService()
const carouselConfig = ref<Partial<CarouselConfig>>({
  itemsToShow: 1,
  autoplay: 0,
  wrapAround: true,
  mouseDrag: {
    threshold: 0.1,
  },
  touchDrag: {
    threshold: 0.1,
  },
})
const bannerList = ref<BannerItem[]>([])
const currentPage = ref(1)

onMounted(async () => {
  await fetchBannerList()
})

async function fetchBannerList() {
  const res = await bannerSvc.getBannerList()
  bannerList.value = res.list
}

function handleSlide(evt: any) {
  currentPage.value = evt.currentSlideIndex + 1
}
</script>
<style scoped>
.carousel-banner {
  position: relative;
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.banner-page {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  padding: 0.125rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-tx-gray-1);
  border-radius: 99px;
  font-size: theme('fontSize.xs');
  font-weight: theme('fontWeight.semibold');
}
</style>
