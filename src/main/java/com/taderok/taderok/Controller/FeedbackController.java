package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Feedback;
import com.taderok.taderok.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
    public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @RequestMapping(method = RequestMethod.POST, value = "/addFeedback")
    public Feedback addFeedback(@RequestBody Feedback req){
        return feedbackService.add(req);
    }

    @RequestMapping("/Feedbacks")
    public List<Feedback> getAllReclamation(){
        return feedbackService.getAllFeedback();
    }
}
