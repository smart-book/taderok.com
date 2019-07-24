package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.Ressources;
import com.taderok.taderok.Entity.Seance;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RessourcesRespository extends CrudRepository<Ressources,Long> {

    List<Ressources> findAllBySeance(Seance seance);


}
