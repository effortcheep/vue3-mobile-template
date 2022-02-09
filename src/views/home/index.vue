<script setup lang="ts">
import { ref } from 'vue'
import { foo, Type } from './home.api'

const value = ref(0)
const a = ref<Type>()
foo().then(res => {
  a.value = res
})

const changeValue = () => {
  value.value++
}
</script>

<template>
  <div>
    <h1>home</h1>
    <h1>{{ a }}</h1>
    <h1 @click="changeValue">{{ value }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
