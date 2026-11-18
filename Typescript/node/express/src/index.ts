import express from "express";

const app = express();
app.use(express.json());

// Middleware runs on every request, in the order it is registered.
app.use((req, _res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}` });
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => console.log("Express listening on http://localhost:3000"));
