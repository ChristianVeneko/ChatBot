<template>
    <div class="bg-muted p-4 flex items-center gap-2 fixed bottom-0 left-0 w-full z-10">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        class="flex h-10 w-full text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-full px-4 py-2 bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary"
        placeholder="Escribe tu mensaje..."
        type="text"
      />
      <button
        @click="sendMessage"
        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
        <span class="sr-only">Enviar</span>
      </button>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  import apiClient from '../api'
  import { useMessagesStore } from '../stores/useMessagesStore'
  
  const newMessage = ref('')
  const store = useMessagesStore()
  const { addMessage } = store
  
  const sendMessage = async () => {
    if (newMessage.value.trim() !== '') {
      const userMessage = {
        id: Date.now(),
        user: 'You',
        text: newMessage.value,
        avatar: '🙋‍♀️'
      }
      addMessage(userMessage)
  
      try {
        const response = await apiClient.post('/chat', { message: newMessage.value })
        const botMessage = {
          id: Date.now() + 1,
          user: 'Bot',
          text: response.data.message,
          avatar: '🤖'
        }
        addMessage(botMessage)
      } catch (error) {
        console.error('Error al enviar el mensaje:', error)
      }
      newMessage.value = ''
    }
  }
  </script>
  