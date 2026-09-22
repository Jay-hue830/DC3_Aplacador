<<script setup>
import { h, ref } from 'vue'
const subject = ref('');
const topic = ref('');
</script>
<template>
  <h1>Study Session Page</h1>
<form @submit.prevent="submit">
    <input v-model="subject" type="text" placeholder="Subject"><br>
    <input v-model="topic" type="text" placeholder="Topic"><br>
    <input v-model="studyMethod" type="checkbox" placeholder="Study Method"><br>
    <input v-model="studydate" type="date" placeholder="Study Date"><br>
    
  <button>Submit</button>
  </form>
 <h3>Subject: {{ subject }}</h3>
  <h3>Topic: {{ topic }}</h3>
  <h3>Study Method: {{ studyMethod }}</h3>
  <h3>Study Date: {{ studydate }}</h3>

  
</template>
