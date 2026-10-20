# aaPlayground

A personal sandbox for learning and experimenting with different programming languages. Nothing here is production code.

## Layout

Each language lives in its own folder:

| Folder | Language | Notes |
| --- | --- | --- |
| `Typescript/` | TypeScript | npm, vitest, eslint |
| `Rust/` | Rust | cargo |
| `Hare/` | Hare | `justfile` for build/run; includes local checkouts of `hare`, `harec`, `qbe` |
| `Python/` | Python | (coming soon) |

More languages may be added over time.

## Running things

- **TypeScript:** `cd Typescript && npm install && npm test`
- **Rust:** `cd Rust && cargo run`
- **Hare:** `cd Hare && just run`
