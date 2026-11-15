# Azure App Service (Web Apps)

Needs an Azure subscription. Using the Web API in `CSharp/aspnet-webapi`:

    az webapp up --name <unique-name> --runtime "DOTNETCORE:10.0" --sku F1

Azure Functions: `CSharp/azure-functions`. Service Bus / Event Hubs / Entra ID: `CSharp/azure-servicebus`, `azure-eventhubs`, `azure-ad`.
Azure DevOps pipelines: `DevOps/azure-devops`.
