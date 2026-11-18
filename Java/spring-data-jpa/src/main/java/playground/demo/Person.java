package playground.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity // Hibernate maps this class to a "person" table
public class Person {
    @Id @GeneratedValue
    private Long id;
    private String name;

    protected Person() {}
    public Person(String name) { this.name = name; }

    public Long getId() { return id; }
    public String getName() { return name; }
    @Override public String toString() { return "Person[id=" + id + ", name=" + name + "]"; }
}
