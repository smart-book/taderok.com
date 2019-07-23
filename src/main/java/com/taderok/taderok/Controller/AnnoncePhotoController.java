package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.AnnoncePhoto;
import com.taderok.taderok.Service.AnnoncePhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/annoncephoto")
public class AnnoncePhotoController {

    @Autowired
    private AnnoncePhotoService annoncePhotoService;

    @RequestMapping(method = RequestMethod.POST, value = "/add/{id}")
    public void addAnnonce(@RequestBody AnnoncePhoto annonce,@PathVariable long id){
        annoncePhotoService.addPhotoAnnonce(annonce,id);
    }
}
