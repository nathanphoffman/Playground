using Microsoft.Identity.Client;

// ADAL (Active Directory Authentication Library) is retired; MSAL is its replacement and is what you use today.
// Needs an app registration in Microsoft Entra ID (formerly Azure AD): tenant id, client id, client secret.
var tenant = Environment.GetEnvironmentVariable("AZURE_TENANT_ID") ?? throw new Exception("Set AZURE_TENANT_ID");
var clientId = Environment.GetEnvironmentVariable("AZURE_CLIENT_ID") ?? throw new Exception("Set AZURE_CLIENT_ID");
var secret = Environment.GetEnvironmentVariable("AZURE_CLIENT_SECRET") ?? throw new Exception("Set AZURE_CLIENT_SECRET");

var app = ConfidentialClientApplicationBuilder.Create(clientId)
    .WithClientSecret(secret)
    .WithAuthority($"https://login.microsoftonline.com/{tenant}")
    .Build();

var result = await app.AcquireTokenForClient(["https://graph.microsoft.com/.default"]).ExecuteAsync();
Console.WriteLine("Got a token that expires " + result.ExpiresOn);
