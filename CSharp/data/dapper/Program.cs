using Dapper;
using Microsoft.Data.Sqlite;

// Dapper = a thin layer over ADO.NET: you write the SQL, it maps rows to objects. In-memory SQLite so it just runs.
using var conn = new SqliteConnection("Data Source=:memory:");
conn.Open();

conn.Execute("CREATE TABLE People (Id INTEGER PRIMARY KEY, Name TEXT, Age INT)");
conn.Execute("INSERT INTO People (Name, Age) VALUES (@Name, @Age)", new[] { new { Name = "Ada", Age = 36 }, new { Name = "Linus", Age = 55 } });

foreach (var p in conn.Query<Person>("SELECT * FROM People WHERE Age > @Min", new { Min = 40 }))
    Console.WriteLine($"{p.Id}: {p.Name} ({p.Age})");

// SQLite ints come back as long
record Person(long Id, string Name, long Age);
