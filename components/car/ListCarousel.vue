<script setup lang="ts">
import {AspectRatio} from '@/components/ui/aspect-ratio'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {Card, CardContent} from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {CalendarDays} from 'lucide-vue-next'
import {Skeleton} from '@/components/ui/skeleton'

defineProps<{
  cars: CarType[]
  isLoading: boolean
  title: string
}>()

const carViewer = ref()

const selectedCar = ref<CarType | null>(null)
const viewCar = (car: CarType) => {
  selectedCar.value = car
  if (carViewer.value) carViewer.value.openDrawer(true)
}
</script>

<template>
  <Carousel
    class="relative w-full max-w-sm my-12"
    :opts="{
      align: 'start'
    }"
  >
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <CarouselContent class="-ml-1">
      <CarouselItem
        v-for="car in cars"
        :key="car.id"
        @click="viewCar(car)"
        class="mb-3 md:basis-1/2 lg:basis-1/3"
      >
        <div>
          <HoverCard
            ><HoverCardTrigger>
              <Card
                @click="viewCar(car)"
                class="hover:shadow-2xl cursor-pointer"
                v-if="!isLoading"
              >
                <CardContent
                  class="flex aspect-square items-center justify-center p-0"
                >
                  <AspectRatio :ratio="16 / 9">
                    <img :src="car.image" alt="Image" />
                  </AspectRatio>
                </CardContent>
              </Card>
              <Card v-else class="hover:shadow-2xl cursor-pointer">
                <CardContent
                  class="flex aspect-square items-center justify-center p-0"
                >
                  <Skeleton class="h-[110px] w-[100%]" />
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent class="w-80">
              <div class="flex justify-between space-x-4">
                <div class="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage :src="car.image" alt="Car image" />
                    <AvatarFallback>{{ car.make[0] }}</AvatarFallback>
                  </Avatar>
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
              </div></HoverCardContent
            >
          </HoverCard>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  <CarViewer v-if="selectedCar" ref="carViewer" :car="selectedCar" />
</template>
