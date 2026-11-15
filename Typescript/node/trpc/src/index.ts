import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

const appRouter = t.router({
  hello: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => `Hello, ${input.name}`),
});
export type AppRouter = typeof appRouter; // a client imports only this TYPE and gets full autocomplete

// Call a procedure directly (no HTTP). Add an adapter (e.g. standalone/fastify) to expose it over the network.
const caller = t.createCallerFactory(appRouter)({});
console.log(await caller.hello({ name: "tRPC" }));
