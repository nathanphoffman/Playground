# Spring Security

**Run:** From `Java/`: `./mvn.sh spring-security -p 8080 spring-boot:run`, then:
```
curl localhost:8080/                      # public
curl localhost:8080/me                    # 401
curl -u nate:password localhost:8080/me   # 200
curl -u nate:password localhost:8080/admin   # 403 (wrong role)
curl -u admin:admin localhost:8080/admin     # 200
```

**Try next:** Try method security (`@PreAuthorize`), JWT resource-server mode (`spring-boot-starter-oauth2-resource-server`) against `../../Auth/keycloak`, and form login for browser apps.
