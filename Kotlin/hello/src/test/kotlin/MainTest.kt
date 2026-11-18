import kotlin.test.Test
import kotlin.test.assertEquals

class MainTest {
    @Test
    fun copyChangesOneField() = assertEquals(Person("Ada", 37), Person("Ada", 36).copy(age = 37))
}
