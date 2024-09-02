<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer'
import {XIcon} from 'lucide-vue-next'
import {AspectRatio} from '@/components/ui/aspect-ratio'

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
  <Drawer v-model:open="open">
    <DrawerContent>
      <div class="mx-auto w-[44vw] pb-12 mb-12">
        <DrawerHeader>
          <div @click="openDrawer(false)" class="abasolute">
            <div class="flex float-end cursor-pointer">
              <XIcon class="size-5" />
            </div>
          </div>
          <DrawerTitle class="opacity-50 text-md"
            >{{ car.make }} {{ car.model }}</DrawerTitle
          >
          <DrawerDescription class="font-bold text-3xl text-primary">{{
            car.price
          }}</DrawerDescription>
          <DrawerDescription>Year Model: {{ car.year }}</DrawerDescription>
        </DrawerHeader>
        <div class="flex flex-col space-y-3 p-5 rounded-lg">
          <AspectRatio v-if="car.image" :ratio="16 / 9" class="w-full">
            <img :src="car.image" alt="Image" class="w-full" />
          </AspectRatio>
          <DrawerDescription>Mileage: {{ car.mileage }}</DrawerDescription>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>
