package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Service.AdminServices.ReclamationAdminService;
import com.taderok.taderok.Service.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Reclamation")
public class ReclamationController {

    @Autowired
    ReclamationService reclamationService;

    @Autowired
    ReclamationAdminService reclamationAdminService;

    @RequestMapping(method = RequestMethod.POST, value = "/ajoutReclamation")
    public Reclamation ajouterReclamation(@RequestBody Reclamation req)
    {
        return reclamationService.ajouterReclamation(req);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/modifierReclamation/{id}")
    public Reclamation modifierReclamation (@RequestBody Reclamation req,@PathVariable("id") int id)
    {
        return reclamationService.modifierReclamation(req,id);
    }

    @RequestMapping("/Admin/Reclamations")
    public List<Reclamation> getAllReclamation()
    {
        return reclamationAdminService.getAllReclamation();
    }

    @RequestMapping("/Admin/ReclamationsNonTraite")
    public List<Reclamation> AfficherReclamationNontraite()
    {
        return reclamationAdminService.AfficherReclamationNontraite();
    }

    @RequestMapping(method = RequestMethod.GET, value ="/ReclamationsUser")
    public List<Reclamation> AfficherReclamationUser()
    {
        return reclamationService.AfficherReclamationUser();
    }

    @RequestMapping("/Admin/ReclamationsTraite")
    public List<Reclamation> AfficherReclamationTraite()
    {
        return reclamationAdminService.AfficherReclamationTraite();
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/Admin/TraiterReclamation/{id}")
    public Reclamation traiterReclamation(@PathVariable("id") int id)
    {
        return reclamationAdminService.traiterReclamation(id);
    }

    //@RequestMapping("/Admin/AfficherReclamationParType/{type}")
   // public List<Reclamation> AfficherReclamationParType(@PathVariable("type") String type)
    //{
        //return reclamationAdminService.AfficherReclamationParType();
    //}

    @RequestMapping("/Admin/getAllReclamationOrderByDate")
    public List<Reclamation> getAllReclamationOrderByDate()
    {
        return reclamationAdminService.getAllReclamationOrderByDate();
    }


}
