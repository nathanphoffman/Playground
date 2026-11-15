terraform {
  required_providers {
    local = { source = "hashicorp/local" }
  }
}

# Terraform describes the END STATE; `apply` makes reality match. Here "reality" is just a file on disk.
resource "local_file" "hello" {
  filename = "${path.module}/hello.txt"
  content  = "Hello, Terraform"
}

output "path" {
  value = local_file.hello.filename
}
