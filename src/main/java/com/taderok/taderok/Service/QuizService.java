package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.AthenticationController;
import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.*;

import com.taderok.taderok.Repository.*;

import com.taderok.taderok.Repository.ProfRepository;
import com.taderok.taderok.Repository.ReponseRepository;
import com.taderok.taderok.Repository.UserRepository;
import com.taderok.taderok.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {


    @Autowired
    private QuizRepository quizRepository;
    @Autowired
    private ReponseRepository reponseRepository;
    @Autowired
    private ProfRepository profRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;
    @Autowired
    private QuizEtduaintRepository quizEtduaintRepository;

    public List<QuizEtudiant> getAllQuizEtudiant(QuizEtudiant idE){
        System.out.println("aaaaaaaa"+idE.getId().getEtudiant().getId());
        return (List<QuizEtudiant>) quizEtduaintRepository.findAllById((Iterable<QuizEtudiantID>)idE.getId());

    }
    public List<QuizEtudiant> findByEtudiant(Long id){
        return  quizEtduaintRepository.findByEtudiant(id);
    }
    public List<Quiz> getAllQuiz(){
        return (List<Quiz>) quizRepository.findAll();

    }

    public Quiz getQuiz(int id){

        return quizRepository.findById(id).orElse(null);
    }
    public double getNote(int id){
      List<Questions> questionsList=getQuiz(id).getQuestions();
      // note de chaque question
        double nq=20/questionsList.size()-1;
        for (Questions question:questionsList) {
            List<Reponses> reponsesList=question.getReponsesList();
              //calculer le nombre des réponses vraies pour connaitre la note de chaque reponse
                double nbR=0;
                for (Reponses r:reponsesList) {
                 if(r.getStatus())
                    nbR++; }
                nbR=nq/nbR;
                //verifier les reponses

        }
        return 0;
    }
    public void addQuiz(Quiz quiz){
        /*User u = userRepository.findById(helloResource.getIdConnected()).orElse(null);
        quiz.setId_prof(u.getId()); */
        User u = userRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        Prof p = profRepository.findById((long) AthenticationController.getConnectedUser().getUser().getId()).orElse(null);
        System.out.println("prof : "+p);
        System.out.println("user : "+u);

        quiz.setId_prof(p);
        quizRepository.save(quiz);
    }

    public void updateQuiz(Quiz quiz,int id){

        quizRepository.save(quiz);
    }
    public void deleteQuiz(int id)
    {
        quizRepository.deleteById(id);
    }
}
