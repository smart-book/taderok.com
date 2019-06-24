package com.taderok.taderok.Domain;

import com.taderok.taderok.Entity.User;

import java.io.Serializable;

public class UserDTO implements Serializable {


    private static final long serialVersionUID = 2055972208046572715L;
    private User user;
    private String token;

    public UserDTO(User user, String token) {
        this.user = user;
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
