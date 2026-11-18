import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const proto = grpc.loadPackageDefinition(protoLoader.loadSync("proto/hello.proto")) as any;

// Defaults to the Node server in this folder; point it at the Go (:50051) or C# (:50052) server to try them.
const client = new proto.hello.Greeter(process.env.GRPC_ADDR ?? "localhost:50053", grpc.credentials.createInsecure());
client.SayHello({ name: "Nate" }, (err: Error | null, reply: { message: string }) => {
  if (err) throw err;
  console.log(reply.message);
  client.close();
});
