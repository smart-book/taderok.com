package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.CommentaireForum;
import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Repository.CommentaireForumRepository;
import com.taderok.taderok.Service.CommentaireForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentaireForumController {

    @Autowired
    private CommentaireForumService commentaireForumService;

    @RequestMapping(method = RequestMethod.POST, value = "/add/{id}")
    public void addComment(@RequestBody CommentaireForum cf, @PathVariable int id){
        commentaireForumService.addComment(cf,id);
    }

    @RequestMapping("/findAll/{id}")
    public List<CommentaireForum> getAllComment(@PathVariable int id) {
        return commentaireForumService.findAllComment(id);
    }
}
