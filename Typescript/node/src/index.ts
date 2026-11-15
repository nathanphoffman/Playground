import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "Hello from plain Node", url: req.url }));
});

server.listen(3000, () => { console.log("http://localhost:3000"); });
