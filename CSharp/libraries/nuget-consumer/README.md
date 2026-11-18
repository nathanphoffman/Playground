# NuGet: use a package

**Run:** First pack the library: `cd ../nuget-package && dotnet pack -c Release -o ../feed`. Then `dotnet run` here. `nuget.config` points at that local `feed` folder.

**Try next:** Try `dotnet add package` with a version, a private feed that needs credentials, and `dotnet list package --outdated`.
