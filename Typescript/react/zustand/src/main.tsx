import { create } from "zustand";
import { createRoot } from "react-dom/client";

const useCounter = create<{ count: number; inc: () => void }>((set) => ({
  count: 0,
  inc: () => { set((s) => ({ count: s.count + 1 })); },
}));

function Counter() {
  const { count, inc } = useCounter(); // no Provider, no reducers
  return <button onClick={inc}>Zustand count: {count}</button>;
}

createRoot(document.getElementById("root")!).render(<><h1>Hello, Zustand</h1><Counter /></>);
