import amqp from "amqplib";

const conn = await amqp.connect("amqp://guest:guest@localhost:5672");
const ch = await conn.createChannel();

// Producers send to a queue; the broker holds messages until a consumer takes and acknowledges them.
await ch.assertQueue("hello");
ch.sendToQueue("hello", Buffer.from("Hello, RabbitMQ"));

await ch.consume("hello", async (msg) => {
  if (!msg) return;
  console.log("received:", msg.content.toString());
  ch.ack(msg);
  await ch.close();
  await conn.close();
});
