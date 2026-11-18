package playground.demo;

import java.security.Principal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/")
    public String home() { return "Public page"; }

    @GetMapping("/me")
    public String me(Principal user) { return "Hello, " + user.getName(); }

    @GetMapping("/admin")
    public String admin() { return "Admin area"; }
}
