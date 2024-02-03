GRANT ALL PRIVILEGES ON DATABASE "stats" TO postgres;
DROP TABLE IF EXISTS player;

CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(255),
    nation VARCHAR(100),
    position VARCHAR(10),
    age FLOAT,
    matches_played INTEGER,
    starts INTEGER,
    minutes_played INTEGER,
    goals INTEGER,
    assists INTEGER,
    penalties_taken INTEGER,
    yellow_cards INTEGER,
    red_cards INTEGER,
    team VARCHAR(255)
);

COPY player(player_name, nation, position, age, matches_played, starts, minutes_played, goals, assists, penalties_taken, yellow_cards, red_cards, team)
FROM 'C:\tmp\stats.csv' WITH CSV HEADER DELIMITER ',';
