import { useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => { setCount(count + 1); }}>Clicked {count} times</button>;
}

createRoot(document.getElementById("root")!).render(
  <>
    <h1>Hello, React + TypeScript</h1>
    <Counter />
  </>,
);
