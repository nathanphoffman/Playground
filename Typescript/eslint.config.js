import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["**/node_modules", "eslint.config.js", "react/**", "vue/**", "astro/**", "mithril/**", "node/**", "bun/**", "webpack/**", "gulp/**", "jest/**", "mocha-chai/**", "puppeteer/**", "eslint-prettier/**", "wasm/**", "electron/**", "Kafka/**", "playwright/**", "zod/**", "vite/**", "vitest/**"] },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
  },
);
