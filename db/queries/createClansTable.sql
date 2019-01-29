CREATE TABLE IF NOT EXISTS clans (
	id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    tag varchar(255) NOT NULL,
    description text(65535) NOT NULL,
    trophies int(10) NOT NULL,
    membersCount int(5) NOT NULL,
    clanBadgeSrc text(65535) NOT NULL,
    gameId int(5) NOT NULL,
    FOREIGN KEY (gameId) REFERENCES games(id)
)
