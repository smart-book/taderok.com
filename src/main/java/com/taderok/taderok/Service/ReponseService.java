package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Questions;
import com.taderok.taderok.Entity.Reponses;
import com.taderok.taderok.Repository.UserRepository;
import com.taderok.taderok.Repository.ReponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.ws.soap.AddressingFeature;
import java.util.ArrayList;
import java.util.List;
@Service
public class ReponseService {


    @Autowired
    private ReponseRepository reponseRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;

    public List<Reponses> getAllReponses(){
        return (List<Reponses>) reponseRepository.findAll();

    }

    public Reponses getReponse(int id){
        return reponseRepository.findById(id).orElse(null);
    }
    public double getNoteQuestion(int idQ,double noteQ){
        return 0;
    };
    public void addReponse(Reponses reponse){
        reponseRepository.save(reponse);
    }

    public void updateReponse(Reponses reponses,int id) {

        reponseRepository.save(reponses);
    }

    public void deleteReponse (int id)
    {
        reponseRepository.deleteById(id);
    }
}
