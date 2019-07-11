package com.taderok.taderok.Service;

import org.springframework.stereotype.Service;
import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.*;

import com.taderok.taderok.Repository.*;

import com.taderok.taderok.Repository.ProfRepository;

import com.taderok.taderok.Repository.UserRepository;
import com.taderok.taderok.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizEtudiantService {
/*
    @Autowired
    private QuizRepository quizRepository;

    @Autowired
    private ProfRepository profRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;
    @Autowired
    private QuizEtudiantRepository QuizEtudiantRepository;



    public List<QuizEtudiant> getAllQuizEtudiant(QuizEtudiant idE){
        System.out.println("Etudiant Id"+idE.getId().getEtudiant().getId());
        return (List<QuizEtudiant>) QuizEtudiantRepository.findAllById((Iterable<QuizEtudiantId>)idE.getId());

    }


    public List<Quiz> getAllQuiz(){
        return (List<Quiz>) quizRepository.findAll();

    }

    public Quiz getQuiz(int id){

        return quizRepository.findById(id).orElse(null);
    }

    public double getNote(int id){
        List<Question> questionsList=getQuiz(id).getQuestions();
        // note de chaque question
        double nq=20/questionsList.size()-1;
        for (Question question:questionsList) {
            List<Proposition> reponsesList=question.getPropositions();
            //calculer le nombre des réponses vraies pour connaitre la note de chaque reponse
            double nbR=0;
            for (Proposition r:reponsesList) {
                if(r.getNom().equals(question.getBonneProposition()))
                    nbR++; }
            nbR=nq/nbR;
            //verifier les reponses

        }
        return 0;
    }
*/
}
