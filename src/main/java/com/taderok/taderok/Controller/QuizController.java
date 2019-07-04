package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.Etudiant;
import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Entity.QuizEtudiant;
import com.taderok.taderok.Entity.QuizEtudiantID;
import com.taderok.taderok.Service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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


    @RequestMapping("findQuiz/{idE}")
    public List<QuizEtudiant> getQuizByEtu(@PathVariable Long idE){
        return quizService.findByEtudiant(idE);

    }

    @RequestMapping("findAllQuiz/{idE}")
    public List<QuizEtudiant> getQuizByEtudiant(@PathVariable Long idE)
    {   Quiz qz=new Quiz();
        qz.setId(5);
        QuizEtudiant qe=new QuizEtudiant();
        QuizEtudiantID q=new QuizEtudiantID();
        Etudiant e=new Etudiant();
        e.setId(idE);
        q.setEtudiant(e);

        qe.setId(q);
        System.out.println("controllleur"+qe.getId().getEtudiant().getId());
        return quizService.getAllQuizEtudiant(qe);
    }





    @RequestMapping(method = RequestMethod.POST, value = "/add")
    public int addQuiz(@RequestBody Quiz quiz){
        quiz.setDate(new Date());
        quizService.addQuiz(quiz);
        return quiz.getId();
    }




}
