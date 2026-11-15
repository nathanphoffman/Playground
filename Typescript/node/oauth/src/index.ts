// OAuth 2.0 "client credentials" flow with a tiny fake authorization server, all in one file.
import { createServer } from "node:http";
import { jwtVerify, SignJWT } from "jose";

const key = new TextEncoder().encode("a-very-secret-key-for-demo-only-1234");

const authServer = createServer((req, res) => {
  void (async () => {
    if (req.url === "/token") {
      // A real server would check client_id / client_secret here.
      const token = await new SignJWT({ scope: "read" }).setProtectedHeader({ alg: "HS256" }).setExpirationTime("5m").sign(key);
      res.end(JSON.stringify({ access_token: token, token_type: "Bearer" }));
    } else {
      // "Resource server": only lets you in with a valid bearer token.
      try {
        await jwtVerify((req.headers.authorization ?? "").replace("Bearer ", ""), key);
        res.end(JSON.stringify({ secret: "the data you were protecting" }));
      } catch {
        res.statusCode = 401;
        res.end("unauthorized");
      }
    }
  })();
});

authServer.listen(3000, async () => {
  const { access_token } = (await (await fetch("http://localhost:3000/token", { method: "POST" })).json()) as { access_token: string };
  console.log("without token:", (await fetch("http://localhost:3000/api")).status);
  console.log("with token:", await (await fetch("http://localhost:3000/api", { headers: { Authorization: `Bearer ${access_token}` } })).text());
  authServer.close();
});
