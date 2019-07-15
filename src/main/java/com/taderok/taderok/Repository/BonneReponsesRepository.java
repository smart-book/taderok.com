package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.BonneReponses;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public interface BonneReponsesRepository extends CrudRepository<BonneReponses, Integer> {
}
