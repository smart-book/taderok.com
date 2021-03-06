package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReclamationRepository extends CrudRepository<Reclamation,Integer>
{
    List<Reclamation> findAllByEtat(boolean etat);
    List<Reclamation> findAllByUser(User user);
    //List<Reclamation> findAllByType(TypeReclamation type);
    List<Reclamation> findAllByOrderByDateDesc();
}
