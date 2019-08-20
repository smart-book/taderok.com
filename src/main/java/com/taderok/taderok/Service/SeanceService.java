package com.taderok.taderok.Service;
import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.*;
import com.taderok.taderok.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class SeanceService {

    @Autowired
    private SeanceRepository seanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProfRepository profRepository;

    @Autowired
    private EtudiantRepository etudiantRepository;


    public List<Seance> getAllSeances(){
        return (List<Seance>) seanceRepository.findAll();

    }

    public List<Seance> getAllSeancesByProf(){
        Prof prof = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        return (List<Seance>) seanceRepository.findAllByProf(prof);

    }

    public List<Seance> getAllSeancesByStudent(){
        List<Groupes> groupesList = new ArrayList<>();
        List<Seance> seanceList = new ArrayList<>();
        Etudiant etudiant= etudiantRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        if(etudiant.getGroupesList().size() != 0){
            groupesList = etudiant.getGroupesList();
            for(int i = 0 ; i < groupesList.size(); i++){
                System.out.println(groupesList.get(i));
                seanceList.addAll( groupesList.get(i).getSeanceList());
            }
        }
        return seanceList;

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
