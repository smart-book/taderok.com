package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Etudiant extends User {
    private String niveau;
    private String etablissement;
    private int code;
    private boolean paiement;
    @JsonIgnoreProperties("etudiant")
    @OneToMany(mappedBy = "etudiant")
    private List<Rating> ratingList;
    @ManyToMany(mappedBy = "etudiantList")
    private List<Groupes> groupesList;
    @OneToMany
    private List<GroupeChat> groupeChatList;
    @ManyToOne
    private Parent parent;
    private int code_enfant;

    @JsonIgnoreProperties("etudiant")
    @OneToMany(mappedBy = "etudiant")
    private List<Feedback> feedbackList;

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public String getEtablissement() {
        return etablissement;
    }

    public void setEtablissement(String etablissement) {
        this.etablissement = etablissement;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public boolean isPaiement() {
        return paiement;
    }

    public void setPaiement(boolean paiement) {
        this.paiement = paiement;
    }

    public List<Rating> getRatingList() {
        return ratingList;
    }

    public void setRatingList(List<Rating> ratingList) {
        this.ratingList = ratingList;
    }

    public List<Groupes> getGroupesList() {
        return groupesList;
    }

    public void setGroupesList(List<Groupes> groupesList) {
        this.groupesList = groupesList;
    }

    public List<GroupeChat> getGroupeChatList() {
        return groupeChatList;
    }

    public void setGroupeChatList(List<GroupeChat> groupeChatList) {
        this.groupeChatList = groupeChatList;
    }

    public List<Feedback> getFeedbackList() {
        return feedbackList;
    }

    public void setFeedbackList(List<Feedback> feedbackList) {
        this.feedbackList = feedbackList;
    }

    public int getCode_enfant() {
        return code_enfant;
    }

    public void setCode_enfant(int code_enfant) {
        this.code_enfant = code_enfant;
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }
}
