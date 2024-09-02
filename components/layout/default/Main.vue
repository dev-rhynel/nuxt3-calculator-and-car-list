<template>
  <main class="default-main">
    <div class="default-main__container">
      <slot />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.default-main {
  @apply w-full pb-1;
  &__container {
    @apply h-[86vh] p-4;
  }
}
</style>
