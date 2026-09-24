<script setup>
import ItemForm from './ItemForm.vue'
import ItemList from './ItemList.vue'
import { useFoundItems } from '../composables/useFoundItems'

const { items, addItem, markClaimed, removeItem, claimedItems, unclaimedItems } = useFoundItems()
</script>

<template>
  <div class="page">
    <h1>Lost and Found</h1>
    <p>Report a lost item or mark a found item as claimed.</p>

    <div class="summary">
      <strong>Total:</strong> {{ items.length }}
      <strong>Claimed:</strong> {{ claimedItems.length }}
      <strong>Unclaimed:</strong> {{ unclaimedItems.length }}
    </div>

    <ItemForm @submit-item="addItem" />
    <ItemList :items="items" @mark-claimed="markClaimed" @remove-item="removeItem" />
  </div>
</template>
