<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const message = {
  a: 1,
  b: 2,
}

// defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <div class="bg-red-500 text-white">我是红色背景的白色文本</div>
    <div>{{ message }}</div>
    <button @click="toggleDark()">切换</button>
  </div>
</template>

<style scoped></style>
