package com.taderok.taderok.Controller;


import com.taderok.taderok.Entity.BonneReponses;
import com.taderok.taderok.Service.BonneReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bonnereponse")
public class BonneReponseController {



@Autowired
private BonneReponseService bonneReponseService;


    @RequestMapping("/findAll")
    public List<BonneReponses> getAllBonneReponses(){ return bonneReponseService.getAllBonneReponses();
    }

    @RequestMapping("/{id}")
    public BonneReponses getBonneReponse(@PathVariable int id)
    {
        return bonneReponseService.getBonneReponse(id);
    }


}
