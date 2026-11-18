#!/usr/bin/env bash
# Runs Ruby/Rails commands inside Docker, since Ruby isn't installed locally.
# Usage: ./rails.sh <dir> [-p <port>] <command...>   e.g. ./rails.sh rails -p 3000 bin/rails server -b 0.0.0.0
set -euo pipefail
dir="${1:-.}"; shift
ports=()
if [ "${1:-}" = "-p" ]; then ports=(-p "$2:$2"); shift 2; fi
mkdir -p "$HOME/.bundle-docker" "$PWD/$dir"
exec docker run --rm -u "$(id -u):$(id -g)" "${ports[@]}" \
  -e HOME=/tmp -e BUNDLE_PATH=/bundle -v "$HOME/.bundle-docker":/bundle \
  -v "$PWD/$dir":/app -w /app ruby:3 "$@"
