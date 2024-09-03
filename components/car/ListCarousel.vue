<script setup lang="ts">
import {CalendarDays} from 'lucide-vue-next'
import {ref} from 'vue'

defineProps<{
  cars: CarType[]
  isLoading: boolean
  title: string
}>()

const selectedCar = ref<CarType | null>(null)
const carViewer = ref()

const viewCar = (car: CarType) => {
  selectedCar.value = car
  if (carViewer.value) carViewer.value.openDrawer(true)
}
</script>

<template>
  <ShadCarousel
    class="relative w-full max-w-sm my-12"
    :opts="{
      align: 'start'
    }"
  >
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <ShadCarouselContent class="-ml-1">
      <ShadCarouselItem
        v-for="car in cars"
        :key="car.id"
        @click="viewCar(car)"
        class="mb-3 md:basis-1/2 lg:basis-1/3"
      >
        <div>
          <ShadHoverCard
            ><ShadHoverCardTrigger>
              <ShadCard
                @click="viewCar(car)"
                class="hover:shadow-2xl cursor-pointer"
                v-if="!isLoading"
              >
                <ShadCardContent
                  class="flex aspect-square items-center justify-center p-0"
                >
                  <ShadAspectRatio :ratio="16 / 9">
                    <img :src="car.image" alt="Image" />
                  </ShadAspectRatio>
                </ShadCardContent>
              </ShadCard>
              <ShadCard v-else class="hover:shadow-2xl cursor-pointer">
                <ShadCardContent
                  class="flex aspect-square items-center justify-center p-0"
                >
                  <ShadSkeleton class="h-[110px] w-[100%]" />
                </ShadCardContent>
              </ShadCard>
            </ShadHoverCardTrigger>
            <ShadHoverCardContent class="w-80">
              <div class="flex justify-between space-x-4">
                <div class="flex justify-between space-x-4">
                  <ShadAvatar>
                    <ShadAvatarImage :src="car.image" alt="Car image" />
                    <ShadAvatarFallback>{{ car.make[0] }}</ShadAvatarFallback>
                  </ShadAvatar>
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">@{{ car.make }}</h4>
                    <p class="text-sm">{{ car.make }} {{ car.model }}</p>
                    <p class="text-lg font-bold">{{ car.price }}</p>
                    <div class="flex items-center pt-2">
                      <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
                      <span class="text-xs text-muted-foreground">
                        {{ car.year }}
                      </span>
                    </div>
                  </div>
                </div>
              </div></ShadHoverCardContent
            >
          </ShadHoverCard>
        </div>
      </ShadCarouselItem>
    </ShadCarouselContent>
    <ShadCarouselPrevious />
    <ShadCarouselNext />
  </ShadCarousel>
  <CarViewer v-if="selectedCar" ref="carViewer" :car="selectedCar" />
</template>
