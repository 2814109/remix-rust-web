-- Your SQL goes here



ALTER TABLE liquors ADD COLUMN country_id INTEGER NOT NULL REFERENCES countries(id)  DEFAULT 1;


-- CREATE TABLE fields (
--   id SERIAL NOT NULL PRIMARY KEY,
--   country_id INTEGER NOT NULL REFERENCES countries(id),
--   producing_area_id INTEGER NOT NULL REFERENCES producing_areas(id) 
-- );