package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Feedback;
import com.taderok.taderok.Entity.Reclamation;
import com.taderok.taderok.Repository.FeedbackRepository;
import com.taderok.taderok.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
    public class FeedbackService {

    @Autowired
    FeedbackRepository feedbackRepository;
    @Autowired
    private EtudiantRepository etudiantRepository ;
    @Autowired
    private HelloResource helloResource;

    public Feedback add(Feedback req){
        Etudiant e = etudiantRepository.findById(helloResource.getIdConnected()).orElse(null);
        req.setEtudiant(e);
        return feedbackRepository.save(req);

    }

    public List<Feedback> getAllFeedback(){

        return (List<Feedback>) feedbackRepository.findAll();
    }

    public void updateFeedback(Feedback feedback, int id ){
        Feedback feed = feedbackRepository.findById(id).orElse( null );
        //feed.setId(feedback.getId());
        feed.setType(feedback.getType());
        feed.setDescription(feedback.getDescription());
        feedbackRepository.save(feed);


    }
    public List<Feedback> getAllFeedbackById(int id){
        Etudiant e = etudiantRepository.findById(id).orElse(null);
        return (List<Feedback>) feedbackRepository.findAllByEtudiant(e);
    }





}