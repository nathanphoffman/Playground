# NuGet: make a package

**Run:** `dotnet pack -c Release -o ../feed` writes `Playground.Greeter.1.0.0.nupkg` into a local folder (`../feed`) that acts as a NuGet feed. Then see `../nuget-consumer`.

**Try next:** Bump `<Version>` and pack again, add a `README` and icon to the package, and push to a real feed with `dotnet nuget push` (nuget.org or an Azure Artifacts feed).
