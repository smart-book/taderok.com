package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Seance;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeanceRepository extends CrudRepository<Seance,Integer>{
}
