# aaPlayground

A personal sandbox for learning and experimenting with different programming languages. Nothing here is production code.

## Layout

Each language lives in its own folder:

| Folder | Language | Notes |
| --- | --- | --- |
| `Typescript/` | TypeScript | npm, vitest, eslint |
| `Rust/` | Rust | cargo; Tauri in `Rust/tauri/` |
| `Hare/` | Hare | `justfile` for build/run; includes local checkouts of `hare`, `harec`, `qbe` |
| `Mojo/` | Mojo | installed in a local `.venv` via `uv`; `just mojo` |
| `C/` | C | gcc; `just c` |
| `CSharp/` | C# | dotnet; `just csharp`. Demos are grouped in `web/`, `data/`, `cloud/`, `libraries/` and `testing/` |
| `Fortran/` | Fortran | gfortran; `just fortran` |
| `Go/` | Go | `just go` |
| `Flutter/` | Flutter (Dart) | needs the Flutter SDK (not installed) |
| `Deor/` | Deor | transpiles to Rust; `just deor` |
| `Rexx/` | Rexx | Regina interpreter (`sudo apt install regina-rexx`); `just rexx` |
| `Python/` | Python | python3; `just python`. FastAPI, Flask, Django and pandas are in sub-folders (uv) |
| `Zig/` | Zig | zig; `just zig` |
| `Java/` | Java | Only a Java runtime is installed locally, so Maven runs in Docker via `Java/mvn.sh`. Spring Boot, Spring Data JPA, JUnit/Mockito and Quarkus are in sub-folders |

| `HTML/`, `CSS/`, `JavaScript/` | Web basics | `CSS/` holds Bootstrap and Tailwind; `JavaScript/` holds jQuery |
| `SQL/`, `PHP/` | SQL, PHP | Databases and PHP run in Docker |
| `Redis/`, `MongoDB/`, `DynamoDB/` | NoSQL | Docker + a small TypeScript client |
| `Kafka/` | Event streaming | Docker + a small TypeScript client |
| `DevOps/`, `Cloud/` | Docker, Bash, CI/CD, Azure, AWS | Local emulators where possible |

More languages may be added over time.

## Frameworks and libraries

Anything that builds on a language lives inside that language's folder, and anything that builds on a framework lives inside the framework's folder
(e.g. `Typescript/react/redux/`). Each one is a tiny hello-world project with its own `README.md` saying how to run it and what to try next.
JS projects use **pnpm** (`pnpm install && pnpm dev`); the C# ones are plain `dotnet run` / `dotnet test`.
Demos that need an account or key (Mapbox, Stripe, Snowflake, Azure services) say so in their README.

## Running things

- **TypeScript:** `cd Typescript && npm install && npm test`
- **Rust:** `cd Rust && cargo run`
- **Hare:** `cd Hare && just run`
