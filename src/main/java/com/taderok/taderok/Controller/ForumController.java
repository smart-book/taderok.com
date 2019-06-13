package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Repository.ForumRepository;
import com.taderok.taderok.Service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/forum")
public class ForumController {

    @Autowired
    private ForumService forumService;
    @Autowired
    private HelloResource helloResource;


    @RequestMapping("/findAll")
    public List<Forum> getAllForum(){
        return forumService.getAllForum();
    }

    @RequestMapping("/{id}")
    public Forum getForum(@PathVariable int id){
        return forumService.getForum(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void updateForum(@RequestBody Forum forum,@PathVariable int id)
    {
        forumService.updateForum(forum,id);
    }




    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addForum(@RequestBody Forum forum){

        forumService.addForum(forum);
    }




}
