package com.Time.Controller;

import com.Time.DTO.UserRegistrationDto;
import com.Time.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserRegistrationController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUserAccount(@RequestBody UserRegistrationDto registrationDto) throws Exception {
        userService.registerNewUserAccount(registrationDto);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }
}
