// src/stores/useMessagesStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref([])

  const addMessage = (message) => {
    messages.value.push(message)
  }

  return {
    messages,
    addMessage
  }
})
