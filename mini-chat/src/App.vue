<template>
  <div class="flex flex-col h-[90vh] max-w-2xl mx-auto bg-background rounded-2xl shadow-lg overflow-hidden">
    <Header />
    <MessageList />
    <InputForm />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import MessageList from './components/MessageList.vue'
import InputForm from './components/InputForm.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>\
</style>
