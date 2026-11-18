import kotlinx.coroutines.async
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking

data class Person(val name: String, val age: Int)  // data classes give equals/toString/copy for free

suspend fun fetchGreeting(p: Person): String {
    delay(100)  // pretend this is a network call; `suspend` functions can pause without blocking a thread
    return "Hello, ${p.name}"
}

fun main() = runBlocking {
    val people = listOf(Person("Ada", 36), Person("Linus", 28), null)

    // null safety: the compiler forces you to handle `null` (the `?` types)
    people.filterNotNull().filter { it.age > 20 }
        .map { async { fetchGreeting(it) } }   // runs the "calls" concurrently
        .forEach { println(it.await()) }
}
