package com.mastermindbackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mastermindbackend.entity.Rol;
import com.mastermindbackend.enums.RolNome;
import com.mastermindbackend.repository.RolRepository;

import jakarta.transaction.Transactional;
@Service
@Transactional
public class RolService {
	@Autowired
	RolRepository rolRepository;
	public Optional<Rol> getByRolNome(RolNome rolNome) {
		return rolRepository.findByRolNome(rolNome);
	}
	public boolean existsRolNome(RolNome rolNome) {
		return rolRepository.existsByRolNome(rolNome);
	}
	public void save(Rol rol) {
		rolRepository.save(rol);
	}
}
