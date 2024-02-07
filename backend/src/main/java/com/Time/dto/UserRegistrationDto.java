package com.Time.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserRegistrationDto {
    private String username;
    private String password;
    private List<String> phoneNumbers;
    private String signature;
}
