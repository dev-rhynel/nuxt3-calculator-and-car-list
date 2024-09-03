<script setup lang="ts">
import {ref} from 'vue'
import {XIcon, StarIcon} from 'lucide-vue-next'

defineProps<{
  car: CarType
}>()

const open = ref(false)

const openDrawer = (status: boolean) => {
  open.value = status
}

defineExpose({
  openDrawer
})
</script>

<template>
  <ShadDrawer v-model:open="open">
    <ShadDrawerContent>
      <div class="mx-auto md:w-[44vw] w-[94vw] pb-12 mb-12">
        <ShadDrawerHeader v-if="car">
          <div @click="openDrawer(false)" class="abasolute">
            <div class="flex float-end cursor-pointer">
              <XIcon class="size-5" />
            </div>
          </div>

          <ShadDrawerTitle class="opacity-50 text-md"
            >{{ car.make }} {{ car.model }}</ShadDrawerTitle
          >
          <ShadDrawerDescription class="font-bold text-3xl text-primary">{{
            car.price
          }}</ShadDrawerDescription>
          <ShadDrawerDescription
            >Year Model: {{ car.year }}</ShadDrawerDescription
          >
        </ShadDrawerHeader>
        <div class="flex flex-col space-y-3 p-5 rounded-lg">
          <ShadAspectRatio v-if="car.image" :ratio="16 / 9" class="w-full">
            <img :src="car.image" alt="Image" class="w-full" />
          </ShadAspectRatio>
          <ShadDrawerDescription
            >Mileage: {{ car.mileage }}
            <ShadBadge
              v-if="car.featured"
              variant="secondary"
              class="text-white bg-green-500 pr-3"
              ><StarIcon class="size-3 mr-2" />Featured
            </ShadBadge>
          </ShadDrawerDescription>
        </div>
      </div>
    </ShadDrawerContent>
  </ShadDrawer>
</template>
