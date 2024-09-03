<script setup lang="ts">
import {watch} from 'vue'
import {gsap} from 'gsap'

const animateCarCards = () => {
  const cars = document.querySelectorAll('.cars-list__car-card')
  const tl = gsap.timeline()

  if (cars.length > 0) {
    cars.forEach(car => {
      tl.fromTo(
        car,
        0.2,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.inOut'
        }
      )
    })
  }
}

const props = defineProps<{
  car: CarType
  isLoading: boolean
}>()

watch(
  () => props.isLoading,
  () => {
    animateCarCards()
  }
)
</script>

<template>
  <div class="cars-list__car-card">
    <div v-if="!isLoading" class="flex flex-col space-y-3">
      <ShadAspectRatio :ratio="16 / 9">
        <img
          :src="car.image"
          alt="Image"
          class="rounded-t-xl object-cover h-min-[260px] w-full"
        />
      </ShadAspectRatio>
      <div class="space-y-2 px-3 pb-4">
        <h2 class="text-2xl font-bold">{{ car.make }} {{ car.model }}</h2>
        <p class="text-sm">{{ car.year }} | {{ car.mileage }} miles</p>
        <p class="text-lg font-bold">{{ car.price }}</p>
      </div>
    </div>
    <div v-else class="flex flex-col space-y-3 pb-12 px-4">
      <ShadSkeleton class="h-[225px] w-[100%] rounded-xl mb-6 pt-4" />
      <div class="space-y-2 pb-2">
        <ShadSkeleton class="h-6 w-[350px]" />
        <ShadSkeleton class="h-6 w-[200px]" />
        <ShadSkeleton class="h-6 w-[80px]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cars-list__car-card {
  @apply col-span-12 md:col-span-6 lg:col-span-4;
  @apply shadow-lg cursor-pointer rounded-2xl bg-primary-foreground;
  &:hover {
    @apply shadow-2xl;
    transition: background-color 0.2s ease-in-out !important;
    -webkit-transform: translateY(-10px) !important;
    transform: translateY(-3px) !important;
  }
  img {
    @apply w-full;
  }
  h2 {
    @apply text-xl;
  }
  p {
    @apply text-lg; /* 16px */
  }
}
</style>
