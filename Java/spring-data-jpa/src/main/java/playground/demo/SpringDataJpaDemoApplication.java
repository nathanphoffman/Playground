package playground.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringDataJpaDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaDemoApplication.class, args);
    }

    @Bean
    CommandLineRunner demo(PersonRepository repo) {
        return args -> {
            repo.save(new Person("Ada"));
            System.out.println("FOUND: " + repo.findByName("Ada"));
        };
    }
}
