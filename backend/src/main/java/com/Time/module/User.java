package com.Time.module;

import jakarta.persistence.*;
import java.util.List;
import java.util.Set;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    @ElementCollection
    private List<String> phoneNumbers;

    private String signature;

    @Lob
    private byte[] avatar; // Or String for a URL to the image

//    @OneToMany(mappedBy = "user")
//    private Set<Post> posts;

    @ManyToMany
    @JoinTable(name = "user_followers",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "follower_id"))
    private Set<User> followers;

    @ManyToMany(mappedBy = "followers")
    private Set<User> following;
}

