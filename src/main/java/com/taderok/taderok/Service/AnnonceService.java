package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Annonce;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.AnnonceRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AnnonceService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AnnonceRepository annonceRepository;

    public long addAnnonce(Annonce annonce){
        User u = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        annonce.setUser(u);
        Date date = new Date();
        annonce.setDate(date);
        annonceRepository.save(annonce);
        return annonce.getId();
    }

    public List<Annonce> getAllAnnonce(){
        return annonceRepository.findAllByArchiveAndValideOrderByDateDesc(false,false);
    }

    public void modifierAnnonce(Annonce annonce,long id){
        Annonce a= annonceRepository.findById(id).orElse(null);
        a.setCategorie(annonce.getCategorie());
        a.setTitre(annonce.getTitre());
        a.setDescription(annonce.getDescription());
        a.setPrix(annonce.getPrix());
        annonceRepository.save(a);
    }

    public Annonce getOneAnnonce(long id){
        return annonceRepository.findById(id).orElse(null);
    }

    public void validerAnnonce(long id){
        Annonce a= annonceRepository.findById(id).orElse(null);
        a.setValide(true);
        annonceRepository.save(a);
    }
    public void archiverAnnonce(long id){
        Annonce a= annonceRepository.findById(id).orElse(null);
        a.setArchive(true);
        annonceRepository.save(a);
    }


    public List<Annonce> getAllAnnonceConnected() {
        User u = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        return annonceRepository.findAllByUser(u);
    }
}
