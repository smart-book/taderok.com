package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Mooc {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String titre;
    private String matiere;
    private Date date;
    private String niveau;
    private boolean archive;
    @OneToMany(mappedBy = "mooc")
    private List<MoocVideo> moocVideos;
    @OneToMany(mappedBy = "mooc")
    private List<Quiz> quizList;

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getMatiere() {
        return matiere;
    }

    public void setMatiere(String matiere) {
        this.matiere = matiere;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public List<MoocVideo> getMoocVideos() {
        return moocVideos;
    }

    public void setMoocVideos(List<MoocVideo> moocVideos) {
        this.moocVideos = moocVideos;
    }

    public List<Quiz> getQuizList() {
        return quizList;
    }

    public void setQuizList(List<Quiz> quizList) {
        this.quizList = quizList;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isArchive() {
        return archive;
    }

    public void setArchive(boolean archive) {
        this.archive = archive;
    }
}
