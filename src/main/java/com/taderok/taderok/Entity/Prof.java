package com.taderok.taderok.Entity;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Prof extends User {
    private int cin;
    private String diplome;
    private String experience;
    private String code_tablette;
    @OneToMany(mappedBy = "prof")
    private List<Rating> ratingList;
    @ManyToMany(mappedBy = "profList")
    private List<Matiere> matiereList;
    @OneToMany(mappedBy = "prof")
    private List<Seance> seanceList;
    @OneToMany(mappedBy = "prof")
    private List<GroupeChat> groupeChatList;


    public int getCin() {
        return cin;
    }

    public void setCin(int cin) {
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
}
