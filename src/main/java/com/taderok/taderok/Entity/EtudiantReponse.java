package com.taderok.taderok.Entity;
import javax.persistence.*;

@Entity
public class EtudiantReponse {
    @Id
    EtudiantReponseID id;
    @Column(name="note")
    private double note;
    @Column(name="reponse")
    private boolean reponse;

    public boolean isReponse() {
        return reponse;
    }

    public void setReponse(boolean reponse) {
        this.reponse = reponse;
    }

    public EtudiantReponseID getId() {
        return id;
    }

    public void setId(EtudiantReponseID id) {
        this.id = id;
    }

    public double getNote() {
        return note;
    }

    public void setNote(double note) {
        this.note = note;
    }
}
