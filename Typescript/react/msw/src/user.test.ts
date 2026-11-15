import { setupServer } from "msw/node";
import { afterAll, beforeAll, expect, test } from "vitest";
import { handlers } from "./handlers";

const server = setupServer(...handlers);
beforeAll(() => { server.listen(); });
afterAll(() => { server.close(); });

test("fetch is intercepted by MSW", async () => {
  const res = await fetch("https://api.example.com/user");
  expect(await res.json()).toEqual({ name: "Mocked User" });
});
