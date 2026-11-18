# Domain-Driven Design (DDD)

**Run:** `dotnet run`

Shows the core building blocks in one small file set:
- **Value object** (`Money`): immutable, compared by value.
- **Aggregate root** (`Order`): the one class that guards the rules for itself and its lines.
- **Domain event** (`OrderPlaced`): a fact the business cares about.
- **Repository interface** in the domain, with the implementation outside it.
- **Application service** (`PlaceOrderService`): one use case, no business rules.

Because the domain has no dependencies, it's easy to unit test (see `../../testing/xunit-moq`).

**Try next:** Try a second aggregate (`Customer`), publishing events with MediatR (`../../libraries/mediatr`), and an EF Core repository (`../../data/efcore`).
