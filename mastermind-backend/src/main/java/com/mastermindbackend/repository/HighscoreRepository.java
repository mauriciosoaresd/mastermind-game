package com.mastermindbackend.repository;

import com.mastermindbackend.entity.Highscore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface HighscoreRepository extends JpaRepository<Highscore, Integer> {
    @Query(value = "select h.score, h.user.name, h.user.pictureUrl from Highscore h order by h.score desc")
    List<ArrayList> getHighscoreListDesc();
}
