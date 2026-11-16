using Snowflake.Data.Client;

// Needs a Snowflake account (free trial exists). Example: "account=xy12345;user=me;password=...;warehouse=COMPUTE_WH"
var cs = Environment.GetEnvironmentVariable("SNOWFLAKE_CONNECTION") ?? throw new Exception("Set SNOWFLAKE_CONNECTION");

using var conn = new SnowflakeDbConnection(cs);
await conn.OpenAsync();
using var cmd = conn.CreateCommand();
cmd.CommandText = "SELECT 'Hello, Snowflake'";
Console.WriteLine(await cmd.ExecuteScalarAsync());
