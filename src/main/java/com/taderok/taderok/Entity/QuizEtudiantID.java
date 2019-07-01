package com.taderok.taderok.Entity;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
public class QuizEtudiantID implements Serializable {
    @ManyToOne
    @JoinColumn(name = "id_etudiant")
    private Etudiant id_etudiant;
    @ManyToOne
    @JoinColumn(name = "id_quiz")
    private Quiz id_quiz;

    public Etudiant getEtudiant() {
        return id_etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.id_etudiant = etudiant;
    }

    public Quiz getQuiz() {
        return id_quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.id_quiz = quiz;
    }
}
