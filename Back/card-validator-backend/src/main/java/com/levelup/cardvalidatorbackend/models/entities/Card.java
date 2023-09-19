package com.levelup.cardvalidatorbackend.models.entities;

import jakarta.persistence.*;

@Entity(name = "cd_cards")
public class Card {

    @Id
    @SequenceGenerator(name = "cd_cards_id_card_seq", sequenceName = "cd_cards_id_card_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cd_cards_id_card_seq")
    @Column(name = "id_card")
    private Integer id;

    @Column(name = "owner")
    private String owner;

    @Column(name = "number")
    private String number;

    @Column(name = "cvv")
    private String cvv;

    @Column(name = "month")
    private Integer month;

    @Column(name = "year")
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
