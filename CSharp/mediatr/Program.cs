using MediatR;
using Microsoft.Extensions.DependencyInjection;

var services = new ServiceCollection();
services.AddMediatR(c => c.RegisterServicesFromAssemblyContaining<Ping>());
var mediator = services.BuildServiceProvider().GetRequiredService<IMediator>();

// The caller knows only the request; MediatR finds the handler.
Console.WriteLine(await mediator.Send(new Ping("MediatR")));

record Ping(string Name) : IRequest<string>;

class PingHandler : IRequestHandler<Ping, string>
{
    public Task<string> Handle(Ping request, CancellationToken ct) => Task.FromResult($"Hello, {request.Name}");
}
