using Amazon.Runtime;
using Amazon.SecretsManager;
using Amazon.SecretsManager.Model;
using Amazon.SQS;

// Talks to LocalStack (fake AWS on your machine): cd ../../Cloud/aws && docker compose up -d
// For real AWS, remove ServiceURL and use real credentials.
var creds = new BasicAWSCredentials("test", "test");

var sqs = new AmazonSQSClient(creds, new AmazonSQSConfig { ServiceURL = "http://localhost:4566" });
var queueUrl = (await sqs.CreateQueueAsync("hello-queue")).QueueUrl;
await sqs.SendMessageAsync(queueUrl, "Hello, SQS");
var received = await sqs.ReceiveMessageAsync(queueUrl);
Console.WriteLine("SQS: " + received.Messages?.FirstOrDefault()?.Body);

var secrets = new AmazonSecretsManagerClient(creds, new AmazonSecretsManagerConfig { ServiceURL = "http://localhost:4566" });
await secrets.CreateSecretAsync(new CreateSecretRequest { Name = "my-secret", SecretString = "shh" });
Console.WriteLine("Secret: " + (await secrets.GetSecretValueAsync(new GetSecretValueRequest { SecretId = "my-secret" })).SecretString);
// DynamoDB: see ../../DynamoDB for a working example.
