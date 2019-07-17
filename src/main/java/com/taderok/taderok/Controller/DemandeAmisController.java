package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.DemandeAmis;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Service.DemandeAmisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/demande")
public class DemandeAmisController {

    @Autowired
    private DemandeAmisService demandeAmisService;

    @RequestMapping(method = RequestMethod.POST, value = "/add/{idR}")
    public void addDemande(@PathVariable long idR){
        demandeAmisService.ajouterAmis(idR);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/received")
    public List<DemandeAmis> userIsReceiver(){
        return demandeAmisService.userIsReceiver();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/sent")
    public List<DemandeAmis> userIsSender(){
        return demandeAmisService.userIsSender();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/accepter/{id}")
    public void accepter(@PathVariable long id){
        demandeAmisService.accepterDemande(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/refuser/{id}")
    public void refuser(@PathVariable long id){
        demandeAmisService.refuserDemande(id);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/friends")
    public List<User> getFriends(){
       return demandeAmisService.getAllFriends();
    }

}
