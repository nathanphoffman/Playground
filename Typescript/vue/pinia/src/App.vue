<script setup lang="ts">
import { useCounterStore } from "./counter";
const counter = useCounterStore();
</script>

<template>
  <h1>Hello, Pinia</h1>
  <button @click="counter.increment()">Clicked {{ counter.count }} times (doubled: {{ counter.doubled }})</button>
</template>
