-- Your SQL goes here

ALTER TABLE producing_areas ADD COLUMN country_id INTEGER NOT NULL REFERENCES countries(id)  DEFAULT 1;
