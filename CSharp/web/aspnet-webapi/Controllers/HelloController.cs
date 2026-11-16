using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public string Get() => "Hello, ASP.NET Core Web API";

    [HttpGet("{name}")]
    public object GetByName(string name) => new { message = $"Hello, {name}" };
}
