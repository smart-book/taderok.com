package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.CommentaireForum;
import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.CommentaireForumRepository;
import com.taderok.taderok.Repository.ForumRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentaireForumService {

    @Autowired
    private CommentaireForumRepository commentaireForumRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ForumRepository forumRepository;
    @Autowired
    private HelloResource helloResource;

    public void addComment(CommentaireForum commentaireForum,int id){
        User u = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        Forum f = forumRepository.findById(id).orElse(null);
        commentaireForum.setUser(u);
        commentaireForum.setForum(f);
        commentaireForumRepository.save(commentaireForum);
    }

    public List<CommentaireForum> findAllComment(int id){
        Forum f = forumRepository.findById(id).orElse(null);
        return commentaireForumRepository.findAllByForum(f);
    }
}
