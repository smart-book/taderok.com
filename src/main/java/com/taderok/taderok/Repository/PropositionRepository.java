package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Entity.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PropositionRepository extends CrudRepository<Proposition,Integer> {
    List<Proposition> findAllByQuestion(Question question);
}
