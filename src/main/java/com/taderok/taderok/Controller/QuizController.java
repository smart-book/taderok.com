package com.taderok.taderok.Controller;

import com.taderok.taderok.Entity.BonneReponses;
import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Entity.Question;
import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Repository.PropositionRepository;
import com.taderok.taderok.Repository.QuestionRepository;
import com.taderok.taderok.Service.PropositionService;
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
    @Autowired
    private QuestionRepository questionRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/allQuiz")
    public List<Quiz> getAllQuiz(){
        return quizProfService.getAllQuiz();
    }
    @RequestMapping(method = RequestMethod.GET, value = "/find/{id}")
    public Quiz getQuizById(@PathVariable int id){
        return quizProfService.getQuizById(id);
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
    public Question addQuestion(@RequestBody Question question, @PathVariable int id){
        return quizProfService.addQuestion(question, id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/deletequestion")
    public void deleteQuestion(@PathVariable int id){
        quizProfService.deleteQuestion(id);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/{id}/addproposition")
    public void addProposition(@RequestBody Proposition proposition, @PathVariable int id){
        quizProfService.addProposition(proposition, id);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/{id}/addbr")
    public BonneReponses addBR(@RequestBody BonneReponses br, @PathVariable int id){
        return quizProfService.addBR(br, id);
    }
    @RequestMapping(method = RequestMethod.GET, value = "/{id}/allprop")
    public List<Proposition> getAllPropositions(@PathVariable int id){
        return quizProfService.getAllPropositions(id);
    }
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/deleteprop")
    public void deleteProposition(@PathVariable int id){
        quizProfService.deleteProposition(id);
    }
    @RequestMapping(method = RequestMethod.GET, value = "/{id}/allquestions")
    public List<Question> getAllQuestions(@PathVariable int id){
        return quizProfService.getAllQuestions(id);
    }
    @RequestMapping("/findAll")
    public List<Quiz> getAllQuizEtudiant(){ return quizEtudiantService.getAllQuiz();
    }
    @RequestMapping("/{id}")
    public Quiz getQuiz(@PathVariable int id)
    {
        return quizEtudiantService.getQuiz(id);
    }

    @RequestMapping("/{id}/updatequiz")
    public Quiz updateQuiz(@PathVariable int id, @RequestBody Quiz q ){
        return quizProfService.updateQuiz(id, q);
    }
    @RequestMapping("/{id}/updatequestion")
    public Question updateQuiz(@PathVariable int id, @RequestBody Question q ){
        return quizProfService.updateQuestion(id, q);
    }
    @RequestMapping("/{id}/validatequiz")
    public void validateQuiz(@PathVariable int id){
        quizProfService.validateQuiz(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}/deletebr")
    public void deleteBR(@PathVariable int id){
        quizProfService.deleteBR(id);
    }
}
