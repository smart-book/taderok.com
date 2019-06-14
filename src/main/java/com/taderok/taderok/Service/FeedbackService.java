package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Feedback;
import com.taderok.taderok.Repository.FeedbackRepository;
import com.taderok.taderok.Repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        System.out.println(e);
        req.setEtudiant(e);
        return feedbackRepository.save(req);

    }


}
