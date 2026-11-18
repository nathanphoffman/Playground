# Quarkus

**Run:** From `Java/`: `./mvn.sh quarkus -p 8080 quarkus:dev -Dquarkus.http.host=0.0.0.0 -Dquarkus.console.enabled=false`, then `curl localhost:8080/hello/Nate`. In dev mode, edit a file and the next request picks up the change with no restart.

**Try next:** Try Dev Services (add a database extension and Quarkus starts one in Docker for you), `@QuarkusTest`, and a native build with GraalVM. Compare startup time with `../spring-boot`.
