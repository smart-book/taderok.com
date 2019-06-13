package com.taderok.taderok.Service;

import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Service
public class ReclamationService {
    @Autowired
    ReclamationRepository reclamationRepository;

    public Reclamation ajouter(Reclamation req) {
        return reclamationRepository.save(req);
    }

    public List<Reclamation> getAllReclamation() {
        return (List<Reclamation>) reclamationRepository.findAll();

    }
}