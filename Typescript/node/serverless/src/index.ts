// A serverless function is just an exported handler. The cloud calls it per event; here we call it ourselves.
interface Event { name?: string }

export function handler(event: Event) {
  return { statusCode: 200, body: JSON.stringify({ message: `Hello, ${event.name ?? "world"}` }) };
}

console.log(handler({ name: "serverless" }));
