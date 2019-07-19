package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.DemandeAmis;
import com.taderok.taderok.Entity.User;
import com.taderok.taderok.Repository.DemandeAmisRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DemandeAmisService {

    @Autowired
    private DemandeAmisRepository demandeAmisRepository;
    @Autowired
    private UserRepository userRepository;

    public void ajouterAmis(long idReceiver){
        User sender = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        User receiver = userRepository.findById(idReceiver).orElse(null);
        DemandeAmis da = new DemandeAmis();
        da.setSender(sender);
        da.setReceiver(receiver);
        da.setStatus("en attente");
        Date date = new Date();
        da.setDate(date);
        demandeAmisRepository.save(da);
    }

    public List<DemandeAmis> userIsSender(){
        return demandeAmisRepository.findAllBySender(AthenticationController.getConnectedUser().getUser());
    }

    public List<DemandeAmis> userIsReceiver(){
        return demandeAmisRepository.findAllByReceiver(AthenticationController.getConnectedUser().getUser());
    }

    public void accepterDemande(long id){
        DemandeAmis demande=demandeAmisRepository.findById(id).orElse(null);
        demande.setStatus("friends");
        Date date = new Date();
        demande.setDate(date);
        demandeAmisRepository.save(demande);
    }

    public void bloquerDemande(long id){
        DemandeAmis demande=demandeAmisRepository.findById(id).orElse(null);
        demande.setStatus("blocked");
        Date date = new Date();
        demande.setDate(date);
        demandeAmisRepository.save(demande);
    }

    public void refuserDemande(long id){
        demandeAmisRepository.deleteById(id);
    }

    public List<User> getAllFriends(){
        List<User> amis = new ArrayList<>();
        demandeAmisRepository.findAllBySenderAndStatus(AthenticationController.getConnectedUser().getUser(),"friends").forEach(user->amis.add(user.getReceiver()));
        demandeAmisRepository.findAllByReceiverAndStatus(AthenticationController.getConnectedUser().getUser(),"friends").forEach(user->amis.add(user.getSender()));
        return amis;
    }

    public DemandeAmis isFriendsWith(String id){
        User u = userRepository.findByEmail(id);
        return demandeAmisRepository.findRelationBySenderAndReceiver(u,AthenticationController.getConnectedUser().getUser());
    }
}
