<script setup>
const saveRecords = localStorage.getItem('records') || '[]'
const records = ref(JSON.parse(saveRecords))    
    items.value = localStorage.getItem('newitem') || ''
    additem.value = localStorage.getItem('additem') || ''
    removeitem.value = localStorage.getItem('removeitem') || ''
    watch(items, (newValue)=>{
        localStorage.setItem('newitem', newValue)
    })
    watch(additem, (newValue)=>{
        localStorage.setItem('additem', newValue)
    })
    watch(removeitem, (newValue)=>{
        localStorage.setItem('removeitem', newValue)
    })

    function register(){
        alert(`Registration successful\nWelcome, ${items.value}`)
    }

    function clearForm(){
        items.value = ''
        additem.value = ''
        removeitem.value = ''

        localStorage.removeItem('newitem')
        localStorage.removeItem('additem')
        localStorage.removeItem('removeitem')
    }
</script>
<template>
    <h1>Local Storage</h1>
</template>
