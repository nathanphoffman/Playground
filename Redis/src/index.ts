import { createClient } from "redis";

const client = createClient(); // localhost:6379
await client.connect();

await client.set("greeting", "Hello, Redis");
await client.expire("greeting", 60); // keys can expire - a big reason to use Redis as a cache
console.log(await client.get("greeting"));

await client.quit();
