using Azure.Messaging.ServiceBus;

// Needs an Azure Service Bus namespace + a queue called "hello".
var cs = Environment.GetEnvironmentVariable("SERVICEBUS_CONNECTION") ?? throw new Exception("Set SERVICEBUS_CONNECTION");
await using var client = new ServiceBusClient(cs);

await client.CreateSender("hello").SendMessageAsync(new ServiceBusMessage("Hello, Service Bus"));

var message = await client.CreateReceiver("hello").ReceiveMessageAsync(TimeSpan.FromSeconds(5));
Console.WriteLine(message?.Body);
