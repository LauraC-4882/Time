package com.Time;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
//@EnableJpaRepositories
public class SBstarterApplication {

    public static void main(String[] args) {
        SpringApplication.run(SBstarterApplication.class, args);
    }
}
