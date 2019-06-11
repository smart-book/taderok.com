package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Seance {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private Date date_debut;
    private Date date_fin;
    private String matiere;
    @ManyToOne
    private Prof prof;
    @ManyToMany(mappedBy = "seanceList")
    private List<Quiz> quizList;
    @OneToMany(mappedBy = "seance")
    private List<Ressources> ressourcesList;
    @ManyToOne
    private Groupes groupes;

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
}
