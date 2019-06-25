package com.taderok.taderok.Controller;

import com.taderok.taderok.Domain.Response;
import com.taderok.taderok.Domain.UserDTO;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.LoginDocs.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

import static com.taderok.taderok.Controller.AthenticationController.getConnectedUser;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllusers(){
        List<User> users = userService.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping(value = "/getuser")
    public ResponseEntity<User> getUser(){
        User user = getConnectedUser().getUser();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", getConnectedUser().getToken());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }



}
