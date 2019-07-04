package com.taderok.taderok.Controller;

import com.taderok.taderok.Domain.Response;
import com.taderok.taderok.Domain.UserDTO;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Parent;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.LoginDocs.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping(value = "/activate/{id}")
    public void activateUser(@PathVariable Long id){
        userService.activerCompte(id);
    }


    @PutMapping(value = "/desactivate/{id}")
    public void desactivateUser(@PathVariable Long id){
        userService.desactiverCompte(id);
    }

    @PutMapping(value = "/updateEtudiant/{id}")
    public void updateEtudiant(@PathVariable Long id, @RequestBody Etudiant etudiant){
        userService.updateEtudiant(id, etudiant);
    }
    @PutMapping(value = "/updateProf/{id}")
    public void updateProf(@PathVariable Long id, @RequestBody Prof prof){
        userService.updateProf(id, prof);
    }

    @PutMapping(value = "/updateParent/{id}")
    public void updateParent(@PathVariable Long id, @RequestBody Parent parent){
        userService.updateParent(id, parent);
    }

    @GetMapping(value = "/allUsers")
    public List<User> findallUsers(){
        return userService.findAll();
    }
    @GetMapping(value = "/allUsers/{role}")
    public List<User> findallUsers(@PathVariable String role){
        return userService.findAllByRole(role);
    }






}
