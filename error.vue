<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'

useHead({
  title: 'Error 404 | Rhyel - Technical Test'
})
</script>

<template>
  <NuxtLayout name="error">
    <h1 class="text-4xl font-bold">404</h1>
    <p>Page Not Found!</p>
    <Button size="lg" class="mt-12 bg-slate-500" @click="navigateTo('/')"
      >Back to Home</Button
    >
  </NuxtLayout>
</template>
