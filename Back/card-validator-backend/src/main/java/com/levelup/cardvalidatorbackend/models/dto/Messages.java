package com.levelup.cardvalidatorbackend.models.dto;

public class Messages {
    private String message;

    public Messages() {
        super();
    }

    public Messages(String message) {
        super();
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
