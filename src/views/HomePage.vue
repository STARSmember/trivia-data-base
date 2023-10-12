<script setup>
//import { ref } from 'vue'
//const title = ref('Hello There ✋')
</script>

<template>
  <div class="brand">
    <img class="logo" src="logo.svg" alt="logo" />
    <h1 class="title">Triviantastic</h1>
    <img class="logo" src="logo.svg" alt="logo" />
  </div>
  <div class="categories">
    <div v-for="n in 24" :key="n" class="category">Category - {{ n }}</div>
  </div>
</template>
