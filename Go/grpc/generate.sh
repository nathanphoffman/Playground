#!/usr/bin/env bash
# Regenerates hellopb/ from proto/hello.proto. Uses Docker, because protoc isn't installed locally.
set -euo pipefail
docker run --rm -v "$PWD":/app -w /app golang:1.25 bash -c '
  apt-get update -qq && apt-get install -y -qq protobuf-compiler >/dev/null
  go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
  go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
  export PATH=$PATH:$(go env GOPATH)/bin
  mkdir -p hellopb
  protoc --go_out=hellopb --go_opt=paths=source_relative \
         --go-grpc_out=hellopb --go-grpc_opt=paths=source_relative \
         -I proto proto/hello.proto
  chown -R '"$(id -u):$(id -g)"' hellopb
'
