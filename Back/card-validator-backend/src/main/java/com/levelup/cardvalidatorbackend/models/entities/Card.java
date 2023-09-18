package com.levelup.cardvalidatorbackend.models.entities;

//@Entity(name = "credit_cards")
public class Card {
    private Integer id;

    private String owner;

    private String number;

    private String cvv;

    private Integer month;

    private Integer year;

    public Card() {
        super();
    }

    public Card(Integer id, String owner, String number, String cvv, Integer month, Integer year) {
        super();
        this.id = id;
        this.owner = owner;
        this.number = number;
        this.cvv = cvv;
        this.month = month;
        this.year = year;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getNumber() {
        return number.replaceAll(" +", "").trim();
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getCvv() {
        return cvv.replaceAll(" +", "").trim();
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }
}
