package com.Time.Entity;

import org.springframework.stereotype.Repository;

import javax.persistence.*;

@Entity
@Repository
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Post post;
}
