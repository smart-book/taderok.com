package com.taderok.taderok.Service;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Repository.EtudiantRepository;
import com.taderok.taderok.Repository.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class GroupeService {

    @Autowired
    private GroupeRepository groupeRepository;
    @Autowired
    private EtudiantRepository etudiantRepository;


    public List<Groupes> getAllGroupes(){
        return (List<Groupes>) groupeRepository.findAll();

    }

    public Groupes getGroupe(int id){
        return groupeRepository.findById(id).orElse(null);
    }

    public void addGroupe(Groupes groupe){


        groupeRepository.save(groupe);
    }

    public Groupes addGroupeWithResponse(Groupes groupe){
        groupeRepository.save(groupe);
        return groupe;
    }
    public void affecterGroupeEtudiants(int idG,Long idE){
        Groupes group = groupeRepository.findById(idG).orElse( null );
        Etudiant et = etudiantRepository.findById(idE).orElse( null );
        group.getEtudiantList().add(et);
        et.getGroupesList().add(group);
        groupeRepository.save(group);
        etudiantRepository.save(et);

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

    public void deleteStudentFromGroup(int idGroupe, Long idEtudiant)
    {
        Groupes groupes = groupeRepository.findById(idGroupe).orElse(null);
        Etudiant etudiant = etudiantRepository.findById(idEtudiant).orElse(null);
        if (groupes.getEtudiantList().size() != 0){
            groupes.getEtudiantList().remove(etudiant);
            groupeRepository.save(groupes);
        }
    }

}
