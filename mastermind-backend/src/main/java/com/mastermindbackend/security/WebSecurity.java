package com.mastermindbackend.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.mastermindbackend.security.jwt.JwtEntryPoint;
import com.mastermindbackend.security.jwt.JwtTokenFilter;
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class WebSecurity {
	private static final String[] AUTH_WHITELIST = 	{
			"/oauth/**",
			"/mastermind/highscore"
	};
	@Autowired
	JwtEntryPoint jwtEntryPoint;
	@Autowired
	JwtTokenFilter jwtTokenFilter;
	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable());
		http.cors(cors -> cors.disable());
		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.authorizeHttpRequests(auth -> auth.requestMatchers(AUTH_WHITELIST).permitAll().anyRequest().authenticated());
		http.exceptionHandling(exc -> exc.authenticationEntryPoint(jwtEntryPoint));
		http.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);

		return http.build();

	}
}
