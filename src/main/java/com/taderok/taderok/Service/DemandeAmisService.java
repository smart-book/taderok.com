package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.DemandeAmis;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.DemandeAmisRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class DemandeAmisService {

    @Autowired
    private DemandeAmisRepository demandeAmisRepository;
    @Autowired
    private UserRepository userRepository;

    public void ajouterAmis(long idSender,long idReceiver){
        User sender = userRepository.findById(idSender).orElse(null);
        User receiver = userRepository.findById(idReceiver).orElse(null);
        DemandeAmis da = new DemandeAmis();
        da.setSender(sender);
        da.setReceiver(receiver);
        da.setStatus("en attente");
        Date date = new Date();
        da.setDate(date);
        demandeAmisRepository.save(da);
    }
}
