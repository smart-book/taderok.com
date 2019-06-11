package com.taderok.taderok.Entity;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Etudiant extends User {
    private String niveau;
    private String etablissement;
    private int code;
    private boolean paiement;
    @OneToMany(mappedBy = "etudiant")
    private List<Rating> ratingList;
    @ManyToMany(mappedBy = "etudiantList")
    private List<Groupes> groupesList;
    @OneToMany
    private List<GroupeChat> groupeChatList;

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

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
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
}
