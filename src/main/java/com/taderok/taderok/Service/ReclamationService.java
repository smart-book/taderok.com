package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Controller.ReclamationController;
import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.ReclamationRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class ReclamationService {
    @Autowired
    ReclamationRepository reclamationRepository;
    @Autowired
    private HelloResource helloResource;
    @Autowired
    private UserRepository userRepository;

    public Reclamation ajouterReclamation(Reclamation req) {
        User u = userRepository.findById(helloResource.getIdConnected()).orElse(null);
        req.setUser(u);
        req.setEtat(false);
        return reclamationRepository.save(req);
    }

    public Reclamation modifierReclamation(Reclamation req, int id)
    {
        Reclamation reclamation = reclamationRepository.findById(id).orElse(null);
        reclamation.setEtat(false);
        reclamation.setDate(req.getDate());
        reclamation.setUser(req.getUser());
        reclamation.setDescription(req.getDescription());
        return reclamationRepository.save(reclamation);
    }

    public List<Reclamation> AfficherReclamationUser()
    {
        User u = userRepository.findById(helloResource.getIdConnected()).orElse(null);
        return (List<Reclamation>) reclamationRepository.findAllByUser(u);
    }




}