package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String question;

    @ManyToOne
    private Quiz quiz;
    @JsonIgnoreProperties("question")
    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE})
    private List<Proposition> propositions;

    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE})
    @JsonIgnoreProperties("question")
    private List<BonneReponses> bonneReponses;

    public List<BonneReponses> getBonneReponses() {
        return bonneReponses;
    }

    public void setBonneReponses(List<BonneReponses> bonneReponses) {
        this.bonneReponses = bonneReponses;
    }

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

    public List<Proposition> getPropositions() {
        return propositions;
    }

    public void setPropositions(List<Proposition> propositions) {
        this.propositions = propositions;
    }
}
