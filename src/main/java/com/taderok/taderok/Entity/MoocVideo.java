package com.taderok.taderok.Entity;

import javax.persistence.*;

@Entity
public class MoocVideo {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String path;
    @ManyToOne
    private Mooc mooc;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Mooc getMooc() {
        return mooc;
    }

    public void setMooc(Mooc mooc) {
        this.mooc = mooc;
    }
}
