import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

// The proto file is loaded at runtime, so no code generation step is needed (types are `any`).
const def = protoLoader.loadSync("proto/hello.proto");
const proto = grpc.loadPackageDefinition(def) as any;

const server = new grpc.Server();
server.addService(proto.hello.Greeter.service, {
  SayHello: (call: any, cb: any) => cb(null, { message: `Hello, ${call.request.name}` }),
});
server.bindAsync("0.0.0.0:50053", grpc.ServerCredentials.createInsecure(), () => console.log("gRPC server on :50053"));
