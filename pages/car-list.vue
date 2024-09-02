<script setup lang="ts">
import {carStore} from '@/stores/car.store'
import {storeToRefs} from 'pinia'

const title = ref<string>('Car List | Rhynel Technical Test')

useHead({
  title: title.value
})

definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: title.value,
  ogTitle: title.value,
  ogSiteName: title.value,
  ogType: 'website'
})

const {cars, isLoading, latestCars} = storeToRefs(carStore())
const {fetchCars} = carStore()

onBeforeMount(() => {
  fetchCars()
})
</script>

<template>
  <LayoutDefaultContent :navId="2">
    <CarListItems :cars="cars" :isLoading="isLoading" />
    <CarListCarousel
      :isLoading="isLoading"
      title="Latest Models"
      :cars="latestCars"
    />
  </LayoutDefaultContent>
</template>
