package com.mastermindbackend.controller;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.util.*;

import com.azure.identity.OnBehalfOfCredential;
import com.azure.identity.OnBehalfOfCredentialBuilder;
import com.microsoft.graph.authentication.TokenCredentialAuthProvider;
import com.microsoft.graph.models.ProfilePhoto;
import com.microsoft.graph.requests.GraphServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.mastermindbackend.dto.TokenDto;
import com.mastermindbackend.entity.Rol;
import com.mastermindbackend.entity.User;
import com.mastermindbackend.enums.RolNome;
import com.mastermindbackend.security.jwt.JwtProvider;
import com.mastermindbackend.service.RolService;
import com.mastermindbackend.service.UserService;

@RestController
@RequestMapping("/oauth")
@CrossOrigin
public class OAuthController {
	@Value("${google.clientId}")
	String googleClientId;
	@Value("${azure.clientId}")
	String azureClientId;
	@Value("${azure.clientSecret}")
	String azureClientSecret;
	@Value("${encoderSecretPassword}")
	String encoderSecretPassword;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	JwtProvider jwtProvider;
	@Autowired
	UserService userService;
	@Autowired
	RolService rolService;

	@PostMapping("/google")
	public ResponseEntity<TokenDto> google(@RequestBody TokenDto tokenDto) throws IOException {
		final NetHttpTransport transport = new NetHttpTransport();
		final GsonFactory gsonFactory = GsonFactory.getDefaultInstance();

		GoogleIdTokenVerifier.Builder verifier = new GoogleIdTokenVerifier.Builder(transport, gsonFactory)
				.setAudience(Collections.singletonList(googleClientId));

		final GoogleIdToken googleIdToken = GoogleIdToken.parse(verifier.getJsonFactory(), tokenDto.getValue());
		final GoogleIdToken.Payload payload = googleIdToken.getPayload();

		User user = new User();
		if (userService.exists(payload.getEmail())) {
			user = userService.getByEmail(payload.getEmail()).get();
		} else {
			Object name = payload.get("name");
			Object picture = payload.get("picture");
			user = saveUser(payload.getEmail(), (String) name,(String) picture);
		}

		TokenDto tokenRes = login(user);
		return new ResponseEntity<TokenDto>(tokenRes, HttpStatus.OK);
	}

	@PostMapping("/microsoft")
	public ResponseEntity<TokenDto> microsoft(@RequestBody TokenDto tokenDto) throws  IOException {
		final String tenantId = "common";
		final List<String> scopes = Arrays.asList("User.Read","openid", "profile");

		final OnBehalfOfCredential credential = new OnBehalfOfCredentialBuilder()
				.clientId(azureClientId).tenantId(tenantId).clientSecret(azureClientSecret)
				.userAssertion(tokenDto.getValue()).build();
		if (null == scopes || null == credential) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}

		final TokenCredentialAuthProvider authProvider = new TokenCredentialAuthProvider(scopes, credential);
		final GraphServiceClient graphClient = GraphServiceClient.builder()
				.authenticationProvider(authProvider).buildClient();
		com.microsoft.graph.models.User payload = graphClient.me().buildRequest().get();

		User user = new User();
		if (userService.exists(payload.mail)) {
			user = userService.getByEmail(payload.mail).get();
		} else {
			String name = payload.displayName;
			String email = payload.mail;
			user = saveUser(email, name, null);
		}

		TokenDto tokenRes = login(user);
		return new ResponseEntity<TokenDto>(tokenRes, HttpStatus.OK);
	}

	private TokenDto login(User user) {
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), encoderSecretPassword));
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtProvider.generateToken(authentication);
		TokenDto tokenDto = new TokenDto();
		tokenDto.setValue(jwt);

		return tokenDto;
	}

	private User saveUser(String email, String name, String picture) {
		User user = new User(email, passwordEncoder.encode(encoderSecretPassword), name, picture);
		Rol rolUser = rolService.getByRolNome(RolNome.ROLE_USER).get();
		Set<Rol> roles = new HashSet<>();
		roles.add(rolUser);
		user.setRoles(roles);

		return userService.save(user);
	}

}
