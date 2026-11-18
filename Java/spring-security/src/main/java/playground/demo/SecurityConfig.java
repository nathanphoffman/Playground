package playground.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    SecurityFilterChain filters(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(a -> a
                .requestMatchers("/").permitAll()               // public
                .requestMatchers("/admin").hasRole("ADMIN")     // only users with the ADMIN role
                .anyRequest().authenticated())                  // everything else needs a login
            .httpBasic(Customizer.withDefaults())               // username/password in the Authorization header
            .csrf(c -> c.disable());                            // fine for this API demo; keep it on for browser forms
        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder(); // stores passwords hashed (bcrypt)
    }

    @Bean
    UserDetailsService users(PasswordEncoder encoder) {
        return new InMemoryUserDetailsManager(   // swap for a database-backed one in real apps
            User.withUsername("nate").password(encoder.encode("password")).roles("USER").build(),
            User.withUsername("admin").password(encoder.encode("admin")).roles("USER", "ADMIN").build());
    }
}
