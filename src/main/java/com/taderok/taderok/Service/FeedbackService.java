package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Feedback;
import com.taderok.taderok.Entity.Seance;
import com.taderok.taderok.Repository.FeedbackRepository;
import com.taderok.taderok.Repository.EtudiantRepository;
import com.taderok.taderok.Repository.SeanceRepository;
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
    @Autowired
    private SeanceRepository seanceRepository;


    public Feedback add(Feedback req){
        Etudiant e = etudiantRepository.findById((Long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        req.setEtudiant(e);
        return feedbackRepository.save(req);

    }

    public List<Feedback> getAllFeedback(){

        return (List<Feedback>) feedbackRepository.findAll();
    }

    public void updateFeedback(Feedback feedback, int id ){
        Feedback feed = feedbackRepository.findById(id).orElse( null );
        feed.setId(feedback.getId());
        feed.setType(feedback.getType());
        feed.setDescription(feedback.getDescription());
        feedbackRepository.save(feed);


    }
    public List<Feedback> getAllFeedbackById(Long id){
        Etudiant e = etudiantRepository.findById(id).orElse(null);
        return (List<Feedback>) feedbackRepository.findAllByEtudiant(e);
    }

    public List<Feedback> getAllFeedbackBySeanceId(Long id){
        Seance s =  seanceRepository.findById(id).orElse(null);
        return  feedbackRepository.findAllFeedbackBySeances(s);
    }





}
