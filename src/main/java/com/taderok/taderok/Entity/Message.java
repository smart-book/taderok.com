package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Message {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private Date date;
    private String contenu;
    @ManyToOne
    @JsonIgnoreProperties("messageList")
    private GroupeChat groupeChat;
    @ManyToOne
    @JsonIgnoreProperties("messageList")
    private Chat chat;
    @ManyToOne
    @JsonIgnoreProperties("messageList")
    private User user;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public GroupeChat getGroupeChat() {
        return groupeChat;
    }

    public void setGroupeChat(GroupeChat groupeChat) {
        this.groupeChat = groupeChat;
    }

    public Chat getChat() {
        return chat;
    }

    public void setChat(Chat chat) {
        this.chat = chat;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
