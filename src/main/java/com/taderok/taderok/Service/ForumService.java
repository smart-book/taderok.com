package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.ForumRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ForumService {


    @Autowired
    private ForumRepository forumRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;


    public List<Forum> getAllForum(){
        return (List<Forum>) forumRepository.findAllByOrderByDateDesc();

    }

    public Forum getForum(int id){
        return forumRepository.findById(id).orElse(null);
    }

    public void addForum(Forum forum){
        User u = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        forum.setUser(u);
        forumRepository.save(forum);
    }

    public void updateForum(Forum forum,int id){
        Forum f = forumRepository.findById(id).orElse(null);
        f.setDate(forum.getDate());
        f.setDescription(forum.getDescription());
        f.setMatiere(forum.getMatiere());
        f.setNiveau(forum.getNiveau());
        f.setTitre(forum.getTitre());
        f.setUser(forum.getUser());
        forumRepository.save(f);
    }
    public void deleteForum(int id)
    {
        forumRepository.deleteById(id);
    }
}
