package com.taderok.taderok.Service;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Repository.EtudiantRepository;
import com.taderok.taderok.Repository.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;


    public List<Etudiant> getAllEtudiants(){
        return (List<Etudiant>) etudiantRepository.findAll();

    }

    public Etudiant getEtudiant(Long id){
        return etudiantRepository.findById(id).orElse(null);
    }

    public void addEtudiant(Etudiant etudiant){
        etudiantRepository.save(etudiant);
    }

    public void updateEtudiant(Etudiant etudint, Long id ){

        Etudiant etu = etudiantRepository.findById(id).orElse( null );

        etu.setNom(etudint.getNom());

        etudiantRepository.save(etu);
  
    }
    public void deleteEtudiant(Long id)
    {
        etudiantRepository.deleteById(id);
    }

}
