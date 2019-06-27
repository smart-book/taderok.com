package com.taderok.taderok.Entity;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class QuizEtudiantID {
    @ManyToOne
    @JoinColumn(name = "id_etudiant")
    private Etudiant etudiant;
    @ManyToOne
    @JoinColumn(name = "id_quiz")
    private Quiz quiz;

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Quiz getQuiz() {
        return quiz;
    }

    public void setQuiz(Quiz quiz) {
        this.quiz = quiz;
    }
}
