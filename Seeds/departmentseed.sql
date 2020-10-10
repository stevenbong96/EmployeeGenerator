DROP DATABASE IF EXISTS trackemployees_db;

CREATE DATABASE trackemployees_db;

USE trackemployees_db;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);