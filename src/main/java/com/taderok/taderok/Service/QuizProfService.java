package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Entity.Prof;
import com.taderok.taderok.Entity.Quiz;
import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizProfService {
    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private ProfRepository profRepository;

    public void addQuiz(Quiz quiz){
        Prof p = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        quiz.setId_prof(p);
        quizRepository.save(quiz);
    }
}
