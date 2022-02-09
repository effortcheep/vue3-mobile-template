<script setup lang="ts">
const props = defineProps<{ id: string }>()
console.log(props.id)
</script>

<script></script>

<template>
  <div>
    <h1 class="bg-red-500">id: {{ id }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
