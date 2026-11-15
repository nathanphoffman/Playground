import axios from "axios";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Todo() {
  const [title, setTitle] = useState("loading...");
  useEffect(() => {
    void axios.get<{ title: string }>("https://jsonplaceholder.typicode.com/todos/1").then((r) => { setTitle(r.data.title); });
  }, []);
  return <p>{title}</p>;
}

createRoot(document.getElementById("root")!).render(<><h1>Hello, Axios</h1><Todo /></>);
