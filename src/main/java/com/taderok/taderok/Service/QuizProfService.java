package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.*;
import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.PropositionRepository;
import com.taderok.taderok.Repository.QuestionRepository;
import com.taderok.taderok.Repository.QuizRepository;
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

    public List<Quiz> getAllQuiz(){
        return (List<Quiz>) quizRepository.findAll();

    }

    public void addQuiz(Quiz quiz){
        Prof p = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        quiz.setId_prof(p);
        quiz.setDate(new Date());
        quizRepository.save(quiz);
    }

    public void deleteQuiz(int id){
        quizRepository.deleteById(id);
    }

    public void addQuestion(Question question, int id){
        Quiz q = quizRepository.findById(id).orElse(null);
        question.setQuiz(q);
        questionRepository.save(question);
    }

    public void deleteQuestion(int id){
        questionRepository.deleteById(id);
    }

    public void addProposition(Proposition proposition, int id){
        Question q = questionRepository.findById(id).orElse(null);
        proposition.setQuestion(q);
        propositionRepository.save(proposition);
    }
}
