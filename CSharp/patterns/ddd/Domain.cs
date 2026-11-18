// DOMAIN LAYER: pure business rules. No database, no web framework.

// Value object: no identity, compared by value, immutable. Two Money(10, "USD") are equal.
public record Money(decimal Amount, string Currency)
{
    public static Money Zero(string currency) => new(0, currency);

    public Money Add(Money other) =>
        other.Currency == Currency ? this with { Amount = Amount + other.Amount }
                                   : throw new InvalidOperationException("Currency mismatch");
}

public record OrderLine(string Product, int Quantity, Money UnitPrice)
{
    public Money Total => new(UnitPrice.Amount * Quantity, UnitPrice.Currency);
}

// A domain event states a fact that already happened, in the language of the business.
public record OrderPlaced(Guid OrderId, Money Total);

// Aggregate root: the only way in to the Order and its lines, so it can protect its own rules (invariants).
public class Order
{
    private readonly List<OrderLine> _lines = [];
    private readonly List<object> _events = [];

    public Guid Id { get; } = Guid.NewGuid();
    public bool IsPlaced { get; private set; }
    public IReadOnlyList<OrderLine> Lines => _lines;
    public IReadOnlyList<object> Events => _events;

    public void AddLine(string product, int quantity, Money unitPrice)
    {
        if (IsPlaced) throw new InvalidOperationException("A placed order can't be changed");
        if (quantity <= 0) throw new ArgumentOutOfRangeException(nameof(quantity));
        _lines.Add(new OrderLine(product, quantity, unitPrice));
    }

    public Money Total => _lines.Aggregate(Money.Zero("USD"), (sum, line) => sum.Add(line.Total));

    public void Place()
    {
        if (_lines.Count == 0) throw new InvalidOperationException("An order needs at least one line");
        IsPlaced = true;
        _events.Add(new OrderPlaced(Id, Total));
    }
}

// The domain defines WHAT it needs to store; infrastructure decides HOW.
public interface IOrderRepository
{
    void Save(Order order);
    Order? Find(Guid id);
}
