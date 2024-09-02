<script setup lang="ts"></script>

<template>
  <footer class="default-footer">
    <div class="default-footer__container">
      <div class="default-footer__logo">
        <h1><NuxtLink to="/">RHYNEL</NuxtLink></h1>
      </div>
      <div class="default-footer__rest-space">
        <p>&copy; 2024 | All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.default-footer {
  @apply z-40 m-auto h-[60px] w-full flex items-center justify-between;
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  &__container {
    @apply grid grid-cols-12 gap-4 pt-3;
  }
  &__logo {
    @apply col-span-4;
    h1 {
      @apply text-primary text-xl font-bold;
    }
  }
  &__rest-space {
    @apply flex   col-span-8 justify-end opacity-50;
  }
}
</style>
