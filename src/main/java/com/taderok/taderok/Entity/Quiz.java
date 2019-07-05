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
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JsonIgnoreProperties("quiz")
    private Prof id_prof;
    private String nomQuiz;
    private Date date;
    @ManyToMany
    @JsonIgnore
    private List<Seance> seanceList;
    @JsonIgnoreProperties("quiz")
    @OneToMany(mappedBy = "quiz")
    private List<Questions> questions;
    @OneToMany(mappedBy = "id.id_quiz")
    private List<QuizEtudiant> quizEtudiant = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public Prof getId_prof() {return id_prof; }

    public void setId_prof(Prof id_prof) {
        this.id_prof = id_prof;
    }



    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNomQuiz() {
        return nomQuiz;
    }

    public void setNomQuiz(String nomQuiz) {
        this.nomQuiz = nomQuiz;
    }

    public List<Seance> getSeanceList() {
        return seanceList;
    }

    public void setSeanceList(List<Seance> seanceList) {
        this.seanceList = seanceList;
    }

    public List<Questions> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Questions> questions) {
        this.questions = questions;
    }
}
