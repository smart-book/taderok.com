package com.taderok.taderok.Entity;

import javax.persistence.*;

@Entity

public class Rating {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
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
}
