# Spring Boot

**Run:** From `Java/`: `./mvn.sh spring-boot -p 8080 spring-boot:run` (runs Maven in Docker), then `curl localhost:8080/hello/Nate`. Or `just spring-boot` from the repo root. Health check: http://localhost:8080/actuator/health

**Try next:** Try `@PostMapping` with a request body record, `application.properties` settings, and `@Service` classes injected into the controller. See `../spring-data-jpa` for a database.
