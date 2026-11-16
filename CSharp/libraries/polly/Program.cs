using Polly;
using Polly.Retry;

var pipeline = new ResiliencePipelineBuilder()
    .AddRetry(new RetryStrategyOptions { MaxRetryAttempts = 3, Delay = TimeSpan.FromMilliseconds(200) })
    .Build();

var attempts = 0;
var result = await pipeline.ExecuteAsync(async _ =>
{
    attempts++;
    Console.WriteLine($"Attempt {attempts}");
    if (attempts < 3) throw new InvalidOperationException("flaky");
    return await ValueTask.FromResult("succeeded");
});

Console.WriteLine(result);
