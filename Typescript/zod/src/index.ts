import { z } from "zod";

const User = z.object({ 
    name: z.string().min(1), 
    age: z.number().int().min(0) 
);


type User = z.infer<typeof User>; // the TypeScript type comes from the schema

const ok: User = User.parse({ name: "Ada", age: 36 });
console.log("valid:", ok);

const bad = User.safeParse({ name: "", age: "old" });
if (!bad.success) console.log("invalid:", bad.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`));






