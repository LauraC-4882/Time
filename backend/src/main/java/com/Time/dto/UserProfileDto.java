package com.Time.dto;

import java.util.List;
import java.util.Set;
import com.Time.module.Post;
import com.Time.module.User;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserProfileDto {
    private String username;
    private List<String> phoneNumbers;
    private String signature;
    private byte[] avatar;
    private Set<Post> posts;
    private Set<User> followers;
    private Set<User> following;
}
