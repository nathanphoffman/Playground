using Grpc.Core;
using GrpcDemo;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddGrpc();
// gRPC needs HTTP/2. Without TLS (local dev) Kestrel must be told to use HTTP/2 only on this port.
builder.WebHost.ConfigureKestrel(o => o.ListenLocalhost(50052, l => l.Protocols = Microsoft.AspNetCore.Server.Kestrel.Core.HttpProtocols.Http2));

var app = builder.Build();
app.MapGrpcService<GreeterService>();
app.Run();

class GreeterService : Greeter.GreeterBase
{
    public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context) =>
        Task.FromResult(new HelloReply { Message = $"Hello, {request.Name}" });
}
