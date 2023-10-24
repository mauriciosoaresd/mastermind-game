package com.mastermindbackend.service;

import com.mastermindbackend.repository.HighscoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class HighscoreService {
    @Autowired
    HighscoreRepository highscoreRepository;
    public List<ArrayList> getHighscoreListDesc() {
        return highscoreRepository.getHighscoreListDesc();
    }
}
