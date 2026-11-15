import { Kafka } from "kafkajs";

const kafka = new Kafka({ clientId: "playground", brokers: ["localhost:9092"] });

// Producers write to a topic; consumers in a group read from it. The broker keeps the log.
const admin = kafka.admin();
await admin.connect();
await admin.createTopics({ topics: [{ topic: "hello" }] });
await admin.disconnect();

const producer = kafka.producer();
await producer.connect();
await producer.send({ topic: "hello", messages: [{ value: "Hello, Kafka" }] });
await producer.disconnect();

const consumer = kafka.consumer({ groupId: "demo" });
await consumer.connect();
await consumer.subscribe({ topic: "hello", fromBeginning: true });
await consumer.run({
  eachMessage: async ({ message }) => {
    console.log("received:", message.value?.toString());
    await consumer.disconnect();
    process.exit(0);
  },
});
