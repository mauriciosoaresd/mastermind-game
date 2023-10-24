package com.mastermindbackend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mastermindbackend.entity.User;
import com.mastermindbackend.service.UserService;
@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userService.getByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Email not found"));
		return UserPrincipalFactory.build(user);
	}

}
