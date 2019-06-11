package com.taderok.taderok.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
public class GroupeChat {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
    private Date date;
    @ManyToOne
    private Groupes groupes;
    @OneToMany(mappedBy = "groupeChat")
    private List<Message> messageList;
    @ManyToOne
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
}
