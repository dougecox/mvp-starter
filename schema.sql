DROP DATABASE IF EXISTS test;

CREATE DATABASE cards;

USE cards;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(40) NOT NULL,
  address varchar(40) NOT NULL,
  state varchar(40) NOT NULL,
  zipCode varchar(40) NOT NULL,
  country varchar(40) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
