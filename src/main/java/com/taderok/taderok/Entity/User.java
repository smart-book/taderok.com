package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.minidev.json.annotate.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String prenom;
    private int telephone;
    private Date dateNaissance;
    private String adresse;
    private String photo;
    private String email;
    private String password;
    private String sexe;
    private boolean activated;
    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user")
    private List<Forum> forumList;
    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user")
    private List<CommentaireForum> commentaireForumList;
    @JsonIgnoreProperties("user")
    @OneToMany(mappedBy = "user")
    private List<Reclamation> reclamationList;
    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")
    private List<Message> messageList;
    @ManyToOne
    //@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Role roles;


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
        //this.roles = u.getRoles();
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public Role getRoles() {
        return roles;
    }

    public void setRoles(Role roles) {
        this.roles = roles;
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
