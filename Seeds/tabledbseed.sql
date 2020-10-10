DROP DATABASE IF EXISTS trackemployees_db;

CREATE DATABASE trackemployees_db;

USE trackemployees_db;

-- Create department table
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- Create role table
CREATE TABLE role(
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

-- Create employee table
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);

-- Insert values to department tables
INSERT INTO department(name)
VALUES ("Engineer");

INSERT INTO department(name)
VALUES ("Research Development");

INSERT INTO department(name)
VALUES ("Marketing");

INSERT INTO department(name)
VALUES ("Customer Service");

-- Insert values to role tables
INSERT INTO role(title, salary, department_id)
VALUES ("Software Engineer", 100000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Researcher", 90000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Consulting", 50000, 1);

INSERT INTO role(title, salary, department_id)
VALUES ("Front desk", 45000, 1);

-- Insert values to employee tables
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Steven", "Bong", 1, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Steven Jr.", "Bong 2", 2, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Steven Jr..", "Bong 3", 3, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Steven Jr...", "Bong 4", 4, 1);
