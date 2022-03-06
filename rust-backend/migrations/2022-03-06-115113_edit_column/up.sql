-- Your SQL goes here

ALTER TABLE single_malt_wisky_list DROP COLUMN field_id;
ALTER TABLE single_malt_wisky_list ADD COLUMN producing_area_id INTEGER NOT NULL REFERENCES producing_areas(id)  DEFAULT 1;

