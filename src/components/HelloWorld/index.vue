<template>
  <button @click="changeCount">
    hahaahaha
    count is: {{ store.count }}, count2 is : {{ store.count2 }}
  </button>
</template>

<script setup lang="ts">
import { useStore } from '@/store/store'

const store = useStore()
function changeCount() {
  console.log(store)
  store.count++
}
</script>