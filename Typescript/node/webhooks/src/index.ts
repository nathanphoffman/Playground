import { createHmac, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";

const SECRET = "shhh";

const server = createServer((req, res) => {
  let body = "";
  req.on("data", (c: Buffer) => { body += c.toString(); });
  req.on("end", () => {
    const expected = createHmac("sha256", SECRET).update(body).digest("hex");
    const given = String(req.headers["x-signature"] ?? "");
    const ok = given.length === expected.length && timingSafeEqual(Buffer.from(given), Buffer.from(expected));
    console.log(ok ? `verified webhook: ${body}` : "rejected webhook");
    res.statusCode = ok ? 200 : 401;
    res.end();
  });
});

// Play the role of the sender (e.g. Stripe/GitHub) so this demo is self-contained.
server.listen(3000, async () => {
  const payload = JSON.stringify({ event: "ping" });
  const signature = createHmac("sha256", SECRET).update(payload).digest("hex");
  await fetch("http://localhost:3000", { method: "POST", body: payload, headers: { "x-signature": signature } });
  await fetch("http://localhost:3000", { method: "POST", body: payload, headers: { "x-signature": "bad" } });
  server.close();
});
