CREATE DATABASE IF NOT EXISTS fullcycle;

USE fullcycle;

CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    CONSTRAINT pk_people PRIMARY KEY (id)
);
