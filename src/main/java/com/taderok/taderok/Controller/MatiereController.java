package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Entity.Matiere;
import com.taderok.taderok.Service.GroupeService;
import com.taderok.taderok.Service.MatiereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/matiere")
public class MatiereController {

    @Autowired
    private MatiereService matiereService;



    @RequestMapping("/findAll")
    public List<Matiere> getAllGroupes(){
        return matiereService.getAllMatieres();
    }

    @RequestMapping("/{id}")
    public Matiere getMatiere(@PathVariable int id){
        return matiereService.getMatiere(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void update(@RequestBody Matiere matiere,@PathVariable int id){
        matiereService.updateMatiere(matiere,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteGroupe(@PathVariable int id)
    {
        matiereService.deleteMatiere(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addMatiere(@RequestBody Matiere matiere){

        matiereService.addMatiere(matiere);
    }




}
