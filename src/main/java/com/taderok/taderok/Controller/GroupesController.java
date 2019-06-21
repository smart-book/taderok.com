package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Service.ForumService;
import com.taderok.taderok.Service.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/groupe")
public class GroupesController {

    @Autowired
    private GroupeService groupeService;
    @Autowired
    private HelloResource helloResource;


    @RequestMapping("/findAll")
    public List<Groupes> getAllGroupes(){
        return groupeService.getAllGroupes();
    }

    @RequestMapping("/{id}")
    public Groupes getGroupe(@PathVariable int id){
        return groupeService.getGroupe(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void update(@RequestBody Groupes groupe,@PathVariable int id){
         groupeService.updateGroupe(groupe,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteGroupe(@PathVariable int id)
    {
        groupeService.deleteGroupe(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addGroupe(@RequestBody Groupes groupe){

        groupeService.addGroupe(groupe);
    }




}
