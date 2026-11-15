<script setup lang="ts">
const { data } = await useFetch<{ message: string }>("/api/hello"); // runs on the server first
</script>

<template>
  <h1>Hello, Nuxt</h1>
  <p>{{ data?.message }}</p>
</template>
