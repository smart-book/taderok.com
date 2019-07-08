package com.taderok.taderok.Controller;

import com.taderok.taderok.Domain.Response;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Parent;
import com.taderok.taderok.Entity.Prof;
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
        user.setEnabled(true);
        User dbUser = userService.save(user);
        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("User is saved"), HttpStatus.OK);
        }
        return null;
    }

    @PostMapping(value = "/registerEtudiant")
    public ResponseEntity<Response> registrationEtudiant (@RequestBody Etudiant etudiant){
        etudiant.setEnabled(true);
        Etudiant dbUser = userService.registerEtudiant(etudiant);

        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("Etudiant is saved"), HttpStatus.OK);
        }
        return null;
    }

    @PostMapping(value = "/registerProf")
    public ResponseEntity<Response> registrationProf (@RequestBody Prof prof){
        prof.setEnabled(true);
        Prof dbUser = userService.registerProf(prof);
        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("Prof is saved"), HttpStatus.OK);
        }
        return null;
    }


    @PostMapping(value = "/registerParent")
    public ResponseEntity<Response> registrationParent (@RequestBody Parent parent){
        parent.setEnabled(true);
        Parent dbUser = userService.registerParent(parent);
        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("Parent is saved"), HttpStatus.OK);
        }
        return null;
    }


}
