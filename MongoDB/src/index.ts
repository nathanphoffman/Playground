import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
const people = client.db("playground").collection("people");

await people.deleteMany({});
await people.insertOne({ name: "Ada", langs: ["TS", "C#"] }); // documents: no schema needed
console.log(await people.find({ langs: "TS" }).toArray());

await client.close();
