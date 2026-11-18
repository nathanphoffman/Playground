using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// SQLite keeps this runnable anywhere. For SQL Server: add Microsoft.EntityFrameworkCore.SqlServer and use UseSqlServer(connectionString).
builder.Services.AddDbContext<TodoDb>(o => o.UseSqlite("Data Source=todos.db"));

var app = builder.Build();
using (var scope = app.Services.CreateScope())
    scope.ServiceProvider.GetRequiredService<TodoDb>().Database.EnsureCreated();

var todos = app.MapGroup("/api/todos");

todos.MapGet("/", (TodoDb db) => db.Todos.OrderBy(t => t.Id).ToListAsync());

todos.MapPost("/", async (NewTodo input, TodoDb db) =>
{
    if (string.IsNullOrWhiteSpace(input.Title)) return Results.BadRequest(new { error = "Title is required" });
    var todo = new Todo { Title = input.Title.Trim() };
    db.Todos.Add(todo);
    await db.SaveChangesAsync();
    return Results.Created($"/api/todos/{todo.Id}", todo);
});

todos.MapPut("/{id:int}/toggle", async (int id, TodoDb db) =>
{
    var todo = await db.Todos.FindAsync(id);
    if (todo is null) return Results.NotFound();
    todo.Done = !todo.Done;
    await db.SaveChangesAsync();
    return Results.Ok(todo);
});

todos.MapDelete("/{id:int}", async (int id, TodoDb db) =>
{
    var rows = await db.Todos.Where(t => t.Id == id).ExecuteDeleteAsync();
    return rows == 0 ? Results.NotFound() : Results.NoContent();
});

app.Run();

record NewTodo(string Title);

class Todo
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public bool Done { get; set; }
}

class TodoDb(DbContextOptions<TodoDb> options) : DbContext(options)
{
    public DbSet<Todo> Todos => Set<Todo>();
}
