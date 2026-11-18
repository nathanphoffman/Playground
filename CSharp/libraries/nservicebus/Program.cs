using NServiceBus;

var endpointConfiguration = new EndpointConfiguration("Demo");
endpointConfiguration.UseSerialization<SystemJsonSerializer>();

// The learning transport keeps messages in a local folder, so no broker is needed.
// Real systems use RabbitMQ, Azure Service Bus, SQL Server, etc.
endpointConfiguration.UseTransport<LearningTransport>().StorageDirectory(".learningtransport");

var endpoint = await Endpoint.Start(endpointConfiguration);

await endpoint.SendLocal(new SayHello("NServiceBus")); // a command: "do this"
await Task.Delay(2000); // give the handler time to run
await endpoint.Stop();

public class SayHello(string name) : ICommand
{
    public string Name { get; } = name;
}

// NServiceBus finds handlers automatically by their message type.
public class SayHelloHandler : IHandleMessages<SayHello>
{
    public Task Handle(SayHello message, IMessageHandlerContext context)
    {
        Console.WriteLine($"Hello, {message.Name}");
        return Task.CompletedTask;
    }
}
