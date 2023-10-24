package com.mastermindbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckJWTController {
    @GetMapping("/jwt-check")
    public ResponseEntity checkJWT() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
