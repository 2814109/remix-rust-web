-- Your SQL goes here

CREATE TABLE scotch (
  id SERIAL NOT NULL PRIMARY KEY,
  producing_area_id INTEGER NOT NULL REFERENCES producing_areas(id),
  age TEXT NOT NULL,
  label TEXT NOT NULL,
  edition TEXT NOT NULL,
  status TEXT NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL
);

