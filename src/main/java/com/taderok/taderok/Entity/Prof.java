package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Prof extends User {
    private String cin;
    private String diplome;
    private String experience;
    private String code_tablette;
    @JsonIgnore
    @OneToMany(mappedBy = "prof")
    private List<Rating> ratingList;
    @ManyToMany(mappedBy = "profList")
    private List<Matiere> matiereList;
    @OneToMany(mappedBy = "prof")
    @JsonIgnore
    private List<Seance> seanceList;
    @OneToMany(mappedBy = "prof")
    @JsonIgnore
    private List<GroupeChat> groupeChatList;

    public List<Quiz> getQuiz() {
        return quiz;
    }

    public void setQuiz(List<Quiz> quiz) {
        this.quiz = quiz;
    }

    @OneToMany(mappedBy = "id_prof")
    private List<Quiz> quiz;

    public Prof(User u) {
        super(u);
    }

    public Prof() {
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public String getDiplome() {
        return diplome;
    }

    public void setDiplome(String diplome) {
        this.diplome = diplome;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getCode_tablette() {
        return code_tablette;
    }

    public void setCode_tablette(String code_tablette) {
        this.code_tablette = code_tablette;
    }

    public List<Rating> getRatingList() {
        return ratingList;
    }

    public void setRatingList(List<Rating> ratingList) {
        this.ratingList = ratingList;
    }

    public List<Matiere> getMatiereList() {
        return matiereList;
    }

    public void setMatiereList(List<Matiere> matiereList) {
        this.matiereList = matiereList;
    }

    public List<Seance> getSeanceList() {
        return seanceList;
    }

    public void setSeanceList(List<Seance> seanceList) {
        this.seanceList = seanceList;
    }

    public List<GroupeChat> getGroupeChatList() {
        return groupeChatList;
    }

    public void setGroupeChatList(List<GroupeChat> groupeChatList) {
        this.groupeChatList = groupeChatList;
    }


}
