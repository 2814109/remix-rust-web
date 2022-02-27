-- Your SQL goes here

CREATE TABLE liquors (
  id SERIAL NOT NULL PRIMARY KEY,
  producing_area_id INTEGER NOT NULL REFERENCES producing_areas(id),
  age INTEGER NOT NULL,
  label TEXT NOT NULL,
  edition TEXT NOT NULL,
  existence_id INTEGER NOT NULL REFERENCES existence_statuses(id),
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

