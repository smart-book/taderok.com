package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Questions;
import com.taderok.taderok.Entity.Reponses;
import com.taderok.taderok.Service.QuestionService;
import com.taderok.taderok.Service.ReponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/reponse")
public class ReponseController {

    @Autowired
    private ReponseService reponseService;

    @RequestMapping("/findAll")
    public List<Reponses> getAllReponses(){ return reponseService.getAllReponses();
    }

    @RequestMapping("/{id}")
    public Reponses getReponse(@PathVariable int id)
    {
        return reponseService.getReponse(id);
    }
    @RequestMapping("/{idQ}/{note}")
    public double getNoteQuestion(@PathVariable int idQ,@PathVariable double note)
    {
        return 0;
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/update/{id}")
    public void updateReponse(@RequestBody Reponses reponses,@PathVariable int id)
    {
        reponseService.updateReponse(reponses,id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
    public void deleteReponse(@PathVariable int id)
    {
        reponseService.deleteReponse(id);
    }






    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public void addReponse(@RequestBody Reponses reponses){

        reponseService.addReponse(reponses);
    }



}
