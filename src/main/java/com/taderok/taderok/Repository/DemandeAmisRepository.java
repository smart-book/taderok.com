package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.DemandeAmis;
import com.taderok.taderok.Entity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface DemandeAmisRepository extends CrudRepository<DemandeAmis,Long> {
    List<DemandeAmis> findAllBySender(User u);
    List<DemandeAmis> findAllByReceiver(User u);
    List<DemandeAmis> findAllBySenderAndStatus(User u,String status);
    List<DemandeAmis> findAllByReceiverAndStatus(User u,String status);

}
