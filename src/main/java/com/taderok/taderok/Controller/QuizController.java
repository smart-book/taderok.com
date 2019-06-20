package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    private QuizService quizService;
    @Autowired
    private HelloResource helloResource;


    @RequestMapping("/findAll")
    public List<Quiz> getAllQuiz(){ return quizService.getAllQuiz();
    }

    @RequestMapping("/{id}")
    public Quiz getQuiz(@PathVariable int id)
    {
        return quizService.getQuiz(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void updateQuiz(@RequestBody Quiz quiz,@PathVariable int id)
    {
        quizService.updateQuiz(quiz,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteQuiz(@PathVariable int id)
    {
        quizService.deleteQuiz(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addQuiz(@RequestBody Quiz quiz){
        quiz.setDate(new Date());
        quizService.addQuiz(quiz);
    }




}
