import { defineStore } from "pinia";

export interface Todo { id: number; title: string; done: boolean }

export const useTodoStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);
  const error = ref("");

  async function load() {
    todos.value = await $fetch<Todo[]>("/api/todos");
  }
  async function add(title: string) {
    try {
      error.value = "";
      await $fetch("/api/todos", { method: "POST", body: { title } });
      await load();
    } catch (e: any) {
      error.value = e.data?.error ?? "Something went wrong";   // shows the API's validation message
    }
  }
  async function toggle(id: number) {
    await $fetch(`/api/todos/${id}/toggle`, { method: "PUT" });
    await load();
  }
  async function remove(id: number) {
    await $fetch(`/api/todos/${id}`, { method: "DELETE" });
    await load();
  }
  return { todos, error, load, add, toggle, remove };
});
