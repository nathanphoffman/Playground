<script setup lang="ts">
import { ref } from "vue";
defineProps<{ label: string }>();
const emit = defineEmits<{ change: [count: number] }>();
const count = ref(0);
function increment() {
  count.value++;
  emit("change", count.value);
}
</script>

<template>
  <button type="button" @click="increment">{{ label }}: {{ count }}</button>
</template>
