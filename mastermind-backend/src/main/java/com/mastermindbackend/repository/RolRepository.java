package com.mastermindbackend.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mastermindbackend.entity.Rol;
import com.mastermindbackend.enums.RolNome;
@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
	Optional<Rol> findByRolNome(RolNome rolNome);
	boolean existsByRolNome(RolNome rolNome);
}
