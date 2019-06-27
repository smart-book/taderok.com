package com.taderok.taderok.Controller;


import com.taderok.taderok.Entity.Ressources;
import com.taderok.taderok.Service.RessourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Ressources")
@RestController
public class RessourcesController {

    @Autowired
    private RessourcesService ressourcesService;

    List<String> files = new ArrayList<String>();

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

