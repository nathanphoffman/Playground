import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/hello/:name", (c) => c.json({ message: `Hello, ${c.req.param("name")}` }));

// The same app code runs on Node, Bun, Deno and Cloudflare Workers; only `serve` is Node-specific.
app.post("/echo", async (c) => c.json(await c.req.json()));

serve({ fetch: app.fetch, port: 3000 });
console.log("Hono listening on http://localhost:3000");
