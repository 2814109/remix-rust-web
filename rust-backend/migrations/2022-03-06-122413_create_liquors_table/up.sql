-- Your SQL goes here


CREATE TABLE liquors (
  id SERIAL NOT NULL PRIMARY KEY,
  existence_id INTEGER NOT NULL REFERENCES existence_statuses(id),
  label TEXT NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);
