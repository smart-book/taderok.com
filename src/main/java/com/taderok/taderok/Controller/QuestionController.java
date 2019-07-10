package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Question;
import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @RequestMapping("/findAll")
    public List<Question> getAllQuestions(){ return questionService.getAllQuestion();
    }

    @RequestMapping("/{id}")
    public Question getQuestion(@PathVariable int id)
    {
        return questionService.getQuestion(id);
    }










}
