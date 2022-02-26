-- Your SQL goes here

CREATE TABLE status_of_existence (
  id SERIAL NOT NULL PRIMARY KEY,
  status TEXT NOT NULL
);

INSERT INTO status_of_existence(status) VALUES ('plans_to_purchase'),('owned'),('consumed');
