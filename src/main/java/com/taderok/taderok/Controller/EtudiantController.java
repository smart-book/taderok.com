package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Service.EtudiantService;
import com.taderok.taderok.Service.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/etudiant")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;
    @Autowired
    private HelloResource helloResource;


    @RequestMapping("/findAll")
    public List<Etudiant> getAllEtudiants(){
        return etudiantService.getAllEtudiants();
    }

    @RequestMapping("/{id}")
    public Etudiant getEtudiant(@PathVariable Long id){
        return etudiantService.getEtudiant(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void update(@RequestBody Etudiant etudiant,@PathVariable Long id){
        etudiantService.updateEtudiant(etudiant,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteEtudiant(@PathVariable Long id)
    {
        etudiantService.deleteEtudiant(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addGroupe(@RequestBody Etudiant etudiant){

        etudiantService.addEtudiant(etudiant);
    }




}
