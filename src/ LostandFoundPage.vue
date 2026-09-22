<<script setup>
import { h, ref } from 'vue'
const subject = ref('');
const topic = ref('');
</script>
<template>
  <h1>Study Session Page</h1>
<form @submit.prevent="submit">
    <input v-model="itemname" type="text" placeholder="Item Name"><br>
    <input v-model="location" type="text" placeholder="Location"><br>
    <input v-model="itemtype" type="checkbox" placeholder="Item Type"><br>
    <input v-model="datereported" type="date" placeholder="Date Reported"><br>

  <button>Submit</button>
  </form>
 <h3>Item Name: {{ itemname }}</h3>
  <h3>Location: {{ location }}</h3>
  <h3>Item Type: {{ itemtype }}</h3>
  <h3>Date Reported: {{ datereported }}</h3>

  
</template>