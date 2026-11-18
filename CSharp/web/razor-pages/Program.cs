var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();

var app = builder.Build();
app.MapRazorPages(); // every .cshtml under Pages/ becomes a URL
app.Run();
