package com.Time.module;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Repository;
import java.util.Set;

@Entity
@Repository
@Setter
@Getter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    private String content;

    private boolean draft;

    private boolean anonymous;

    private boolean personal;

    @ManyToMany(mappedBy = "likedPosts")
    private Set<User> likedBy;
}
