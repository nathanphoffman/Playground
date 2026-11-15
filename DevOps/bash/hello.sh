#!/usr/bin/env bash
set -euo pipefail   # stop on errors, unset variables, and failed pipes

name="${1:-world}"
echo "Hello, $name"

# Loops, pipes, and text tools are the bread and butter:
for f in *.sh; do echo "script here: $f"; done
ls -1 | wc -l | xargs echo "files in this folder:"
