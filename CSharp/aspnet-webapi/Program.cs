var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); // Swashbuckle: builds the OpenAPI document from your controllers

var app = builder.Build();

app.UseSwagger();   // serves /swagger/v1/swagger.json
app.UseSwaggerUI(); // serves the interactive page at /swagger

app.MapControllers();
app.Run();
