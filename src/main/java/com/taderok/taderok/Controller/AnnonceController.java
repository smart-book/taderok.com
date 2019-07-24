package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Annonce;
import com.taderok.taderok.Service.AnnonceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/annonce")
public class AnnonceController {

    @Autowired
    private AnnonceService annonceService;

    @RequestMapping(method = RequestMethod.GET,value = "/findAll")
    public List<Annonce> getAllAnnonce(){
        return annonceService.getAllAnnonce();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public long addAnnonce(@RequestBody Annonce annonce){
        annonceService.addAnnonce(annonce);
        return annonce.getId();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void updateAnnonce(@RequestBody Annonce annonce,@PathVariable long id){
        annonceService.modifierAnnonce(annonce,id);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/findOne/{id}")
    public Annonce getOneAnnonce(@PathVariable long id){
        return annonceService.getOneAnnonce(id);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/validate/{id}")
    public void validerAnnonce(@PathVariable long id){
        annonceService.validerAnnonce(id);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/archiver/{id}")
    public void archiverAnnonce(@PathVariable long id){
        annonceService.archiverAnnonce(id);
    }



}
