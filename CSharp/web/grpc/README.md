# gRPC (C#)

**Run:** `dotnet run` (listens on `localhost:50052`, HTTP/2 without TLS). Call it from the Go client by changing its port, or from the Node client (`../../../Typescript/node/grpc`) with `GRPC_ADDR=localhost:50052`.

The `.proto` file is the same contract as the Go demo. `Grpc.Tools` generates the C# classes when you build.

**Try next:** Try a client project with `Grpc.Net.Client`, server streaming, and `grpcurl` to call it from the command line.
