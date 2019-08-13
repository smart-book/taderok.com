package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.Ressources;
import com.taderok.taderok.Entity.Seance;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.RessourcesRespository;
import com.taderok.taderok.Repository.SeanceRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

@Service
public class RessourcesService {

    @Autowired
    private RessourcesRespository ressourcesRespository;
    @Autowired
    private SeanceRepository seanceRepository;
    @Autowired
    private ProfRepository profRepository;

    private AthenticationController athenticationController;

    Logger log = LoggerFactory.getLogger(this.getClass().getName());
    private final Path rootLocation = Paths.get("upload-dir");

    public void ajouterRessourcesHorsSeance(Ressources ressources)
    {
        Prof prof = profRepository.findById(athenticationController.getConnectedUser().getUser().getId()).orElse(null);
        ressources.setProf(prof);
        Date date = new Date();
        ressources.setDate(date);
        ressourcesRespository.save(ressources);

    }

    public void ajouterRessources(Long id,Ressources ressources){


        Seance seance = seanceRepository.findById(id).orElse(null);
        Date date = new Date();
        ressources.setDate(date);
        ressources.setSeance(seance);
        ressources.setEtat(true);
        ressourcesRespository.save(ressources);
    }

    public List<Ressources> getListRessources()

    {
        return (List<Ressources>) ressourcesRespository.findAll();
    }
    public List<Ressources> getListRessourceBySeance(Long id)
    {
        Seance seance = seanceRepository.findById(id).orElse(null);
        return ressourcesRespository.findAllBySeance(seance);
    }

    public List<Ressources> getListRessourceByProf() {

        List<Ressources> ressources = new ArrayList<>();
        List<Seance> seances = new ArrayList<>();
        Prof prof = profRepository.findById(athenticationController.getConnectedUser().getUser().getId()).orElse(null);
        seances = prof.getSeanceList();
        seances.forEach((e) -> {ressources.addAll(e.getRessourcesList());
        });

        return ressources;
    }
   public void supprimerRessource(Long id){ressourcesRespository.deleteById(id);}
   public void archiverRessources(Long id ){
        Ressources ressources1 = ressourcesRespository.findById(id).orElse(null);
        ressources1.setEtat(false);
        ressourcesRespository.save(ressources1);
   }
    public void déarchiverRessources(Long id ){
        Ressources ressources2 = ressourcesRespository.findById(id).orElse(null);
        ressources2.setEtat(true);
        ressourcesRespository.save(ressources2);
    }
}
