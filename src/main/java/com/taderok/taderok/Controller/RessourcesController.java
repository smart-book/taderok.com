package com.taderok.taderok.Controller;


import com.taderok.taderok.Entity.Ressources;
import com.taderok.taderok.Entity.Seance;
import com.taderok.taderok.Service.RessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Ressources")
@RestController
public class RessourcesController {

    @Autowired
    private RessourcesService ressourcesService;

    @RequestMapping(method = RequestMethod.POST, value = "/ajouterRessources/{id}")
    public void ajouterRessources(@PathVariable int id,@RequestBody Ressources ressources)
    {
         ressourcesService.ajouterRessources(id,ressources);
    }
    @RequestMapping(method = RequestMethod.GET,value = "/afficherRessources")
    public List<Ressources> afficherRessources()
    {
        return ressourcesService.getListRessources();
    }
    @RequestMapping(method = RequestMethod.GET,value = "/afficherRessourcesBySeance/{id}")
    public List<Ressources> afficherRessourcesBySeance(@PathVariable int id)
    {
        return ressourcesService.getListRessourceBySeance(id);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/afficherRessourcesByProf")
    public List<Ressources> afficherRessourcesByProf()
    {
        return ressourcesService.getListRessourceByProf();
    }

}
