<script setup>
import ItemItem from './ItemItem.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['mark-claimed', 'remove-item'])

function handleMarkClaimed(itemId) {
  emit('mark-claimed', itemId)
}

function handleRemoveItem(itemId) {
  emit('remove-item', itemId)
}
</script>

<template>
  <section class="item-list">
    <h2>Reported Items</h2>

    <ul v-if="items.length">
      <ItemItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @mark-claimed="handleMarkClaimed"
        @remove-item="handleRemoveItem"
      />
    </ul>

    <p v-else>No items reported yet.</p>
  </section>
</template>
