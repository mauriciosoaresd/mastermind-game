package com.mastermindbackend.security.jwt;

import java.security.Key;
import java.util.Date;

import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.mastermindbackend.security.UserPrincipal;

import io.jsonwebtoken.security.Keys;


/*
	Generate our backend JWT
	- gets user principal attributes
	- builds the jwt with:
		subject: google full name
		email: google email
		picture: google picture
		creation and expiration date in ms
		sign with byte encoded secret
 */
@Component
public class JwtProvider {
	@Value("${jwt.secret}")
	String JwtSecret;
	@Value("${jwt.expiration}")
	int expiration;
	public String generateToken(Authentication authentication) {
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
		return Jwts.builder()
				.setSubject(userPrincipal.getUsername())
				.claim("email", userPrincipal.getEmail())
				.claim("picture", userPrincipal.getPictureUrl())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + expiration))
				.signWith(getEncodedJwtSecret()).compact();
	}
	public String getEmailFromToken(String token) {
		Claims claims = Jwts.parserBuilder()
				.setSigningKey(getEncodedJwtSecret())
				.build()
				.parseClaimsJws(token)
				.getBody();
		return (String)claims.get("email");
	}
	private Key getEncodedJwtSecret() {
		return Keys.hmacShaKeyFor(JwtSecret.getBytes());
	}

}
