<script setup lang="ts">
import CarItem from './Item.vue'
import {ref} from 'vue'

defineProps<{
  cars: CarType[]
  isLoading: boolean
}>()

const carViewer = ref()

const selectedCar = ref<CarType | null>(null)
const viewCar = (car: CarType) => {
  selectedCar.value = car
  if (carViewer.value) carViewer.value.openDrawer(true)
}
</script>

<template>
  <div class="cars-list">
    <transition-group name="fade" tag="div" class="grid grid-cols-2 gap-6">
      <div
        v-for="car in cars"
        :key="car.id"
        class="col-span-2 md:col-span-1 sm:col-span-2 rounded-2xl"
      >
        <CarItem
          :car="car"
          :isLoading="isLoading"
          @click="viewCar(car)"
          v-bind="$attrs"
        />
      </div>
    </transition-group>
  </div>
  <CarViewer v-if="selectedCar" ref="carViewer" :car="selectedCar" />
</template>

<style lang="scss" scoped>
.cars-list {
  min-height: 90vh;
}
</style>
