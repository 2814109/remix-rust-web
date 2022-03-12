-- Your SQL goes here

CREATE TABLE wisky_categories (
  id SERIAL NOT NULL PRIMARY KEY,
  liquor_id TEXT NOT NULL,
  wisky_type_id INTEGER NOT NULL REFERENCES wisky_types(id) 
);