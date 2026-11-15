import express from "express";

const app = express();
app.use(express.json());

interface Todo { id: number; title: string }
const todos: Todo[] = [{ id: 1, title: "Learn REST" }];

app.get("/todos", (_req, res) => { res.json(todos); });
app.post("/todos", (req, res) => {
  const todo: Todo = { id: todos.length + 1, title: (req.body as { title: string }).title };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => { console.log("http://localhost:3000/todos"); });
