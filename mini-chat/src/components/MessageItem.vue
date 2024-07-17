<template>
    <div class="flex items-start gap-4">
      <div :class="['rounded-lg w-10 h-10 text-3xl flex items-center justify-center', avatarColor]">
        {{ message.avatar }}
      </div>
      <div class="grid gap-1 items-start text-sm">
        <div class="font-bold">{{ message.user }}</div>
        <div v-html="parsedMessage"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { marked } from 'marked'
  
  const props = defineProps({
    message: {
      type: Object,
      required: true
    }
  })
  
  const parsedMessage = computed(() => {
    // Procesar el texto del mensaje usando marked para generar HTML
    return marked(props.message.text)
  })
  
  const avatarColor = computed(() => {
    return props.message.user === 'Bot' ? 'bg-[#55efc4]' : 'bg-[#ffeaa7]'
  })
  </script>
  