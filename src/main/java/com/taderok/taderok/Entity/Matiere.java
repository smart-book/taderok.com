package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Matiere {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String matiere;
    @ManyToMany
    private List<Prof> profList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMatiere() {
        return matiere;
    }

    public void setMatiere(String matiere) {
        this.matiere = matiere;
    }
}
