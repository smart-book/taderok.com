package com.taderok.taderok.Service;

import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Repository.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ForumService {


    @Autowired
    private ForumRepository forumRepository;

    public List<Forum> getAllForum(){
        List<Forum> forums = new ArrayList<>();
        forumRepository.findAll().forEach(forums::add);
        return forums;
    }

    public Forum getForum(int id){
        return forumRepository.findById(id).orElse(null);
    }

    public void addForum(Forum forum){
        forumRepository.save(forum);
    }

    public void updateForum(Forum forum){
        forumRepository.save(forum);
    }
}