package com.Time.controller;

import com.Time.dto.UserProfileDto;
import com.Time.module.User;
import com.Time.service.newPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class profileController {
    @Autowired
    private newPostService postService;

    @PostMapping("/Profile")
    public ResponseEntity<?> generateProfile(@RequestBody User user) throws Exception {
        UserProfileDto res = new UserProfileDto();
        res.setPosts(user.getPosts());
        res.setAvatar(user.getAvatar());
        res.setUsername(user.getUsername());
        res.setSignature(user.getSignature());
        res.setFollowers(user.getFollowers());
        res.setFollowing(user.getFollowing());
        res.setPhoneNumbers(user.getPhoneNumbers());
        return new ResponseEntity<>(res, HttpStatus.CREATED);

        //sda
    }


}
