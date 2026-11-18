import { defineStore } from "pinia";
import { computed, ref } from "vue";

// A store is shared state any component can use. This one uses the "setup" style: it looks like a component's <script setup>.
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubled = computed(() => count.value * 2);
  const increment = () => count.value++;
  return { count, doubled, increment };
});
