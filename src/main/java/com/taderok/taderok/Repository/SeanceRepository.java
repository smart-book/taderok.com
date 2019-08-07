package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.Seance;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeanceRepository extends CrudRepository<Seance,Long>{

    List<Seance> findAllByProf(Prof prof);
}
