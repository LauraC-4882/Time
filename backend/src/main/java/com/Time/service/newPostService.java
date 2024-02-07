package com.Time.service;

import com.Time.Repository.PostRepository;
import com.Time.dto.PostDto;
import com.Time.module.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class newPostService {
    @Autowired
    private PostRepository postRepository;
    public Post newPost(PostDto postDto) throws Exception {
        Post newPost = new Post();
        newPost.setUser(postDto.getUser());
        newPost.setContent(postDto.getContent());
        newPost.setDraft(postDto.isDraft());
        newPost.setAnonymous(postDto.isAnonymous());
        newPost.setPersonal(postDto.isPersonal());
        return postRepository.save(newPost);
    }
}
