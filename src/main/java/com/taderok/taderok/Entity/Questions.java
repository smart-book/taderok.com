package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Questions {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String question;
    @ManyToOne
    private Quiz quiz;
    @OneToMany(mappedBy = "questions")
    private List<Reponses> reponsesList;



}
