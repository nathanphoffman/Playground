using Stripe;

// Use a TEST key from https://dashboard.stripe.com/test/apikeys (starts with sk_test_)
StripeConfiguration.ApiKey = Environment.GetEnvironmentVariable("STRIPE_API_KEY") ?? throw new Exception("Set STRIPE_API_KEY");

var customer = await new CustomerService().CreateAsync(new CustomerCreateOptions { Email = "ada@example.com" });
Console.WriteLine("Created customer " + customer.Id);
