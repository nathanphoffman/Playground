import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./generated/client.ts";

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: "file:./dev.db" }) });

await prisma.person.create({ data: { name: "Ada" } });
console.log(await prisma.person.findMany()); // type-safe, generated from schema.prisma
