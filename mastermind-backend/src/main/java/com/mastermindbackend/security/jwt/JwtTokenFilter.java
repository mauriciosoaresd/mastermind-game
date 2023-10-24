package com.mastermindbackend.security.jwt;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.mastermindbackend.security.UserDetailsServiceImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtTokenFilter extends OncePerRequestFilter{
	static Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);
	@Autowired
	JwtProvider jwtProvider;
	@Autowired
	UserDetailsServiceImpl userDetailsServiceImpl;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		try {
			String token = getToken(request);
			String email = jwtProvider.getEmailFromToken(token);
			UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(email);
			UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(email, null, userDetails.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(auth);
		} catch (Exception e) {
			logger.error("\u001B[34m" + "fail filtering token: {}" + "\u001B[0m", e.getMessage());
		}
		filterChain.doFilter(request, response);
	}
	private String getToken(HttpServletRequest request) {
		String authRequest = request.getHeader("Authorization");
		if(authRequest != null && authRequest.startsWith("Bearer")) {
			return authRequest.replace("Bearer ", "");
		}
		return null;
	}
}
