<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div> 
</template>

<style scoped>
.container {
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 700px;
}
</style>
