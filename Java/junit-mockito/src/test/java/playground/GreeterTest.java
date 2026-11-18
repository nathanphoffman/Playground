package playground;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class GreeterTest {
    @Mock NameRepository names;          // a fake NameRepository we control
    @InjectMocks Greeter greeter;        // Mockito passes the mock into the constructor

    @Test
    void greetsByName() {
        when(names.findName(1)).thenReturn("Ada");
        assertEquals("Hello, Ada", greeter.greet(1));
        verify(names).findName(1);       // check the dependency was called
    }

    @Test
    void unknownIdThrows() {
        assertThrows(IllegalArgumentException.class, () -> greeter.greet(99));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3})
    void parameterized(int id) {
        when(names.findName(id)).thenReturn("User" + id);
        assertEquals("Hello, User" + id, greeter.greet(id));
    }
}
