<script setup lang="ts">
const store = useTodoStore();
await useAsyncData("todos", () => store.load());   // loaded on the server, so the first page is already filled in
const title = ref("");

async function submit() {
  await store.add(title.value);
  if (!store.error) title.value = "";
}
</script>

<template>
  <main>
    <h1>Todos</h1>
    <!-- A <label> (hidden visually) so screen readers announce the input -->
    <form @submit.prevent="submit">
      <label for="title" class="sr-only">New todo</label>
      <input id="title" v-model="title" placeholder="What needs doing?" />
      <button type="submit">Add</button>
    </form>
    <p v-if="store.error" role="alert">{{ store.error }}</p>

    <ul>
      <li v-for="t in store.todos" :key="t.id">
        <label>
          <input type="checkbox" :checked="t.done" @change="store.toggle(t.id)" />
          <span :style="{ textDecoration: t.done ? 'line-through' : 'none' }">{{ t.title }}</span>
        </label>
        <button :aria-label="`Delete ${t.title}`" @click="store.remove(t.id)">x</button>
      </li>
    </ul>
  </main>
</template>

<style>
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
main { max-width: 28rem; margin: 2rem auto; font-family: system-ui, sans-serif; }
li { display: flex; justify-content: space-between; margin: 0.5rem 0; }
</style>
