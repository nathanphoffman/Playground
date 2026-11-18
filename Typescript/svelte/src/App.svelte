<script lang="ts">
  // $state makes a value reactive; the template updates when it changes.
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<h1>Hello, Svelte</h1>
<button onclick={() => count++}>Clicked {count} times (doubled: {doubled})</button>
