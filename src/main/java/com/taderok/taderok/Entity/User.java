package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private String nom;
    private String prenom;
    private int telephone;
    private Date dateNaissance;
    private String adresse;
    private String photo;
    private String email;
    private String sexe;
    private Role role;
    @OneToMany(mappedBy = "user")
    private List<Forum> forumList;
    @OneToMany(mappedBy = "user")
    private List<CommentaireForum> commentaireForumList;
    @OneToMany(mappedBy = "user")
    private List<Reclamation> reclamationList;
    @OneToMany(mappedBy = "user")
    private List<Message> messageList;
}
