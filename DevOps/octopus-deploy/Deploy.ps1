# Example of a custom "Run a Script" step in an Octopus deployment process.
# Octopus injects variables like $OctopusParameters["Octopus.Environment.Name"] and your own project variables.
$environment = $OctopusParameters["Octopus.Environment.Name"]
$release = $OctopusParameters["Octopus.Release.Number"]

Write-Host "Deploying release $release to $environment"
Write-Host "Connection string comes from a project variable scoped to the environment:"
Write-Host $OctopusParameters["ConnectionString"] -ForegroundColor DarkGray
