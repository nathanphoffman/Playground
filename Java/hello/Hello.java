import java.util.List;

public class Hello {
    record Person(String name, int age) {}   // records are short immutable data classes

    public static void main(String[] args) {
        var people = List.of(new Person("Ada", 36), new Person("Linus", 28));
        people.stream()
            .filter(p -> p.age() > 30)
            .forEach(p -> System.out.println("Hello, " + p.name()));
    }
}
