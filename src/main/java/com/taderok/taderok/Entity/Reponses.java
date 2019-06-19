package com.taderok.taderok.Entity;

import javax.persistence.*;

@Entity
public class Reponses {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String reponse;
    private boolean status;
    private boolean responseEt;
    @ManyToOne
    private Questions questions;

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

    public boolean isResponseEt() {
        return responseEt;
    }

    public void setResponseEt(boolean responseEt) {
        this.responseEt = responseEt;
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
