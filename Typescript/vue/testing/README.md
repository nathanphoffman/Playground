# Vue testing + accessibility (WCAG)

**Run:** `pnpm install && pnpm test`

- `Counter.test.ts`: component tests with **Vitest** and **Vue Test Utils** (mount a component, click, check output and emitted events).
- `a11y.test.ts`: automated accessibility checks with **axe-core** (via `vitest-axe`). One test passes on a properly labelled form; one proves axe catches an unlabelled input.

Automated tools catch roughly a third of WCAG issues, so still test with a keyboard and a screen reader.

**Try next:** Try `@axe-core/playwright` in a real browser (see `../../playwright`), Cypress component tests (see `../../react/cypress`), and testing a Pinia store (`../pinia`).
