package com.taderok.taderok.Controller;

import com.taderok.taderok.Service.DemandeAmisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/demande")
public class DemandeAmisController {

    @Autowired
    private DemandeAmisService demandeAmisService;

    @RequestMapping(method = RequestMethod.POST, value = "/add/{idS}/{idR}")
    public void addDemande(@PathVariable long idS,@PathVariable long idR){
        demandeAmisService.ajouterAmis(idS, idR);
    }
}
