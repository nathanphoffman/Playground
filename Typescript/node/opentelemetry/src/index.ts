import { trace } from "@opentelemetry/api";
import { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";

// Where spans go: here, the console. In real life an OTLP exporter sends them to Jaeger, Grafana, Azure Monitor, etc.
const provider = new BasicTracerProvider({ spanProcessors: [new SimpleSpanProcessor(new ConsoleSpanExporter())] });
trace.setGlobalTracerProvider(provider);

const tracer = trace.getTracer("playground");

tracer.startActiveSpan("handle-request", (parent) => {
  tracer.startActiveSpan("query-database", (child) => { // nested spans form a trace tree
    child.setAttribute("db.system", "postgresql");
    child.end();
  });
  parent.end();
});

await provider.shutdown();
