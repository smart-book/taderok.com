package com.taderok.taderok.Service;
import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.Seance;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.GroupeRepository;
import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.SeanceRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SeanceService {

    @Autowired
    private SeanceRepository seanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfRepository profRepository;


    public List<Seance> getAllSeances(){
        return (List<Seance>) seanceRepository.findAll();

    }

    public Seance getSeance(Long id){
        return seanceRepository.findById(id).orElse(null);
    }

    public void addSeance(Seance seance){
        Prof u = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        seance.setProf(u);
        seanceRepository.save(seance);
    }

    public void updateSeance(Seance seance, Long id ){

        Seance seanc = seanceRepository.findById(id).orElse( null );

        seanc.setDate_debut(seance.getDate_debut());
        seanc.setDate_fin(seance.getDate_fin());

        seanceRepository.save(seanc);
    }
    public void deleteSeance(Long id)
    {
        seanceRepository.deleteById(id);
    }

}
