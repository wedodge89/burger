DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT(3) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(45) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT false,
PRIMARY KEY (id)
);

