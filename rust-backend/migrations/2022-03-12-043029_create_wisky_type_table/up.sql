-- Your SQL goes here

CREATE TABLE wisky_types (
  id SERIAL NOT NULL PRIMARY KEY,
  type_name TEXT NOT NULL
);

INSERT INTO wisky_types(type_name) VALUES ('シングルモルト'),('ブレンデッド');
