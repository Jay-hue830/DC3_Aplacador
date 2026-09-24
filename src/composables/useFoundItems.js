import { computed, onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'campus-lost-and-found-items'

export function useFoundItems() {
  const items = ref([])

  const claimedItems = computed(() => items.value.filter((item) => item.claimed))
  const unclaimedItems = computed(() => items.value.filter((item) => !item.claimed))

  function loadItems() {
    const savedItems = localStorage.getItem(STORAGE_KEY)

    if (savedItems) {
      items.value = JSON.parse(savedItems)
    }
  }

  function addItem(item) {
    const normalizedItem = {
      id: Date.now(),
      ...item,
      claimed: false,
    }

    items.value = [...items.value, normalizedItem]
  }

  function markClaimed(itemId) {
    items.value = items.value.map((item) =>
      item.id === itemId ? { ...item, claimed: true } : item,
    )
  }

  function removeItem(itemId) {
    items.value = items.value.filter((item) => item.id !== itemId)
  }

  watch(
    items,
    (newItems) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems))
    },
    { deep: true },
  )

  onMounted(() => {
    loadItems()
  })

  return {
    items,
    claimedItems,
    unclaimedItems,
    addItem,
    markClaimed,
    removeItem,
    loadItems,
  }
}
