package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Questions;
import com.taderok.taderok.Entity.Reponses;
import com.taderok.taderok.Repository.ReponseRepository;
import com.taderok.taderok.Repository.UserRepository;
import com.taderok.taderok.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.ws.soap.AddressingFeature;
import java.util.ArrayList;
import java.util.List;
@Service
public class QuestionService {


    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private HelloResource helloResource;
    @Autowired
    private ReponseRepository reponseRepository;

    public List<Questions> getAllQuestion(){
        return (List<Questions>) questionRepository.findAll();

    }

    public Questions getQuestion(int id){
        return questionRepository.findById(id).orElse(null);
    }

    public int addQuestion(Questions question){

        questionRepository.save(question);
        return question.getId();
    }
    public void addResponsesToQuestion(int idQuestion, List<Reponses> responses){
        Questions q=getQuestion(idQuestion);
        for ( Reponses reponse: responses) {
            reponse.setQuestions(q);
            reponseRepository.save(reponse);
            
        }
    }

    public void updateQuestion(Questions question,int id) {

        questionRepository.save(question);
    }

    public void deleteQuestion (int id)
    {
        questionRepository.deleteById(id);
    }
}
