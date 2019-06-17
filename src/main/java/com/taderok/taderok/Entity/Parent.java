package com.taderok.taderok.Entity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Parent extends User {
    private String cin;

    @OneToMany
    private List<Etudiant> enfants;

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }

    public List<Etudiant> getEnfants() {
        return enfants;
    }

    public void setEnfants(List<Etudiant> enfants) {
        this.enfants = enfants;
    }
}
