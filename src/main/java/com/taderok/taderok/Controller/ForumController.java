package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Forum;
import com.taderok.taderok.Repository.ForumRepository;
import com.taderok.taderok.Service.ForumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/forum")
public class ForumController {

    @Autowired
    private ForumService forumService;

    @GetMapping("/findAll")
    @ResponseBody
    public List<Forum> getAllForum(){
        return forumService.getAllForum();
    }



}
