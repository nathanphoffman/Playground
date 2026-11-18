# Azure Kubernetes Service (AKS)

**Run:** Needs an Azure subscription (and it costs money while it runs). Terraform isn't installed locally; run it in Docker (see `../../../DevOps/terraform/justfile`) or install it:
```
az login
terraform init && terraform apply
$(terraform output -raw get_credentials) # points kubectl at the new cluster
kubectl apply -f k8s/hello.yaml
kubectl get service hello --watch        # wait for an EXTERNAL-IP, then open it
terraform destroy                        # don't forget this, or the cluster keeps billing
```
`main.tf` was checked with `terraform validate` but not applied here.

**Migration notes:** Typical path for moving an app to AKS: containerize it (`../../../DevOps/docker`), push the image to Azure Container Registry, deploy with a manifest or Helm chart (`../../../DevOps/helm-argocd`), and let a pipeline do it (`../../../DevOps/azure-devops`). Use Entra Workload Identity so pods authenticate to Azure without passwords.

**Try next:** Try an ACR (`azurerm_container_registry`) attached to the cluster, an ingress controller, and the cluster autoscaler.
