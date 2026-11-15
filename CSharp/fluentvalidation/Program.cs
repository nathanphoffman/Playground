using FluentValidation;

var result = new UserValidator().Validate(new User("", 5));
foreach (var e in result.Errors)
    Console.WriteLine($"{e.PropertyName}: {e.ErrorMessage}");

record User(string Name, int Age);

class UserValidator : AbstractValidator<User>
{
    public UserValidator()
    {
        RuleFor(u => u.Name).NotEmpty();
        RuleFor(u => u.Age).GreaterThanOrEqualTo(18).WithMessage("Must be an adult");
    }
}
