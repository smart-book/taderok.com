package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Annonce;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnonceRepository extends CrudRepository<Annonce,Long> {
}
