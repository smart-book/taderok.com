package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Reponses {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String reponse;
    private boolean status;
    @ManyToOne
    @JsonIgnoreProperties("responseList")

    private Questions questions;
    @OneToMany(mappedBy = "id.id_reponse")
    private List<EtudiantReponse> repEtudiant = new ArrayList<>();

    public boolean isStatus() {
        return status;
    }

    public List<EtudiantReponse> getRepEtudiant() {
        return repEtudiant;
    }

    public void setRepEtudiant(List<EtudiantReponse> repEtudiant) {
        this.repEtudiant = repEtudiant;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReponse() {
        return reponse;
    }

    public void setReponse(String reponse) {
        this.reponse = reponse;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Questions getQuestions() {
        return questions;
    }

    public void setQuestions(Questions questions) {
        this.questions = questions;
    }
}
