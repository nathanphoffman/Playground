terraform {
  required_providers {
    azurerm = { source = "hashicorp/azurerm", version = "~> 4.0" }
  }
}

provider "azurerm" {
  features {}
  # subscription_id = "..."   # or set ARM_SUBSCRIPTION_ID
}

resource "azurerm_resource_group" "rg" {
  name     = "playground-aks-rg"
  location = "eastus"
}

# AKS = Azure Kubernetes Service. Azure runs the control plane; you only pay for the worker nodes.
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "playground-aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "playgroundaks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }
}

output "get_credentials" {
  value = "az aks get-credentials --resource-group ${azurerm_resource_group.rg.name} --name ${azurerm_kubernetes_cluster.aks.name}"
}
