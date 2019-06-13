package com.taderok.taderok.Entity;

import javax.persistence.*;
import javax.validation.constraints.Null;
import java.util.Date;
import java.util.List;

@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private Date contenu;
    @OneToMany(mappedBy = "chat")
    private List<Message> messageList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getContenu() {
        return contenu;
    }

    public void setContenu(Date contenu) {
        this.contenu = contenu;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }


}
