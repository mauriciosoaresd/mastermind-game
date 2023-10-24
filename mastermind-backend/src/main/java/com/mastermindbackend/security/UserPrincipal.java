package com.mastermindbackend.security;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserPrincipal implements UserDetails {
	private static final long serialVersionUID = 1L;
	private String email;
	private String password;
	private String username;
	private String picture;
	private Collection<? extends GrantedAuthority> authorities;
	
	public UserPrincipal(String email, String password, String username, String picture, Collection<? extends GrantedAuthority> authorities) {
		this.email = email;
		this.password = password;
		this.username = username;
		this.picture = picture;
		this.authorities = authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	@Override
	public String getPassword() {
		return password;
	}
	@Override
	public String getUsername() {
		return username;
	}
	public String getPictureUrl() {
		return picture;
	}
	public String getEmail() {
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	@Override
	public boolean isEnabled() {
		return true;
	}
	
}
