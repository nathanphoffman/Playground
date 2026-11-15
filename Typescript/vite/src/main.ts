import { message } from "./message.ts";

document.getElementById("app")!.textContent = message; // edit message.ts while `pnpm dev` runs: instant HMR
