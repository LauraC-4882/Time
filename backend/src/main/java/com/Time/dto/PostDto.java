package com.Time.dto;

import com.Time.module.User;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class PostDto {
    private User user;

    private String content;

    private boolean draft;

    private boolean anonymous;
    private boolean personal;
}
