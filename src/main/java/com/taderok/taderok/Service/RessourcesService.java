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
import java.util.ArrayList;
import java.util.List;

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


    public void ajouterRessources(int id,Ressources ressources){


        Seance seance = seanceRepository.findById(id).orElse(null);

        ressources.setSeance(seance);
        ressourcesRespository.save(ressources);
    }
    public List<Ressources> getListRessources()

    {
        return (List<Ressources>) ressourcesRespository.findAll();
    }
    public List<Ressources> getListRessourceBySeance(int id)
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


}
