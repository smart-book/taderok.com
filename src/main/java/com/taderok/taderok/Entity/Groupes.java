package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
public class Groupes {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String nom;
    @OneToMany(mappedBy = "groupes", cascade = {CascadeType.REMOVE})
    @JsonIgnoreProperties("groupes")
    private List<Seance> seanceList;
    @ManyToMany
    @JsonIgnoreProperties("groupesList")
    private List<Etudiant> etudiantList;

    @OneToMany(mappedBy = "groupes")
    @JsonIgnoreProperties("groupes")
    private List<GroupeChat> groupeChatList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public List<Seance> getSeanceList() {
        return seanceList;
    }

    public void setSeanceList(List<Seance> seanceList) {
        this.seanceList = seanceList;
    }

    public List<Etudiant> getEtudiantList() {
        return etudiantList;
    }

    public void setEtudiantList(List<Etudiant> etudiantList) {
        this.etudiantList = etudiantList;
    }

    public List<GroupeChat> getGroupeChatList() {
        return groupeChatList;
    }

    public void setGroupeChatList(List<GroupeChat> groupeChatList) {
        this.groupeChatList = groupeChatList;
    }

    public Groupes() {
    }

    public Groupes(String nom, List<Seance> seanceList, List<Etudiant> etudiantList, List<GroupeChat> groupeChatList) {
        this.nom = nom;
        this.seanceList = seanceList;
        this.etudiantList = etudiantList;
        this.groupeChatList = groupeChatList;
    }
}
