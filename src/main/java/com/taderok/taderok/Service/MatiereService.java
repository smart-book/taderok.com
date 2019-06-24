package com.taderok.taderok.Service;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Entity.Matiere;
import com.taderok.taderok.Repository.GroupeRepository;
import com.taderok.taderok.Repository.MatiereRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MatiereService {

    @Autowired
    private MatiereRepository matiereRepository;


    public List<Matiere> getAllMatieres(){
        return (List<Matiere>) matiereRepository.findAll();
                                                                                                                        }

    public Matiere getMatiere(int id){
        return matiereRepository.findById(id).orElse(null);
    }

    public void addMatiere(Matiere matiere){
        matiereRepository.save(matiere);
    }

    public void updateMatiere(Matiere matiere, int id ){

         matiere = matiereRepository.findById(id).orElse( null );

        matiere.setMatiere(matiere.getMatiere());

        matiereRepository.save(matiere);
  
    }
    public void deleteMatiere(int id)
    {
        matiereRepository.deleteById(id);
    }

}
