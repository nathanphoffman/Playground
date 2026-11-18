# gRPC (Go)

**Run:** Two terminals: `go run ./server`, then `go run ./client Nate`. The generated code is already in `hellopb/`.

To regenerate it after editing `proto/hello.proto`: `./generate.sh` (uses Docker, since `protoc` isn't installed).

**Try next:** Try a streaming RPC (`returns (stream HelloReply)`), deadlines, and interceptors (gRPC's middleware). The C# (`../../CSharp/web/grpc`) and Node (`../../Typescript/node/grpc`) demos use the same contract, so they can call each other.
