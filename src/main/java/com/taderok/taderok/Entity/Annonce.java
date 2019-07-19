package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Annonce {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private User user;
    private Date date;
    private String description;
    private float prix;
    private String categorie;
    private boolean valide;
    private boolean archive;
    @OneToMany(mappedBy = "annonce")
    @JsonIgnore
    private List<AnnoncePhoto> annoncePhotoList;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public boolean isValide() {
        return valide;
    }

    public void setValide(boolean valide) {
        this.valide = valide;
    }

    public boolean isArchive() {
        return archive;
    }

    public void setArchive(boolean archive) {
        this.archive = archive;
    }

    public List<AnnoncePhoto> getAnnoncePhotoList() {
        return annoncePhotoList;
    }

    public void setAnnoncePhotoList(List<AnnoncePhoto> annoncePhotoList) {
        this.annoncePhotoList = annoncePhotoList;
    }
}
