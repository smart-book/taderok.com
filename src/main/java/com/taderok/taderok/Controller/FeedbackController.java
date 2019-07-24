package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Feedback;
import com.taderok.taderok.Repository.FeedbackRepository;
import com.taderok.taderok.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/feedback")
    public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @RequestMapping(method = RequestMethod.POST, value = "/ajouterFeedback")
    public Feedback ajouterFeedback(@RequestBody Feedback req){
        return feedbackService.add(req);
    }

    @RequestMapping("/Feedbacks")
    public List<Feedback> getAllFeedback(){
        return feedbackService.getAllFeedback();
    }
    @RequestMapping("/Feedbacks/{id}")
    public void updateFeedback(@RequestBody Feedback feedback,@PathVariable int id) {

        feedbackService.updateFeedback(feedback,id);
    }
    @RequestMapping("/EtudiantFeedbacks/{id}")
        public List<Feedback> getAllFeedbackById(@PathVariable long id){
            return feedbackService.getAllFeedbackById(id);
        }

    @RequestMapping("/seanceFeedbacks/{id}")
    public List<Feedback> getAllFeedbackBySeanceId(@PathVariable Long id){
        return feedbackService.getAllFeedbackBySeanceId(id);
    }

}
