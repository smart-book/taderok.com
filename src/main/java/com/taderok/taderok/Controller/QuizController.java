package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Service.QuizEtudiantService;
import com.taderok.taderok.Service.QuizProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizProfService quizProfService;
    @Autowired
    private QuizEtudiantService quizEtudiantService;

    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addQuiz(@RequestBody Quiz quiz){
        quizProfService.addQuiz(quiz);
    }
}
