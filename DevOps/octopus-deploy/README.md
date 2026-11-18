# Octopus Deploy

**Run:** Needs an Octopus Deploy server (cloud trial or self-hosted) with a project named `Minimal API` and a `Dev` environment. I haven't been able to run this one here, so treat it as an example to adapt.

The idea: the build server (Azure DevOps) only builds and packages. Octopus owns *where* and *how* it gets deployed.
- `azure-pipelines.yml`: builds the app, zips it, uploads it to Octopus, and creates a release with the Octopus CLI.
- `Deploy.ps1`: a script you paste into a "Run a Script" step; shows environment-specific variables.

**Key Octopus ideas:** a *project* has a *deployment process* (steps), *environments* (Dev/Test/Prod), *variables* scoped per environment, and *releases* that get promoted from one environment to the next.

**Try next:** Try a Tentacle on a VM, a lifecycle with manual approvals, and "Config as Code" (storing the deployment process in git as `.ocl` files).
