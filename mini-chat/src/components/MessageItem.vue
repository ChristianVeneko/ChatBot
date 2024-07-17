<template>
    <div class="flex items-start gap-4">
      <div :class="['rounded-lg w-10 h-10 text-3xl flex items-center justify-center', avatarColor]">{{ message.avatar }}</div>
      <div class="grid gap-1 items-start text-sm">
        <div class="font-bold">{{ message.user }}</div>
        <div>
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    message: {
      type: Object,
      required: true
    }
  })
  
  const avatarColor = computed(() => {
    return props.message.user === 'Bot' ? 'bg-[#55efc4]' : 'bg-[#ffeaa7]'
  })
  </script>
  