package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JsonIgnoreProperties("quiz")
    private Prof id_prof;
    private String nomQuiz;
    private Date date;
    private Boolean visible;
    @ManyToOne
    private Mooc mooc;

    @ManyToMany
    @JsonIgnore
    private List<Seance> seanceList;
    @JsonIgnoreProperties("quiz")
    @OneToMany(mappedBy = "quiz", cascade = {CascadeType.REMOVE})
    private List<Question> questions;
    @OneToMany(mappedBy = "id.quiz")
    @JsonIgnore
    private List<QuizEtudiant> quizEtudiants;

    public List<QuizEtudiant> getQuizEtudiants() {
        return quizEtudiants;
    }

    public void setQuizEtudiants(List<QuizEtudiant> quizEtudiants) {
        this.quizEtudiants = quizEtudiants;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Prof getId_prof() {
        return id_prof;
    }

    public void setId_prof(Prof id_prof) {
        this.id_prof = id_prof;
    }

    public String getNomQuiz() {
        return nomQuiz;
    }

    public void setNomQuiz(String nomQuiz) {
        this.nomQuiz = nomQuiz;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Seance> getSeanceList() {
        return seanceList;
    }

    public void setSeanceList(List<Seance> seanceList) {
        this.seanceList = seanceList;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public Boolean getVisible() {
        return visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

    public Mooc getMooc() {
        return mooc;
    }

    public void setMooc(Mooc mooc) {
        this.mooc = mooc;
    }
}