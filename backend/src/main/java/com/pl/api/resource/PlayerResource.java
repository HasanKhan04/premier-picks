package com.pl.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pl.api.service.PlayerService;
import com.pl.api.Player;


@RestController
@RequestMapping("/api/v1/players")
public class PlayerResource {

    private final PlayerService playerService;

    @Autowired
    public PlayerResource(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
        @RequestParam(required = false) String team,
        @RequestParam(required = false) String pos,
        @RequestParam(required = false) String nation,
        @RequestParam(required = false) String name) {
            if (team != null) {
                return playerService.getPlayersByTeam(team);
            }
            else if (pos != null) {
                return playerService.getPlayersByPosition(pos);
            }
            else if (nation != null) {
                return playerService.getPlayersByNation(nation);
            }
            else if (name != null) {
                return playerService.getPlayersByName(name);
            }
            return playerService.getPlayers();
        }
    
        @GetMapping("/test")
        public List<Player> getNation(
            @RequestParam(required = false) String nation) {
                return playerService.getPlayers();
        }
}
