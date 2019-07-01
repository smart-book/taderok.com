package com.taderok.taderok.Entity;
import javax.persistence.*;

@Embeddable
public class EtudiantReponseID implements java.io.Serializable {
    @ManyToOne
    @JoinColumn(name = "id_etudiant")
    private Etudiant id_etudiant;
    @ManyToOne
    @JoinColumn(name = "id_reponse")
    private Reponses id_reponse;

    public Etudiant getEtudiant() {
        return id_etudiant;
    }

    public void setEtudiant(Etudiant etudiant) {
        this.id_etudiant = etudiant;
    }

    public Reponses getReponse() {
        return id_reponse;
    }

    public void setReponse(Reponses reponse) {
        this.id_reponse = reponse;
    }
}
