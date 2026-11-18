import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun main() {
    // Ktor is built from small plugins; routing is a Kotlin DSL rather than annotations.
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        routing {
            get("/hello/{name}") {
                call.respondText("""{"message":"Hello, ${call.parameters["name"]}"}""")
            }
        }
    }.start(wait = true)
}
