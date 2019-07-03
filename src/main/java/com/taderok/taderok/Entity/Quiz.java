package com.taderok.taderok.Entity;

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
    @ManyToMany
    private List<Etudiant> etudiantList;
    @ManyToOne(cascade = {CascadeType.ALL})
    @JsonIgnoreProperties("quiz")
    private Prof id_prof;
    private String nomQuiz;
    private boolean corrige;
    private Date date;
    @ManyToMany
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

    public List<Etudiant> getEtudiantList() {
        return etudiantList;
    }

    public void setEtudiantList(List<Etudiant> etudiantList) {
        this.etudiantList = etudiantList;
    }

    public Prof getId_prof() {return id_prof; }

    public void setId_prof(Prof id_prof) {
        this.id_prof = id_prof;
    }


    public boolean isCorrige() {
        return corrige;
    }

    public void setCorrige(boolean corrige) {
        this.corrige = corrige;
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
