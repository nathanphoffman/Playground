#!/usr/bin/env bash
# Runs Maven inside Docker, since only a Java runtime (no JDK/Maven) is installed locally.
# Usage: ./mvn.sh <project-dir> [-p <port>] <maven args...>   e.g. ./mvn.sh spring-boot -p 8080 spring-boot:run
set -euo pipefail
dir="$1"; shift
ports=()
if [ "${1:-}" = "-p" ]; then ports=(-p "$2:$2"); shift 2; fi
mkdir -p "$HOME/.m2"
exec docker run --rm -u "$(id -u):$(id -g)" "${ports[@]}" \
  -v "$HOME/.m2":/m2 -v "$PWD/$dir":/app -w /app \
  maven:3-eclipse-temurin-21 mvn -q -Dmaven.repo.local=/m2/repository "$@"
