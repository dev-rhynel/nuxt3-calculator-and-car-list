<script lang="ts" setup>
import {createReusableTemplate, useMediaQuery} from '@vueuse/core'
import {ref} from 'vue'

const emits = defineEmits(['update:modelValue'])

interface Status {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: 'all',
    label: 'All Cars'
  },
  {
    value: 'supercar',
    label: 'Supercars'
  },
  {
    value: 'pickup',
    label: 'Pickups'
  },
  {
    value: 'suv',
    label: 'SUVs'
  }
]

const [UseTemplate, StatusList] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)
const selectedStatus = ref<Status | null>(null)

function onStatusSelect(status: Status) {
  selectedStatus.value = status
  isOpen.value = false
  emits('update:modelValue', status.value)
}
</script>

<template>
  <div class="mb-6">
    <UseTemplate>
      <ShadCommand>
        <ShadCommandInput placeholder="Filter status..." />
        <ShadCommandList>
          <ShadCommandEmpty>No results found.</ShadCommandEmpty>
          <ShadCommandGroup>
            <ShadCommandItem
              v-for="status of statuses"
              :key="status.value"
              :value="status.value"
              @select="onStatusSelect(status)"
              class="cursor-pointer"
            >
              {{ status.label }}
            </ShadCommandItem>
          </ShadCommandGroup>
        </ShadCommandList>
      </ShadCommand>
    </UseTemplate>

    <ShadPopover v-if="isDesktop" v-model:open="isOpen">
      <ShadPopoverTrigger as-child>
        <ShadButton variant="outline" class="w-[150px] justify-start">
          {{ selectedStatus ? selectedStatus.label : 'Filter by Car type' }}
        </ShadButton>
      </ShadPopoverTrigger>
      <ShadPopoverContent class="w-[200px] p-0" align="start">
        <StatusList class="cursor-pointer" />
      </ShadPopoverContent>
    </ShadPopover>

    <ShadDrawer
      v-else
      :open="isOpen"
      @update:open="newOpenValue => (isOpen = newOpenValue)"
    >
      <ShadDrawerTrigger as-child>
        <ShadButton variant="outline" class="w-[150px] justify-start">
          {{ selectedStatus ? selectedStatus.label : 'Filter by type' }}
        </ShadButton>
      </ShadDrawerTrigger>
      <ShadDrawerContent>
        <div class="mt-4 border-t">
          <StatusList class="cursor-pointer" />
        </div>
      </ShadDrawerContent>
    </ShadDrawer>
  </div>
</template>
