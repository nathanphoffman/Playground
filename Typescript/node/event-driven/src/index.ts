// Publishers and subscribers only know about the event, not about each other.
// Swap the EventEmitter for SQS / Service Bus / Kafka and the shape stays the same.
import { EventEmitter } from "node:events";

const bus = new EventEmitter();

bus.on("order.placed", (id: number) => { console.log(`billing: charging order ${id}`); });
bus.on("order.placed", (id: number) => { console.log(`shipping: packing order ${id}`); });

bus.emit("order.placed", 42);
