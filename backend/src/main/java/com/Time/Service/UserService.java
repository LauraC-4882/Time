package com.Time.Service;

import com.Time.DTO.UserRegistrationDto;
import com.Time.Entity.User;
import com.Time.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;
    public User registerNewUserAccount(UserRegistrationDto registrationDto) throws Exception {

        if(usernameExist(registrationDto.getUsername())){
            throw new Exception("User exist");
        }

        User newUser = new User();

        newUser.setUsername(registrationDto.getUsername());
        newUser.setPhoneNumbers(registrationDto.getPhoneNumbers());
        newUser.setPassword(registrationDto.getPassword());
        newUser.setSignature(registrationDto.getSignature());

        return userRepository.save(newUser);
    }

    private boolean usernameExist(String username) {
        User user = userRepository.findByUsername(username);
        return user != null;
    }
}
