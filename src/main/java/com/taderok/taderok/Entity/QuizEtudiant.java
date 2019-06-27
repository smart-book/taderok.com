package com.taderok.taderok.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class QuizEtudiant {
    @Id
    QuizEtudiantID id;
    @Column(name="note")
    private double note;

    public QuizEtudiantID getId() {
        return id;
    }

    public void setId(QuizEtudiantID id) {
        this.id = id;
    }

    public double getNote() {
        return note;
    }

    public void setNote(double note) {
        this.note = note;
    }
}
