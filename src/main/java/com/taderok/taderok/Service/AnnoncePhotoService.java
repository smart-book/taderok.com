package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Annonce;
import com.taderok.taderok.Entity.AnnoncePhoto;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.AnnoncePhotoRepository;
import com.taderok.taderok.Repository.AnnonceRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AnnoncePhotoService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AnnoncePhotoRepository annoncePhotoRepository;
    @Autowired
    private AnnonceRepository annonceRepository;

    public void addPhotoAnnonce(AnnoncePhoto photo,long id){
        Annonce a = annonceRepository.findById(id).orElse(null);
        photo.setAnnonce(a);
        annoncePhotoRepository.save(photo);
    }

    public List<AnnoncePhoto> getAllPhotoAnnonce(long id){
        Annonce a = annonceRepository.findById(id).orElse(null);
        return annoncePhotoRepository.findAllByAnnonceId(a);
    }
}
