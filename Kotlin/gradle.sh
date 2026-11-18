#!/usr/bin/env bash
# Runs Gradle inside Docker, since only a Java runtime (no JDK/Gradle/Kotlin) is installed locally.
# Usage: ./gradle.sh <project-dir> [-p <port>] <gradle args...>   e.g. ./gradle.sh ktor -p 8080 run
set -euo pipefail
dir="$1"; shift
ports=()
if [ "${1:-}" = "-p" ]; then ports=(-p "$2:$2"); shift 2; fi
mkdir -p "$HOME/.gradle-docker"
exec docker run --rm -u "$(id -u):$(id -g)" "${ports[@]}" \
  -e GRADLE_USER_HOME=/gradle-home -v "$HOME/.gradle-docker":/gradle-home \
  -v "$PWD/$dir":/app -w /app \
  gradle:jdk21 gradle --console=plain -q "$@"
