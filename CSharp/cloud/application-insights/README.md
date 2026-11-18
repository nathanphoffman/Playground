# Application Insights (Azure Monitor)

**Run:** `dotnet run` works without Azure (telemetry just isn't sent). To send it, create an Application Insights resource and set `APPLICATIONINSIGHTS_CONNECTION_STRING` first. Then call `/` and `/boom` a few times.

In the Azure portal, look at *Live Metrics*, *Failures* (the `/boom` exception) and *Logs* (KQL queries such as `requests | summarize count() by name`).

This uses the OpenTelemetry-based Azure Monitor package, which is the current recommended way. The older `Microsoft.ApplicationInsights` SDK still exists in legacy apps. For the vendor-neutral setup see `../../../Typescript/node/opentelemetry`.

**Try next:** Try custom metrics, a custom `Activity` span, sampling, and alerts on failed requests.
