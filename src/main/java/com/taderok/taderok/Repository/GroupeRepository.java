package com.taderok.taderok.Repository;
import com.taderok.taderok.Entity.Groupes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupeRepository extends CrudRepository<Groupes,Integer>{
}
