package com.taderok.taderok.Domain;

import java.io.Serializable;

public class Response implements Serializable {

    private static final long serialVersionUID = 6255524172842815350L;
    private String message;

    public Response(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
