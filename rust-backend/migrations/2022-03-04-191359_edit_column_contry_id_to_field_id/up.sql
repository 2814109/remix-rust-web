-- Your SQL goes here

ALTER TABLE liquors DROP COLUMN country_id;
ALTER TABLE liquors DROP COLUMN producing_area_id;


ALTER TABLE liquors ADD COLUMN field_id INTEGER NOT NULL REFERENCES fields(id) DEFAULT 1;
