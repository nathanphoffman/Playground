package playground.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

// Spring writes the implementation. Method names like findByName become SQL queries.
public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByName(String name);
}
