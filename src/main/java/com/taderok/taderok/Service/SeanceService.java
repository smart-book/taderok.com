package com.taderok.taderok.Service;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Entity.Seance;
import com.taderok.taderok.Repository.GroupeRepository;
import com.taderok.taderok.Repository.SeanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SeanceService {

    @Autowired
    private SeanceRepository seanceRepository;


    public List<Seance> getAllSeances(){
        return (List<Seance>) seanceRepository.findAll();

    }

    public Seance getSeance(int id){
        return seanceRepository.findById(id).orElse(null);
    }

    public void addSeance(Seance seance){
        seanceRepository.save(seance);
    }

    public void updateSeance(Seance seance, int id ){

        Seance seanc = seanceRepository.findById(id).orElse( null );

        seanc.setDate_debut(seance.getDate_debut());
        seanc.setDate_fin(seance.getDate_fin());

        seanceRepository.save(seanc);
    }
    public void deleteSeance(int id)
    {
        seanceRepository.deleteById(id);
    }

}
