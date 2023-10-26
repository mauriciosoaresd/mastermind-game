package com.mastermindbackend.controller;

import com.mastermindbackend.dto.ScoreDto;
import com.mastermindbackend.entity.Highscore;
import com.mastermindbackend.entity.User;
import com.mastermindbackend.service.HighscoreService;
import com.mastermindbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mastermind")
@CrossOrigin
public class GameController {
    @Autowired
    UserService userService;
    @Autowired
    HighscoreService highscoreService;
    @PostMapping("/set-score")
    public ResponseEntity setScore(@RequestBody ScoreDto scoreDto) {
        // Calculate score
        // level 4,5,6 (100, 500, 1000)? test
        // (level / t) / tries
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long time = Math.round((scoreDto.getFinishTime() - scoreDto.getStartingTime()) / 1000);
        double calcScore;
        switch (scoreDto.getLevel()) {
            case 4:
                calcScore = (10000 / time) / (scoreDto.getRowCount());
                break;
            case 5:
                calcScore = (50000 / time) / (scoreDto.getRowCount());
                break;
            case 6:
                calcScore = (500000 / time) / (scoreDto.getRowCount());
                break;
            default:
                calcScore = 0;
        }

        User user = userService.getByEmail(email.toString()).get();

        if(user.getScore() < calcScore) {
            user.setScore(Math.round(calcScore));
            userService.save(user);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/highscore")
    public ResponseEntity<List<Highscore>> getHighscoreList() {
        List list = highscoreService.getHighscoreListDesc();
        return new ResponseEntity(list, HttpStatus.OK);
    }
}
