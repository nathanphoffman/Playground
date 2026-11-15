const server = Bun.serve({
  port: 3000,
  fetch: () => new Response("Hello from Bun"),
});

console.log(`http://localhost:${server.port}`);
