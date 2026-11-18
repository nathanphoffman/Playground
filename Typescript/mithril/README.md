# Mithril.js + Tailwind

**Run:** `pnpm install && pnpm dev`

Tailwind comes from the `@tailwindcss/vite` plugin and `@import "tailwindcss"` in `src/style.css`.
`src/main.ts` shows three ways to use it: selector-style classes (`m("h1.text-3xl.font-bold")`), a `class` string built from a variant, and small reusable components (`Button`, `Card`).

**Try next:** Try `m.route`, `m.request`, and stateful components. Add dark mode with the `dark:` classes.
