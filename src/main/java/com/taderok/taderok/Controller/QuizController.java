package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Service.QuizEtudiantService;
import com.taderok.taderok.Service.QuizProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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


    @RequestMapping("/findAll")
    public List<Quiz> getAllQuiz(){ return quizEtudiantService.getAllQuiz();
    }

    @RequestMapping("/{id}")
    public Quiz getQuiz(@PathVariable int id)
    {
        return quizEtudiantService.getQuiz(id);
    }



}
