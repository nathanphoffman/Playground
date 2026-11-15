var app = WebApplication.CreateBuilder(args).Build();

app.MapGet("/", () => "Hello, Minimal API");
app.MapGet("/hello/{name}", (string name) => new { message = $"Hello, {name}" });
app.MapPost("/echo", (Echo e) => Results.Created($"/echo/{e.Text}", e));

app.Run();

record Echo(string Text);
