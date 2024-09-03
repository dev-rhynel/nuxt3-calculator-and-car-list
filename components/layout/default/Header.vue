<script setup lang="ts">
import Navigation from './Navigation.vue'
</script>

<template>
  <header class="default-header">
    <div class="default-header__container">
      <div class="default-header__logo">
        <h1><NuxtLink to="/">RHYNEL</NuxtLink></h1>
      </div>
      <div class="default-header__rest-space">
        <Navigation v-bind="$attrs" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.default-header {
  @apply fixed  z-40 m-auto h-[60px] w-full bg-primary flex items-center justify-between;
  &__container {
    @apply flex grid grid-cols-12 gap-4;
  }
  &__logo {
    @apply col-span-3;
    h1 {
      @apply text-primary-foreground text-xl font-bold;
    }
  }
  &__rest-space {
    @apply flex col-span-9 justify-end;
  }
}
</style>
