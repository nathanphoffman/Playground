using Refit;

// Describe the API as an interface; Refit writes the HttpClient code. Needs internet.
var api = RestService.For<IJsonPlaceholder>("https://jsonplaceholder.typicode.com");
var todo = await api.GetTodo(1);
Console.WriteLine(todo.Title);

interface IJsonPlaceholder
{
    [Get("/todos/{id}")]
    Task<Todo> GetTodo(int id);
}

record Todo(int Id, string Title);
