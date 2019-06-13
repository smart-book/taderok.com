package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Questions {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String question;
    @ManyToOne
    private Quiz quiz;
    @OneToMany(mappedBy = "questions")
    private List<Reponses> reponsesList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }

    public List<Reponses> getReponsesList() {
        return reponsesList;
    }

    public void setReponsesList(List<Reponses> reponsesList) {
        this.reponsesList = reponsesList;
    }
}
