package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Entity.Question;
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

    @RequestMapping(method = RequestMethod.GET, value = "/allQuiz")
    public List<Quiz> getAllQuiz(@RequestBody Quiz quiz){
        return quizProfService.getAllQuiz();
    }
    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public Quiz addQuiz(@RequestBody Quiz quiz){
        return quizProfService.addQuiz(quiz);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/delete")
    public void deleteQuiz(@PathVariable int id){
        quizProfService.deleteQuiz(id);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/{id}/addquestion")
    public void addQuestion(@RequestBody Question question, @PathVariable int id){
        quizProfService.addQuestion(question, id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/deletequestion")
    public void deleteQuestion(@PathVariable int id){
        quizProfService.deleteQuestion(id);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/{id}/addproposition")
    public void addProposition(@RequestBody Proposition proposition, @PathVariable int id){
        quizProfService.addProposition(proposition, id);
    }
/*
    @RequestMapping("/findAll")
    public List<Quiz> getAllQuiz(){ return quizEtudiantService.getAllQuiz();
    }

    @RequestMapping("/{id}")
    public Quiz getQuiz(@PathVariable int id)
    {
        return quizEtudiantService.getQuiz(id);
    }
*/


}
