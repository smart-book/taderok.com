package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Prof;
import org.springframework.data.repository.CrudRepository;

public interface ProfRepository extends CrudRepository<Prof, Long>  {
    //Prof findById(long id);
}
