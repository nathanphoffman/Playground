using Npgsql;
using Testcontainers.PostgreSql;

namespace TestcontainersDemo;

// Starts a REAL throwaway Postgres in Docker for the test, then removes it. Needs Docker running.
public class PostgresTests : IAsyncLifetime
{
    private readonly PostgreSqlContainer _db = new PostgreSqlBuilder("postgres:17-alpine").Build();

    public Task InitializeAsync() => _db.StartAsync();
    public Task DisposeAsync() => _db.DisposeAsync().AsTask();

    [Fact]
    public async Task Can_run_a_query()
    {
        await using var conn = new NpgsqlConnection(_db.GetConnectionString());
        await conn.OpenAsync();
        await using var cmd = new NpgsqlCommand("SELECT 1 + 1", conn);
        Assert.Equal(2, await cmd.ExecuteScalarAsync());
    }
}
