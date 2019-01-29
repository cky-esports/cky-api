CREATE TABLE IF NOT EXISTS games (
	id int(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    clanStatsProvider text(65535) NOT NULL,
    logoSrc text(65535) NOT NULL
)