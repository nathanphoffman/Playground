using Hangfire;
using Hangfire.InMemory;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHangfire(c => c.UseInMemoryStorage()); // use SQL Server/Postgres storage in real life
builder.Services.AddHangfireServer();

var app = builder.Build();

app.UseHangfireDashboard("/hangfire"); // open /hangfire to watch jobs
BackgroundJob.Enqueue(() => Console.WriteLine("Hello from a Hangfire background job"));
RecurringJob.AddOrUpdate("tick", () => Console.WriteLine("tick (recurring)"), Cron.Minutely);

app.MapGet("/", () => "Hangfire is running. See /hangfire");
app.Run();
