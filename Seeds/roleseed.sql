DROP DATABASE IF EXISTS trackemployees_db;

CREATE DATABASE trackemployees_db;

USE trackemployees_db;

CREATE TABLE role(
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);