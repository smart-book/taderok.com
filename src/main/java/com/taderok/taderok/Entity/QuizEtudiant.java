package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class QuizEtudiant implements Serializable {

    @Id
    private  QuizEtudiantId id;
    private int note;

    public int getNote() {
        return note;
    }

    public void setNote(int note) {
        this.note = note;
    }

    public QuizEtudiantId getId() {
        return id;
    }

    public void setId(QuizEtudiantId id) {
        this.id = id;
    }
}
