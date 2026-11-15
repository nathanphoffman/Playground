import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const people = sqliteTable("people", { id: integer().primaryKey(), name: text().notNull() });

const client = createClient({ url: ":memory:" }); // swap for Postgres to match the rest of the playground
await client.execute("CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");

const db = drizzle(client);
await db.insert(people).values({ name: "Ada" });
console.log(await db.select().from(people)); // type-safe query builder
