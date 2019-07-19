package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.*;
import com.taderok.taderok.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class QuizProfService {
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private ProfRepository profRepository;
    @Autowired
    private PropositionRepository propositionRepository;
    @Autowired
    private BonneReponsesRepository bonneReponsesRepository;

    public List<Quiz> getAllQuiz(){
        return (List<Quiz>) quizRepository.findAll();

    }

    public Quiz addQuiz(Quiz quiz){
        Prof p = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        quiz.setId_prof(p);
        quiz.setVisible(false);
        quiz.setDate(new Date());
        quizRepository.save(quiz);
        return quiz;
    }

    public void deleteQuiz(int id){
        quizRepository.deleteById(id);
    }

    public Question addQuestion(Question question, int id){
        Quiz q = quizRepository.findById(id).orElse(null);
        question.setQuiz(q);
        questionRepository.save(question);
        return question;
    }

    public void deleteQuestion(int id){
        questionRepository.deleteById(id);
    }

    public List<Proposition> getAllPropositions(int question){
        return propositionRepository.findAllByQuestion(questionRepository.findById(question).orElse(null));
    }

    public void addProposition(Proposition proposition, int id){
        Question q = questionRepository.findById(id).orElse(null);
        proposition.setQuestion(q);
        propositionRepository.save(proposition);
    }

    public void addBR(BonneReponses br, int id){
        Question q = questionRepository.findById(id).orElse(null);
        br.setQuestion(q);
        bonneReponsesRepository.save(br);
    }

    public void deleteProposition(int id){
        propositionRepository.deleteById(id);
    }

    public Quiz getQuizById(int id){
        return quizRepository.findById(id).orElse(null);
    }

}
