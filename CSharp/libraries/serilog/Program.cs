using Serilog;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .CreateLogger();

var user = new { Name = "Ada", Id = 7 };
Log.Information("Hello, Serilog. Structured value: {@User}", user); // {@} keeps the object's properties
Log.Warning("Something looks off for {UserId}", user.Id);

await Log.CloseAndFlushAsync();
