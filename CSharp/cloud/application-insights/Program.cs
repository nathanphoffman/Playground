using Azure.Monitor.OpenTelemetry.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

// One line sends requests, dependencies, exceptions, logs and metrics to Application Insights (Azure Monitor).
// It needs a connection string, so we only turn it on when one is set.
var connectionString = Environment.GetEnvironmentVariable("APPLICATIONINSIGHTS_CONNECTION_STRING");
if (!string.IsNullOrEmpty(connectionString))
    builder.Services.AddOpenTelemetry().UseAzureMonitor();

var app = builder.Build();

app.MapGet("/", (ILogger<Program> log) =>
{
    log.LogInformation("Someone called the home page");   // shows up in the "traces" table
    return "Hello, Application Insights";
});

app.MapGet("/boom", () => { throw new InvalidOperationException("Test failure"); }); // shows up in "exceptions"

app.Run();
