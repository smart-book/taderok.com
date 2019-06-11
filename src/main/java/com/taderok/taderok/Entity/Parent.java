package com.taderok.taderok.Entity;

import javax.persistence.Entity;

@Entity
public class Parent extends User {
    private int code_enfant;
    private String cin;

    public int getCode_enfant() {
        return code_enfant;
    }

    public void setCode_enfant(int code_enfant) {
        this.code_enfant = code_enfant;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }


}
