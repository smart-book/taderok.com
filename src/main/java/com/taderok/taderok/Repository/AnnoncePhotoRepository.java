package com.taderok.taderok.Repository;

import com.taderok.taderok.Entity.AnnoncePhoto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnoncePhotoRepository extends CrudRepository<AnnoncePhoto,Long> {
}
