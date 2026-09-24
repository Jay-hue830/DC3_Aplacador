<script setup>
import { ref } from 'vue'
const item = ref('');
</script>
<template>
  <div>
    <h1>Item List</h1>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>