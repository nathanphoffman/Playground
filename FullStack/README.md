# Full stack: Nuxt + ASP.NET Core + SQL

A small todo app that ties the pieces together, like a typical job project:

```
Browser  ->  Nuxt (Vue + Pinia, server-rendered)  ->  /api proxy  ->  ASP.NET Core minimal API  ->  EF Core  ->  SQLite
```

**Run:** two terminals.
1. `cd api && dotnet run --urls http://localhost:5100`
2. `cd web && pnpm install && pnpm dev`, then open http://localhost:3000

- `api/`: REST endpoints (`GET/POST /api/todos`, `PUT /api/todos/{id}/toggle`, `DELETE /api/todos/{id}`) with validation (400 on an empty title).
- `web/`: Nuxt app with a Pinia store. `nuxt.config.ts` proxies `/api` to the .NET API so there's no CORS setup.

**Try next, matching the usual job requirements:**
- Swap SQLite for SQL Server (`../SQL/sqlserver`): add `Microsoft.EntityFrameworkCore.SqlServer` and `UseSqlServer`.
- Add login: validate Keycloak or Entra ID tokens in the API (`../Auth/keycloak`, `../CSharp/cloud/azure-ad`) and send the token from Nuxt.
- Add tests: Vitest for the store/components (`../Typescript/vue/testing`), xUnit and Testcontainers for the API (`../CSharp/testing`), Playwright for the whole flow (`../Typescript/playwright`).
- Deploy: container images (`../DevOps/docker`), AKS (`../Cloud/azure/aks`), pipeline (`../DevOps/azure-devops`).
