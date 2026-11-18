import { createRemoteJWKSet, jwtVerify } from "jose";

const issuer = "http://localhost:8180/realms/playground";

// 1. Log in: swap a username and password for a token. (Real apps redirect the browser to Keycloak instead.)
const res = await fetch(`${issuer}/protocol/openid-connect/token`, {
  method: "POST",
  body: new URLSearchParams({ grant_type: "password", client_id: "playground-app", username: "nate", password: "password" }),
});
if (!res.ok) throw new Error(`login failed: ${res.status} ${await res.text()}`);
const { access_token } = (await res.json()) as { access_token: string };

// 2. This is what a protected API does: check the token's signature against Keycloak's public keys.
const keys = createRemoteJWKSet(new URL(`${issuer}/protocol/openid-connect/certs`));
const { payload } = await jwtVerify(access_token, keys, { issuer });

console.log("token is valid for:", payload.preferred_username, "| roles:", (payload as any).realm_access?.roles);
