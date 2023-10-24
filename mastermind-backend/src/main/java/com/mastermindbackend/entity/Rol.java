package com.mastermindbackend.entity;

import com.mastermindbackend.enums.RolNome;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Rol {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Enumerated(EnumType.STRING)
	@NotNull
	@Column(unique = true)
	private RolNome rolNome;
	public Rol() {}
	public Rol(RolNome rolNome) {
		super();
		this.rolNome = rolNome;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public RolNome getRolNome() {
		return rolNome;
	}
	public void setRolNome(RolNome rolNome) {
		this.rolNome = rolNome;
	}
}
