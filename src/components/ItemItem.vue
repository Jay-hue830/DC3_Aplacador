<script setup>
import { useDateFormatter } from '../composables/useDateFormatter'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['mark-claimed', 'remove-item'])
const { formatDate } = useDateFormatter()

function markAsClaimed() {
  emit('mark-claimed', props.item.id)
}

function removeCurrentItem() {
  emit('remove-item', props.item.id)
}
</script>

<template>
  <li class="item-row">
    <div>
      <strong>{{ item.itemName }}</strong>
      <span> — {{ item.location }} ({{ item.itemType }})</span>
      <p>Date reported: {{ formatDate(item.dateReported) }}</p>
    </div>

    <div class="actions">
      <button type="button" :disabled="item.claimed" @click="markAsClaimed">
        {{ item.claimed ? 'Claimed' : 'Mark as Claimed' }}
      </button>
      <button type="button" class="delete-btn" @click="removeCurrentItem">
        Delete
      </button>
    </div>
  </li>
</template>
