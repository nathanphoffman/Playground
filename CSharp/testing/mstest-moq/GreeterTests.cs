using Moq;

namespace Tests;

public interface IClock { DateTime Now { get; } }

public class Greeter(IClock clock)
{
    public string Greet() => clock.Now.Hour < 12 ? "Good morning" : "Good afternoon";
}

[TestClass]
public class GreeterTests
{
    [TestMethod]
    public void Greets_morning_when_clock_says_morning()
    {
        var clock = new Mock<IClock>();                         // Moq fakes the dependency
        clock.Setup(c => c.Now).Returns(new DateTime(2025, 1, 1, 9, 0, 0));

        Assert.AreEqual("Good morning", new Greeter(clock.Object).Greet());
    }
}
