var people = new[]
{
    new Person("Ada", 36, "UK"),
    new Person("Linus", 55, "FI"),
    new Person("Grace", 85, "US"),
    new Person("Alan", 41, "UK"),
};

// Method syntax
var uk = people.Where(p => p.Country == "UK").OrderBy(p => p.Age).Select(p => p.Name);
Console.WriteLine("UK people by age: " + string.Join(", ", uk));

// Query syntax (same thing, SQL-like)
var older = from p in people where p.Age > 40 select p.Name;
Console.WriteLine("Over 40: " + string.Join(", ", older));

// Grouping
foreach (var g in people.GroupBy(p => p.Country))
    Console.WriteLine($"{g.Key}: {g.Count()}");

record Person(string Name, int Age, string Country);
