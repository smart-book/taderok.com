package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Feedback;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {
    List<Feedback> findAllByEtudiant(Etudiant etudiant);
}
