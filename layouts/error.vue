<template>
  <LayoutDefaultHeader />

  <div class="w-full flex items-center justify-center h-[86vh] pt-[200px]">
    <div class="w-[500px] m-auto mt-[10%] text-center">
      <slot />
    </div>
  </div>

  <LayoutDefaultFooter />
</template>
