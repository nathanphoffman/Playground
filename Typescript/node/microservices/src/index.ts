// Two independent services talking over HTTP. In real life these are separate processes/containers.
import { createServer } from "node:http";

const inventory = createServer((_req, res) => { res.end(JSON.stringify({ item: "widget", inStock: 12 })); });
const orders = createServer((_req, res) => {
  void fetch("http://localhost:4001").then(async (r) => { res.end(`orders service saw: ${await r.text()}`); });
});

inventory.listen(4001);
orders.listen(4000, async () => {
  console.log(await (await fetch("http://localhost:4000")).text());
  orders.close();
  inventory.close();
});
