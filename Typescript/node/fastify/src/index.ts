import Fastify from "fastify";

const app = Fastify();

app.get<{ Params: { name: string } }>("/hello/:name", (req) => ({ message: `Hello, ${req.params.name}` }));

await app.listen({ port: 3000 });
console.log("http://localhost:3000/hello/Nate");
