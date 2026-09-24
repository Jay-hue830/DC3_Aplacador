<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['submit-item'])

const form = reactive({
  itemName: '',
  location: '',
  itemType: '',
  dateReported: '',
})

const errors = ref({})

function validateForm() {
  const nextErrors = {}

  if (!form.itemName.trim()) {
    nextErrors.itemName = 'Item name is required.'
  }

  if (!form.location.trim()) {
    nextErrors.location = 'Location is required.'
  }

  if (!form.itemType) {
    nextErrors.itemType = 'Please choose an item type.'
  }

  if (!form.dateReported) {
    nextErrors.dateReported = 'Date reported is required.'
  }

  errors.value = nextErrors
  return Object.keys(nextErrors).length === 0
}

function submitForm() {
  if (!validateForm()) {
    return
  }

  emit('submit-item', {
    itemName: form.itemName.trim(),
    location: form.location.trim(),
    itemType: form.itemType,
    dateReported: form.dateReported,
  })

  form.itemName = ''
  form.location = ''
  form.itemType = ''
  form.dateReported = ''
  errors.value = {}
}
</script>

<template>
  <form class="item-form" @submit.prevent="submitForm">
    <div>
      <label for="itemName">Item Name</label>
      <input id="itemName" v-model="form.itemName" type="text" placeholder="Enter item name" />
      <small v-if="errors.itemName">{{ errors.itemName }}</small>
    </div>

    <div>
      <label for="location">Location</label>
      <input id="location" v-model="form.location" type="text" placeholder="Where was it found?" />
      <small v-if="errors.location">{{ errors.location }}</small>
    </div>

    <div>
      <label for="itemType">Item Type</label>
      <select id="itemType" v-model="form.itemType">
        <option value="">Select type</option>
        <option value="Electronics">Electronics</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Clothing">Clothing</option>
        <option value="Other">Other</option>
      </select>
      <small v-if="errors.itemType">{{ errors.itemType }}</small>
    </div>

    <div>
      <label for="dateReported">Date Reported</label>
      <input id="dateReported" v-model="form.dateReported" type="date" />
      <small v-if="errors.dateReported">{{ errors.dateReported }}</small>
    </div>

    <button type="submit">Add Item</button>
  </form>
</template>
