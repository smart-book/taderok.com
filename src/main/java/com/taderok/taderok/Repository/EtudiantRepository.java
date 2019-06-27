package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EtudiantRepository extends CrudRepository<Etudiant, Long> {

    Etudiant findByCodeEnfant(String code);

}
