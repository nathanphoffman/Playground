using Amazon.Lambda.Core;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace AwsLambda;

public class Function
{
    // Handler string for AWS: AwsLambda::AwsLambda.Function::Handler
    public string Handler(string input, ILambdaContext context) => $"Hello, {input} from Lambda";
}
