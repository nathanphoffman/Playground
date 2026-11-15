using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;
using System.Text;

// Needs an Azure Event Hubs namespace + an event hub called "hello".
var cs = Environment.GetEnvironmentVariable("EVENTHUB_CONNECTION") ?? throw new Exception("Set EVENTHUB_CONNECTION");
await using var producer = new EventHubProducerClient(cs, "hello");

using var batch = await producer.CreateBatchAsync();
batch.TryAdd(new EventData(Encoding.UTF8.GetBytes("Hello, Event Hubs")));
await producer.SendAsync(batch);
Console.WriteLine("Sent 1 event");
