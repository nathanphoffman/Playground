# Helm + Argo CD

**Run:** Needs no cluster to preview: `docker run --rm -v "$PWD":/w -w /w alpine/helm template demo hello --set replicas=3` prints the Kubernetes YAML the chart produces. To really deploy you need a cluster (see `../kubernetes`), then `helm install demo hello`.

`argocd-app.yaml` is an Argo CD `Application` that deploys the chart from git automatically. It needs Argo CD installed in the cluster.

**Try next:** Try adding a ConfigMap template, `helm upgrade --set image=nginx:latest`, and an Ingress toggled by a value.
