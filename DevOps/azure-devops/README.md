# Azure DevOps

**Run:** Needs an Azure DevOps organization. Push this repo, then Pipelines > New pipeline > Existing YAML file.

- `azure-pipelines.yml`: the smallest possible pipeline.
- `azure-pipelines-multistage.yml`: build and test, publish an artifact, then deploy to `dev` and `prod` environments. Shows NuGet restore, stages, and an approval gate.

TFS is the old on-premises name for Azure DevOps Server. The same YAML pipelines work there (older TFS versions used "XAML" or classic build definitions instead).

**Try next:** Try variable groups, a service connection, an Azure Artifacts NuGet feed, and a template file with `template:`.
