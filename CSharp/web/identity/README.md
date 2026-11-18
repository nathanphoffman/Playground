# ASP.NET Core Identity

**Run:** `dotnet run`, then (use the URL it prints, shown here as `$URL`):
```
curl -X POST $URL/register -H "Content-Type: application/json" -d '{"email":"nate@example.com","password":"Passw0rd!"}'
curl -X POST $URL/login    -H "Content-Type: application/json" -d '{"email":"nate@example.com","password":"Passw0rd!"}'   # returns an accessToken
curl $URL/secret -H "Authorization: Bearer <accessToken>"
```

**Try next:** Try roles (`.RequireAuthorization(p => p.RequireRole("Admin"))`), cookie login for MVC/Razor apps (`AddDefaultIdentity`), and external logins (Google). For a separate login server see `../../../Auth/keycloak`.
