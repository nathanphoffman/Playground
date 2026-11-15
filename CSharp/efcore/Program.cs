using Microsoft.EntityFrameworkCore;

// Needs Postgres running: cd ../../SQL/postgres && docker compose up -d
using var db = new AppDb();
await db.Database.EnsureCreatedAsync(); // for real projects you'd use migrations (dotnet ef)

db.Todos.Add(new Todo { Title = "Learn EF Core" });
await db.SaveChangesAsync();

foreach (var t in await db.Todos.Where(t => !t.Done).ToListAsync())
    Console.WriteLine($"{t.Id}: {t.Title}");

class Todo
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public bool Done { get; set; }
}

class AppDb : DbContext
{
    public DbSet<Todo> Todos => Set<Todo>();

    protected override void OnConfiguring(DbContextOptionsBuilder o) =>
        o.UseNpgsql("Host=localhost;Port=5433;Database=playground;Username=postgres;Password=postgres");
}
