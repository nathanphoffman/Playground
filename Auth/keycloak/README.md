# Keycloak (OpenID Connect)

**Run:** `docker compose up -d`, wait ~30s for it to start, then `pnpm install && pnpm start`. The admin console is at http://localhost:8180 (`admin` / `admin`). The `playground` realm, a `playground-app` client and a user `nate` / `password` are imported from `realm.json`.

The script logs in, gets a signed JWT, and verifies it the way an API would.

**Try next:** Try the browser login flow (Authorization Code + PKCE) with a React app, protecting an Express or ASP.NET API by validating this token, and adding social login (Google/GitHub) in the admin console.
