package com.taderok.taderok.Controller;

import com.taderok.taderok.Domain.Response;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.LoginDocs.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PreLoginController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/register")
    public ResponseEntity<Response> registration (@RequestBody User user){
        User dbUser = userService.save(user);
        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("User is saved"), HttpStatus.OK);
        }
        return null;
    }


}
