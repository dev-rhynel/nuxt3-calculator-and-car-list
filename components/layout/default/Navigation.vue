<script setup lang="ts">
const props = defineProps({
  navId: {
    type: Number,
    default: 0
  }
})

const navs = ref<NavType[]>([
  {
    id: 1,
    name: 'Calculator',
    path: '/'
  },
  {
    id: 2,
    name: 'Car List',
    path: '/car-list'
  }
])
</script>

<template>
  <nav class="default-navigation">
    <ul>
      <li v-for="nav in navs" :key="nav.id">
        <NuxtLink :to="nav.path" :class="[{'text-red-500': nav.id == navId}]">{{
          nav.name
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.default-navigation {
  @apply flex justify-end;
  @apply w-full;
  ul {
    @apply flex;
    li {
      @apply text-sm ml-4 pt-1;
      @apply text-primary-foreground;
      @apply hover:text-primary-foreground/80;
    }
  }
}
</style>
