package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements Serializable {

    private static final long serialVersionUID = 2899651825246686381L;
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private int telephone;
    private Date dateNaissance;
    private String adresse;
    private String photo;
    private String email;
    private String password;
    private String sexe;
    @Column(length = 500)
    private String bio;
    private boolean enabled;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Forum> forumList;
    @OneToMany(mappedBy = "user",cascade=CascadeType.ALL)
    @JsonIgnore
    private List<CommentaireForum> commentaireForumList=new ArrayList<>();
    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user")
    private List<Reclamation> reclamationList;
    @OneToMany(mappedBy = "receiver")
    private List<DemandeAmis> demandeListReçues;
    @OneToMany(mappedBy = "sender")
    private List<DemandeAmis> demandeListEnvoyees;
    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Message> messageList;
    private String role;


    public User() {
    }

    public User(User u) {
        this.nom = u.getNom();
        this.prenom = u.getPrenom();
        this.telephone = u.getTelephone();
        this.dateNaissance = u.getDateNaissance();
        this.adresse = u.getAdresse();
        this.photo = u.getPhoto();
        this.email = u.getEmail();
        this.password = u.getPassword();
        this.sexe = u.getSexe();
        this.forumList = u.getForumList();
        this.commentaireForumList = u.getCommentaireForumList();
        this.reclamationList = u.getReclamationList();
        this.messageList = u.getMessageList();
        this.bio=u.getBio();
        //this.roles = u.getRoles();
    }

    public String getBio() {
        return bio;
    }
    public void setBio(String bio){
        this.bio=bio;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getTelephone() {
        return telephone;
    }

    public void setTelephone(int telephone) {
        this.telephone = telephone;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public List<Forum> getForumList() {
        return forumList;
    }

    public void setForumList(List<Forum> forumList) {
        this.forumList = forumList;
    }

    public List<CommentaireForum> getCommentaireForumList() {
        return commentaireForumList;
    }

    public void setCommentaireForumList(List<CommentaireForum> commentaireForumList) {
        this.commentaireForumList = commentaireForumList;
    }

    public List<Reclamation> getReclamationList() {
        return reclamationList;
    }

    public void setReclamationList(List<Reclamation> reclamationList) {
        this.reclamationList = reclamationList;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }


    public String getRole() {
        return role;
    }

    public void setRole(String roles) {
        this.role = roles;
    }

    public List<DemandeAmis> getDemandeListReçues() {
        return demandeListReçues;
    }

    public void setDemandeListReçues(List<DemandeAmis> demandeListReçues) {
        this.demandeListReçues = demandeListReçues;
    }

    public List<DemandeAmis> getDemandeListEnvoyees() {
        return demandeListEnvoyees;
    }

    public void setDemandeListEnvoyees(List<DemandeAmis> demandeListEnvoyees) {
        this.demandeListEnvoyees = demandeListEnvoyees;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", telephone=" + telephone +
                ", dateNaissance=" + dateNaissance +
                ", adresse='" + adresse + '\'' +
                ", photo='" + photo + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", sexe='" + sexe + '\'' +

                '}';
    }
}
