package com.taderok.taderok.Entity;
import javax.persistence.*;

@Embeddable
public class EtudiantReponseID implements java.io.Serializable {
    @ManyToOne
    @JoinColumn(name = "id_etudiant")
    private Etudiant etudiant;
    @ManyToOne
    @JoinColumn(name = "id_reponse")
    private Reponses reponse;

    public Etudiant getEtudiant() {
        return etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.etudiant = etudiant;
    }

    public Reponses getReponse() {
        return reponse;
    }

    public void setReponse(Reponses reponse) {
        this.reponse = reponse;
    }
}
