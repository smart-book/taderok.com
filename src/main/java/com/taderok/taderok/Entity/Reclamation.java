package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Reclamation {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private Date date;
    private String description;
    private boolean etat;
    private String type;
    @ManyToOne
    private User user;


}
