package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Seance {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Date date_debut;
    private Date date_fin;
    private String matiere;
    private String titre;
    private String description;
    private int duree;
    // if it is a one day or repetitive event
    private String etat;
    private String niveau;

    @ManyToOne
    @JsonIgnoreProperties("seanceList")
    private Prof prof;
    @JsonIgnoreProperties("seance")
    @OneToMany(mappedBy = "seance")
    private List<Ressources> ressourcesList;
    @ManyToOne
    @JsonIgnoreProperties("seanceList")
    private Groupes groupes;
    @JsonIgnoreProperties("seances")
    @OneToMany(mappedBy = "seances")
    private List<Feedback> feedbackList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate_debut() {
        return date_debut;
    }

    public void setDate_debut(Date date_debut) {
        this.date_debut = date_debut;
    }

    public Date getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Date date_fin) {
        this.date_fin = date_fin;
    }

    public String getMatiere() {
        return matiere;
    }

    public void setMatiere(String matiere) {
        this.matiere = matiere;
    }

    public Prof getProf() {
        return prof;
    }

    public void setProf(Prof prof) {
        this.prof = prof;
    }


    public List<Ressources> getRessourcesList() {
        return ressourcesList;
    }

    public void setRessourcesList(List<Ressources> ressourcesList) {
        this.ressourcesList = ressourcesList;
    }

    public Groupes getGroupes() {
        return groupes;
    }

    public void setGroupes(Groupes groupes) {
        this.groupes = groupes;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDuree() {
        return duree;
    }

    public void setDuree(int duree) {
        this.duree = duree;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public List<Feedback> getFeedbackList() {
        return feedbackList;
    }

    public void setFeedbackList(List<Feedback> feedbackList) {
        this.feedbackList = feedbackList;
    }

    public Seance() {
    }

    public Seance(Date date_debut, Date date_fin, String matiere, String titre, String description, int duree, String etat, String niveau) {
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.matiere = matiere;
        this.titre = titre;
        this.description = description;
        this.duree = duree;
        this.etat = etat;
        this.niveau = niveau;
    }
}
