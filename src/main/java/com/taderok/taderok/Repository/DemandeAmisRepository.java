package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.DemandeAmis;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DemandeAmisRepository extends CrudRepository<DemandeAmis,Long> {
}
