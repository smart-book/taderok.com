package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.QuizEtudiant;
import com.taderok.taderok.Entity.QuizEtudiantId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizEtudiantRepository extends CrudRepository<QuizEtudiant,QuizEtudiantId> {
    @Query("FROM QuizEtudiant WHERE id_etudiant = ?1")
    List<QuizEtudiant> findByEtudiant(Long idE);
}
