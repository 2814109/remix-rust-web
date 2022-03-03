-- Your SQL goes here

ALTER TABLE liquors ADD COLUMN country_id INTEGER NOT NULL REFERENCES countries(id)  DEFAULT 1;