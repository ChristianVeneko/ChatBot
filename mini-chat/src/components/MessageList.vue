<template>
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MessageItem from './MessageItem.vue'
  
  const messages = ref([
    { id: 1, user: 'Bot', text: '¡Hola! ¿En qué puedo ayudarte hoy?', avatar: '🤖' },
    { id: 2, user: 'You', text: 'Hola, me gustaría saber más sobre la inteligencia artificial.', avatar: '🙋‍♀️' },

  ])
  </script>
  