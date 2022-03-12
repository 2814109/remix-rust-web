-- This file should undo anything in `up.sql`

CREATE TABLE fields (
  id SERIAL NOT NULL PRIMARY KEY,
  country_id INTEGER NOT NULL REFERENCES countries(id),
  producing_area_id INTEGER NOT NULL REFERENCES producing_areas(id) 
);

INSERT INTO fields(country_id, producing_area_id) VALUES (1,1);