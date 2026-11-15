import { XMLBuilder, XMLParser } from "fast-xml-parser";

const json = { user: { name: "Ada", langs: ["TS", "C#"] } };
console.log("JSON string:", JSON.stringify(json));

const xml = new XMLBuilder({ format: true }).build(json);
console.log("As XML:\n" + xml);

console.log("XML back to object:", new XMLParser().parse(xml));
