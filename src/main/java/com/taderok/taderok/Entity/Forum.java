package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.minidev.json.annotate.JsonIgnore;

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
    @JsonIgnoreProperties("forumList")
    private User user;
    @JsonIgnoreProperties("forum")
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<CommentaireForum> getCommentaireForumList() {
        return commentaireForumList;
    }

    public void setCommentaireForumList(List<CommentaireForum> commentaireForumList) {
        this.commentaireForumList = commentaireForumList;
    }

    @Override
    public String toString() {
        return "Forum{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", matiere='" + matiere + '\'' +
                ", niveau='" + niveau + '\'' +
                '}';
    }
}
