# Elastic Beanstalk

Beanstalk runs your web app on EC2 without you managing servers. Needs a real AWS account.
Try with the Web API in `CSharp/aspnet-webapi`: `dotnet publish -c Release`, zip the output, then
`eb init && eb create && eb deploy` (EB CLI). Lambda: see `CSharp/aws-lambda`. SQS/Secrets/DynamoDB: see `CSharp/aws-sdk`.
