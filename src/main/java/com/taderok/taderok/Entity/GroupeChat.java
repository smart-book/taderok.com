package com.taderok.taderok.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
public class GroupeChat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private Date date;



    @OneToMany(mappedBy ="groupeChat")
    @JsonIgnoreProperties("groupeChat")
    private List<Message> messageList;
    @ManyToOne
    @JsonIgnoreProperties("groupeChatList")
    private Groupes groupes;
    @ManyToOne
    @JsonIgnoreProperties("groupeChatList")
    private Prof prof;

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

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }

    public Groupes getGroupes() {
        return groupes;
    }

    public void setGroupes(Groupes groupes) {
        this.groupes = groupes;
    }

    public Prof getProf() {
        return prof;
    }

    public void setProf(Prof prof) {
        this.prof = prof;
    }
}
