package com.taderok.taderok.Service;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Repository.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class GroupeService {

    @Autowired
    private GroupeRepository groupeRepository;


    public List<Groupes> getAllGroupes(){
        return (List<Groupes>) groupeRepository.findAll();

    }

    public Groupes getGroupe(int id){
        return groupeRepository.findById(id).orElse(null);
    }

    public void addGroupe(Groupes groupe){
        groupeRepository.save(groupe);
    }

    public void updateGroupe(Groupes groupe, int id ){

        Groupes group = groupeRepository.findById(id).orElse( null );

        group.setNom(groupe.getNom());

        groupeRepository.save(group);
  
    }
    public void deleteGroupe(int id)
    {
        groupeRepository.deleteById(id);
    }

}
