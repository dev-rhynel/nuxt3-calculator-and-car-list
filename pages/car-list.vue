<script setup lang="ts">
const title = ref<string>('Car List | Rhynel Technical Test')

useHead({
  title: title.value
})

useSeoMeta({
  title: title.value,
  ogTitle: title.value,
  ogSiteName: title.value,
  ogType: 'website'
})
</script>

<template>
  <LayoutDefaultContent :navId="2">List</LayoutDefaultContent>
</template>
