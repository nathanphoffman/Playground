import { CreateTableCommand, DynamoDBClient, GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";

// Points at DynamoDB Local; the fake credentials are required by the SDK but not checked locally.
const db = new DynamoDBClient({ endpoint: "http://localhost:8000", region: "us-east-1", credentials: { accessKeyId: "x", secretAccessKey: "x" } });

await db.send(new CreateTableCommand({
  TableName: "People",
  AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
  BillingMode: "PAY_PER_REQUEST",
}));
await db.send(new PutItemCommand({ TableName: "People", Item: { id: { S: "1" }, name: { S: "Ada" } } }));
const out = await db.send(new GetItemCommand({ TableName: "People", Key: { id: { S: "1" } } }));
console.log(out.Item);
