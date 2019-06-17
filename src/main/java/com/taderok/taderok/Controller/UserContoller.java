package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.*;
import com.taderok.taderok.Service.ForumService;
import com.taderok.taderok.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserContoller {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/register")
    public void addForum(@RequestBody User user){

        userService.registerUser(user);


    }
    @RequestMapping(method = RequestMethod.POST, value = "/registerEtudiant")
    public void addEtudiant(@RequestBody Etudiant etudiant){

        userService.registerEtudiant(etudiant);


    }

    @RequestMapping(method = RequestMethod.POST, value = "/registerProf")
    public void addProf(@RequestBody Prof prof){

        userService.registerProf(prof);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/registerParent")
    public void addParent(@RequestBody Parent parent){

        userService.registerParent(parent);


    }
    @RequestMapping(method = RequestMethod.PUT, value ="/desactiverCompte/{id}")
    public void desactiverCompte(@PathVariable int id )
    {
        userService.desactiverCompte(id);


    }
    @RequestMapping(method = RequestMethod.PUT, value ="/activerCompte/{id}")
    public void activerCompte(@PathVariable int id )
    {
        userService.activerCompte(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/affecterRole/{idUser}/{idRole}")
    public void affecterRole(@PathVariable int idUser,@PathVariable int idRole)
    {
        userService.affecterRole(idUser,idRole);

    }
    @RequestMapping(method = RequestMethod.GET ,value ="/afficherListId/{id}")
    public List<User> getAllUserById(@PathVariable int id){
        return userService.getAllUserById(id);
    }
    @RequestMapping(method = RequestMethod.GET ,value ="/afficherListRole/{role}")
    public List<User> getAllUserById(@PathVariable String role){
        return userService.getAllUserByRole(role);
    }
    @RequestMapping(method = RequestMethod.PUT, value="/update/{id}")
    public void updateUser(@RequestBody User user,@PathVariable int id)
    {
        userService.updateUser(user,id);
    }

}
