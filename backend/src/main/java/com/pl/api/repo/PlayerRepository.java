package com.pl.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pl.api.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer>{
    
}
