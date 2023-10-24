package com.mastermindbackend.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;


@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@NotNull
	@Column(unique = true)
	private String email;
	@NotNull
	private String password;
	@NotNull
	private String name;
	private String pictureUrl;
	@OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "user")
	private Highscore score;
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"), 
	inverseJoinColumns = @JoinColumn(name = "rol_id", referencedColumnName = "id"))
	private Set<Rol> roles = new HashSet<>();
	public User() {}
	public User(String email, String password, String name, String pictureUrl) {
		super();
		this.email = email;
		this.password = password;
		this.name = name;
		this.pictureUrl = pictureUrl;
		this.score = new Highscore(0, this);
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	};
	public void setName(String pictureUrl) {
		this.name = name;
	};
	public String getPictureUrl() {
		return pictureUrl;
	};
	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	};
	public Set<Rol> getRoles() {
		return roles;
	}
	public void setRoles(Set<Rol> roles) {
		this.roles = roles;
	}
	public long getScore() {
		return score.getScore();
	}
	public void setScore(long score) {
		this.score.setScore(score);
	}

	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", name='" + name + '\'' +
				", pictureUrl='" + pictureUrl + '\'' +
				", score=" + score +
				", roles=" + roles +
				'}';
	}
}
