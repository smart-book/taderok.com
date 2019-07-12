package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Service.PropositionService;
import com.taderok.taderok.Service.PropositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reponse")
public class PropositionController {

    @Autowired
    private PropositionService reponseService;

    @RequestMapping("/findAll")
    public List<Proposition> getAllReponses(){ return reponseService.getAllPropositions();
    }

    @RequestMapping("/{id}")
    public Proposition getReponse(@PathVariable int id)
    {
        return reponseService.getProposition(id);
    }












}
