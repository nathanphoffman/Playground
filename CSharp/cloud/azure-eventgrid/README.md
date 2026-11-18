# Azure Event Grid

**Run:** Set `EVENTGRID_ENDPOINT` and `EVENTGRID_KEY` (from an Event Grid custom topic), then `dotnet run`. Needs a real Azure topic, so this one only builds here.

**Event Grid vs Service Bus vs Event Hubs:** Event Grid announces that something *happened* (a blob was created) and fans out to subscribers. Service Bus is a reliable queue for commands/work. Event Hubs is a high-volume stream (like Kafka). See `../azure-servicebus` and `../azure-eventhubs`.

**Try next:** Add a subscription that triggers an Azure Function (`../azure-functions`), and filter events by `type`.
