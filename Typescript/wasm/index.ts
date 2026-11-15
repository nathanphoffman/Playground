// Build first: pnpm build   (compiles Rust -> pkg/*.wasm + JS glue)
import { add } from "./pkg/wasm_demo.js";

console.log("Rust says 2 + 3 =", add(2, 3));
