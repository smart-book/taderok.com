package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private int id_etudiant;
    private int note;
    private String nomQuiz;
    @ManyToMany
    private List<Seance> seanceList;
    @OneToMany(mappedBy = "quiz")
    private List<Questions> questions;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId_etudiant() {
        return id_etudiant;
    }

    public void setId_etudiant(int id_etudiant) {
        this.id_etudiant = id_etudiant;
    }

    public int getNote() {
        return note;
    }

    public void setNote(int note) {
        this.note = note;
    }

    public String getNomQuiz() {
        return nomQuiz;
    }

    public void setNomQuiz(String nomQuiz) {
        this.nomQuiz = nomQuiz;
    }
}
