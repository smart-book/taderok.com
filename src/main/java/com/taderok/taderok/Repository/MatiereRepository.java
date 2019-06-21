package com.taderok.taderok.Repository;
import com.taderok.taderok.Entity.Groupes;
import com.taderok.taderok.Entity.Matiere;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatiereRepository extends CrudRepository<Matiere,Integer>{
}
