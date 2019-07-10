package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Seance {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private Date date_debut;
    private Date date_fin;
    private String matiere;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
}
