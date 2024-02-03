package com.pl.api;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Player {
    @Id
    @SequenceGenerator(
        name = "customer_id_sequence",
        sequenceName = "customer_id_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "customer_id_sequence"
    )
    private Integer id;

    @Column(name = "player_name")
    private String name;
    private String nation;

    @Column(name = "position")
    private String pos;
    private Float age;

    @Column(name = "matches_played")
    private Integer mp;
    private Integer starts;

    @Column(name = "minutes_played")
    private Integer mins;
    private Integer goals;
    private Integer assists;

    @Column(name = "penalties_taken")
    private Integer pk;

    @Column(name = "yellow_cards")
    private Integer yellows;

    @Column(name = "red_cards")
    private Integer reds;
    private String team;
}
