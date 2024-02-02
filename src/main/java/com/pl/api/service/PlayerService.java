package com.pl.api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pl.api.Player;
import com.pl.api.repo.PlayerRepository;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;
    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersByTeam(String team) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> team.equals(player.getTeam()))
                .collect(Collectors.toList());
    }
    
    public List<Player> getPlayersByPosition(String pos) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> {
                    String playerPos = player.getPos();
                    return playerPos != null && player.getPos().toLowerCase().contains(pos.toLowerCase());
                })
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByNation(String nation) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> {
                    String playerNation = player.getNation();
                    return playerNation != null && player.getNation().toLowerCase().contains(nation.toLowerCase());
                })
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String name) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> player.getName().toLowerCase().contains(name.toLowerCase()))
                .collect(Collectors.toList());
    }
}
