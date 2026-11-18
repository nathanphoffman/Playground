using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Identity stores users, hashed passwords and roles in a database through EF Core.
builder.Services.AddDbContext<AppDb>(o => o.UseSqlite("Data Source=identity.db"));
builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddEntityFrameworkStores<AppDb>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
    scope.ServiceProvider.GetRequiredService<AppDb>().Database.EnsureCreated();

app.MapIdentityApi<IdentityUser>();   // adds /register, /login, /refresh, ... for free
app.MapGet("/", () => "Public: anyone can see this");
app.MapGet("/secret", (System.Security.Claims.ClaimsPrincipal user) => $"Hello, {user.Identity?.Name}. This is private.")
   .RequireAuthorization();           // 401 unless a valid bearer token is sent

app.Run();

class AppDb(DbContextOptions<AppDb> options) : IdentityDbContext<IdentityUser>(options);
