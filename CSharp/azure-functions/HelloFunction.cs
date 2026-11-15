using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;

namespace AzureFunctions;

public class HelloFunction
{
    // Run with: func start   (Azure Functions Core Tools) -> http://localhost:7071/api/hello
    [Function("Hello")]
    public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "hello")] HttpRequestData req)
    {
        var res = req.CreateResponse(System.Net.HttpStatusCode.OK);
        await res.WriteStringAsync("Hello from Azure Functions");
        return res;
    }
}
