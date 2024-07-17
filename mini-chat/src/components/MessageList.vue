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
  import { useMessagesStore } from '../stores/useMessagesStore'
  import MessageItem from './MessageItem.vue'
  
  const store = useMessagesStore()
  const { messages } = store
  </script>
  