<script lang="ts">
  let { children } = $props();
</script>

<nav><a href="/">Home</a> | <a href="/hello/Nate">Hello, Nate</a></nav>
{@render children()}
