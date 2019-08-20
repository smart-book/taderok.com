package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Etudiant extends User {
    private String niveau;
    private String etablissement;
    private boolean paiement;
    @JsonIgnoreProperties("etudiant")
    @OneToMany(mappedBy = "etudiant")
    private List<Rating> ratingList;
    @JsonIgnoreProperties("etudiantList")
    @ManyToMany(mappedBy = "etudiantList", cascade = {CascadeType.ALL})
    private List<Groupes> groupesList;

    @OneToMany
    private List<GroupeChat> groupeChatList;
    @ManyToOne
    private Parent parent;
    private String codeEnfant;

    @JsonIgnoreProperties("etudiant")
    @OneToMany(mappedBy = "etudiant")
    private List<Feedback> feedbackList;
    @OneToMany(mappedBy = "id.etudiant")
    @JsonIgnore
    private List<QuizEtudiant> quizEtudiants;

    public List<QuizEtudiant> getQuizEtudiants() {
        return quizEtudiants;
    }

    public void setQuizEtudiants(List<QuizEtudiant> quizEtudiants) {
        this.quizEtudiants = quizEtudiants;
    }

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

    public String getCodeEnfant() {
        return codeEnfant;
    }

    public void setCodeEnfant(String code_enfant) {
        this.codeEnfant = code_enfant;
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public Etudiant() {
    }

    public Etudiant(User user) {
        super(user);
    }

    public Etudiant(User u, String niveau, String etablissement, boolean paiement, List<Rating> ratingList, List<Groupes> groupesList, List<GroupeChat> groupeChatList, Parent parent, String codeEnfant, List<Feedback> feedbackList, List<QuizEtudiant> quizEtudiants) {
        super(u);
        this.niveau = niveau;
        this.etablissement = etablissement;
        this.paiement = paiement;
        this.ratingList = ratingList;
        this.groupesList = groupesList;
        this.groupeChatList = groupeChatList;
        this.parent = parent;
        this.codeEnfant = codeEnfant;
        this.feedbackList = feedbackList;
        this.quizEtudiants = quizEtudiants;
    }
}
