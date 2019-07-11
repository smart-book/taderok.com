package com.taderok.taderok.Service;

import com.taderok.taderok.Controller.HelloResource;
import com.taderok.taderok.Entity.Question;
import com.taderok.taderok.Entity.Proposition;
import com.taderok.taderok.Repository.QuestionRepository;
import com.taderok.taderok.Repository.PropositionRepository;
import com.taderok.taderok.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    private PropositionRepository PropositionRepository;

    public List<Question> getAllQuestion() {
        return (List<Question>) questionRepository.findAll();

    }

    public Question getQuestion(int id) {
        return questionRepository.findById(id).orElse(null);
    }


}

