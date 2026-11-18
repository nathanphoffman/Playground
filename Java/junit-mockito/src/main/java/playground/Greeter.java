package playground;

public class Greeter {
    private final NameRepository names;

    public Greeter(NameRepository names) { this.names = names; }

    public String greet(int id) {
        String name = names.findName(id);
        if (name == null) throw new IllegalArgumentException("unknown id " + id);
        return "Hello, " + name;
    }
}
