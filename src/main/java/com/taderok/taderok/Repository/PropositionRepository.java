package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Proposition;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropositionRepository extends CrudRepository<Proposition, Integer> {
}
