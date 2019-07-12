package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Repository.PropositionRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropositionService {


    @Autowired
    private PropositionRepository reponseRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;

    public List<Proposition> getAllPropositions(){
        return (List<Proposition>) reponseRepository.findAll();

    }

    public Proposition getProposition(int id){
        return reponseRepository.findById(id).orElse(null);
    }

}
