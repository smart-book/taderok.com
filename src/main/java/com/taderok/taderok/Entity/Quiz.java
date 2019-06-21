package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    @ManyToMany
    private List<Etudiant> etudiantList;
    private int id_prof;
    private double note;
    private String nomQuiz;
    private boolean corrige;
    private Date date;
    @ManyToMany
    private List<Seance> seanceList;
    @JsonIgnoreProperties("quiz")
    @OneToMany(mappedBy = "quiz")
    private List<Questions> questions;

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

    public int getId_prof() {return id_prof; }

    public void setId_prof(int id_prof) {
        this.id_prof = id_prof;
    }

    public double getNote() {
        return note;
    }

    public void setNote(double note) {
        this.note = note;
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
