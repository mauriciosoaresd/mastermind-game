package com.mastermindbackend.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.mastermindbackend.entity.User;
import com.mastermindbackend.repository.UserRepository;
@Service
@Transactional
public class UserService {
	@Autowired
	UserRepository userRepository;
	public Optional<User> getByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	public boolean exists(String email) {
		return userRepository.existsByEmail(email);
	}
	public User save(User user) {
		return userRepository.save(user);
	}
}
