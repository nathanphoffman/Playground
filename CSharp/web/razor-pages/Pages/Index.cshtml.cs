using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorPages.Pages;

// Each page pairs a .cshtml view with a PageModel class that holds its logic (no separate controller).
public class IndexModel : PageModel
{
    public DateTime Now { get; private set; }

    [BindProperty] public string? Name { get; set; }
    public string? Greeting { get; private set; }

    public void OnGet() => Now = DateTime.Now;

    public void OnPost()
    {
        Now = DateTime.Now;
        Greeting = $"Hello, {Name}";
    }
}
