package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Groupes {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String nom;
    @OneToMany(mappedBy = "groupes")
    private List<Seance> seanceList;
    @ManyToMany
    private List<Etudiant> etudiantList;
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
}
