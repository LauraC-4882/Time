package com.Time.Entity;

import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.Set;

@Entity
@Repository
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    private String content;

    private boolean draft;

    @ManyToMany(mappedBy = "likedPosts")
    private Set<User> likedBy;
}
