package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.Annonce;
import com.taderok.taderok.Entity.AnnoncePhoto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnoncePhotoRepository extends CrudRepository<AnnoncePhoto,Long> {
    List<AnnoncePhoto> findAllByAnnonce(Annonce a);
}
