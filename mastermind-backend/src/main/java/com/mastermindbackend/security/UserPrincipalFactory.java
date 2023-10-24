package com.mastermindbackend.security;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.mastermindbackend.entity.User;
public class UserPrincipalFactory {
	public static UserPrincipal build(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(rol -> new SimpleGrantedAuthority(rol.getRolNome().name()))
				.collect(Collectors.toList());
		return new UserPrincipal(user.getEmail(), user.getPassword(), user.getName(), user.getPictureUrl(), authorities);
	}
}
