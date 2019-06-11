package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Forum {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String titre;
    private Date date;
    private String description;
    private String matiere;
    private String niveau;
    @ManyToOne
    private User user;
    @OneToMany(mappedBy = "forum")
    private List<CommentaireForum> commentaireForumList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMatiere() {
        return matiere;
    }

    public void setMatiere(String matiere) {
        this.matiere = matiere;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }
}
