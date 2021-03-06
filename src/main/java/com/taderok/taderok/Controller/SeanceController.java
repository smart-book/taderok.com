package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Seance;

import com.taderok.taderok.Service.SeanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/seance")
public class SeanceController {

    @Autowired
    private SeanceService seanceService;
    @Autowired
    private HelloResource helloResource;


    @RequestMapping("/findAll")
    public List<Seance> getAllGroupes(){
        return seanceService.getAllSeances();
    }

    @RequestMapping("/findAllByProf")
    public List<Seance> getAllSeancesByProf(){
        return seanceService.getAllSeancesByProf();
    }

    @RequestMapping("/findAllByStudent")
    public List<Seance> getAllSeancesByStudent(){
        return seanceService.getAllSeancesByStudent();
    }

    @RequestMapping("/{id}")
    public Seance getGroupe(@PathVariable Long id){
        return seanceService.getSeance(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public Seance update(@RequestBody Seance seance,@PathVariable Long id){
         return seanceService.updateSeance(seance,id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/update2/{id}")
    public Seance update2(@RequestBody String titre,@RequestBody String description,@PathVariable Long id){
        return seanceService.updateSeance2(titre, description,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void delete(@PathVariable Long id)
    {
        seanceService.deleteSeance(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addGroupe(@RequestBody Seance seance){

        seanceService.addSeance(seance);
    }




}
