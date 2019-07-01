package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Questions;
import com.taderok.taderok.Entity.Reponses;
import com.taderok.taderok.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("/findAll")
    public List<Questions> getAllQuestions(){ return questionService.getAllQuestion();
    }

    @RequestMapping("/{id}")
    public Questions getQuestion(@PathVariable int id)
    {
        return questionService.getQuestion(id);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void updateQuestion(@RequestBody Questions question,@PathVariable int id)
    {
        questionService.updateQuestion(question,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteQuestion(@PathVariable int id)
    {
        questionService.deleteQuestion(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public int addQuestion(@RequestBody Questions question){

        questionService.addQuestion(question);
        return question.getId();
    }
    @RequestMapping(method = RequestMethod.POST, value = "/addResponses/{idQ}")
    public void addResponsesToQuestion(@PathVariable int idQ, @RequestBody List<Reponses> reponsesList){

        questionService.addResponsesToQuestion(idQ,reponsesList);
    }




}
