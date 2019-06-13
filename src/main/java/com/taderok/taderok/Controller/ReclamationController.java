package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Service.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReclamationController {

    @Autowired
    ReclamationService reclamationService;

    @RequestMapping(method = RequestMethod.POST, value = "/ajoutReclamation")
    public Reclamation ajouterReclamation(@RequestBody Reclamation req){
        return reclamationService.ajouter(req);
    }
    @RequestMapping("/Reclamations")
    public List<Reclamation> getAllReclamation(){
        return reclamationService.getAllReclamation();
    }
}
