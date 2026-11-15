import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";

createRoot(document.getElementById("root")!).render(<><h1>Hello, React Testing Library</h1><Counter /></>);
