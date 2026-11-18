export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  modules: ["@pinia/nuxt"],
  // Forwards /api/* to the .NET API during development, so the browser sees one origin (no CORS setup needed).
  routeRules: { "/api/**": { proxy: "http://localhost:5100/api/**" } },
});
