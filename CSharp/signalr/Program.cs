using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SignalR.Client;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
var app = builder.Build();
app.MapHub<ChatHub>("/chat");

app.Urls.Add("http://localhost:5060");
await app.StartAsync();

// A client in the same process, so the demo is self-contained. In real life this is a browser or another app.
var connection = new HubConnectionBuilder().WithUrl("http://localhost:5060/chat").Build();
var done = new TaskCompletionSource();
connection.On<string>("Message", m => { Console.WriteLine("Client got: " + m); done.SetResult(); });
await connection.StartAsync();
await connection.InvokeAsync("Send", "Hello, SignalR");
await done.Task;
await app.StopAsync();

class ChatHub : Hub
{
    public Task Send(string message) => Clients.All.SendAsync("Message", message); // pushes to every connected client
}
