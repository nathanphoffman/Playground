using CoreWCF;
using CoreWCF.Configuration;
using CoreWCF.Description;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddServiceModelServices().AddServiceModelMetadata();
builder.Services.AddSingleton<IServiceBehavior, UseRequestHeadersForMetadataAddressBehavior>();

var app = builder.Build();
app.UseServiceModel(sb =>
{
    sb.AddService<HelloService>();
    sb.AddServiceEndpoint<HelloService, IHelloService>(new BasicHttpBinding(), "/HelloService");
    app.Services.GetRequiredService<ServiceMetadataBehavior>().HttpGetEnabled = true; // WSDL at /HelloService?wsdl
});

app.Run("http://localhost:5050");

[ServiceContract]
public interface IHelloService
{
    [OperationContract]
    string SayHello(string name);
}

public class HelloService : IHelloService
{
    public string SayHello(string name) => $"Hello, {name} (via SOAP)";
}
