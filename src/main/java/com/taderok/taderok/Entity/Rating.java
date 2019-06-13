package com.taderok.taderok.Entity;

import javax.persistence.*;

@Entity

public class Rating {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private float note;
    @ManyToOne
    private Etudiant etudiant;
    @ManyToOne
    private Prof prof;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getNote() {
        return note;
    }

    public void setNote(float note) {
        this.note = note;
    }

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Prof getProf() {
        return prof;
    }

    public void setProf(Prof prof) {
        this.prof = prof;
    }
}
