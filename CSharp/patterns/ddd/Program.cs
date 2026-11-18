// APPLICATION + INFRASTRUCTURE LAYERS
IOrderRepository repo = new InMemoryOrderRepository();
var id = new PlaceOrderService(repo).Execute("Keyboard", 2, 49.50m);
Console.WriteLine($"order {id} total: {repo.Find(id)!.Total}");

// The aggregate refuses to break its own rules:
try { repo.Find(id)!.AddLine("Mouse", 1, new Money(20, "USD")); }
catch (InvalidOperationException ex) { Console.WriteLine($"rejected: {ex.Message}"); }

// Infrastructure: an in-memory repository. Swap for EF Core (../../data/efcore) without touching the domain.
class InMemoryOrderRepository : IOrderRepository
{
    private readonly Dictionary<Guid, Order> _orders = [];
    public void Save(Order order) => _orders[order.Id] = order;
    public Order? Find(Guid id) => _orders.GetValueOrDefault(id);
}

// Application service: coordinates one use case, but contains no business rules itself.
class PlaceOrderService(IOrderRepository repo)
{
    public Guid Execute(string product, int quantity, decimal price)
    {
        var order = new Order();
        order.AddLine(product, quantity, new Money(price, "USD"));
        order.Place();
        repo.Save(order);
        foreach (var e in order.Events) Console.WriteLine($"event: {e}");   // normally published to a bus (MediatR, Service Bus...)
        return order.Id;
    }
}
