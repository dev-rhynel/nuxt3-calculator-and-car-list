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

const {cars, isLoading, featuredCars} = storeToRefs(carStore())
const {fetchCars} = carStore()

onBeforeMount(() => {
  fetchCars()
})

const filter = (value: string) => {
  fetchCars(value)
}
</script>

<template>
  <LayoutDefaultContent :navId="2">
    <CarActions @update:modelValue="filter" />
    <CarListItems :cars="cars" :isLoading="isLoading" />
    <CarListCarousel
      :isLoading="isLoading"
      title="Featured Cars"
      :cars="featuredCars"
    />
  </LayoutDefaultContent>
</template>
