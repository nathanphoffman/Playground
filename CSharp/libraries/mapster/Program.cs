using Mapster;

var user = new User { Id = 1, Name = "Ada", PasswordHash = "secret" };

var dto = user.Adapt<UserDto>(); // same-named properties are copied, no config needed
Console.WriteLine($"{dto.Id}: {dto.Name}");

class User { public int Id { get; set; } public string Name { get; set; } = ""; public string PasswordHash { get; set; } = ""; }
class UserDto { public int Id { get; set; } public string Name { get; set; } = ""; }
