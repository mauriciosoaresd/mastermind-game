package com.mastermindbackend.entity;

import jakarta.persistence.*;

@Entity
public class Highscore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private long score;
    @OneToOne
    private User user;
    public Highscore() {}
    public Highscore(long score, User user) {
        super();
        this.score = score;
        this.user = user;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public long getScore() {
        return score;
    }
    public void setScore(long score) {
        this.score = score;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
}
