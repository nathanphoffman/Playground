using Azure;
using Azure.Messaging;
using Azure.Messaging.EventGrid;

// Needs an Event Grid custom topic that accepts the CloudEvents schema.
var endpoint = Environment.GetEnvironmentVariable("EVENTGRID_ENDPOINT") ?? throw new Exception("Set EVENTGRID_ENDPOINT");
var key = Environment.GetEnvironmentVariable("EVENTGRID_KEY") ?? throw new Exception("Set EVENTGRID_KEY");

var client = new EventGridPublisherClient(new Uri(endpoint), new AzureKeyCredential(key));

// CloudEvents is a standard envelope: who sent it (source), what happened (type), and the payload (data).
// Event Grid then pushes it to every subscriber (Functions, Service Bus, webhooks...). Unlike Service Bus, publishers don't know who listens.
var evt = new CloudEvent("/playground/demo", "Playground.Greeting", new { Message = "Hello, Event Grid" });
await client.SendEventAsync(evt);
Console.WriteLine("Event sent");
