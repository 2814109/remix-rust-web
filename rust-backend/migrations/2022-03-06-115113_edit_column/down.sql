ALTER TABLE single_malt_wisky_list ADD COLUMN field_id INTEGER NOT NULL REFERENCES fields(id)  DEFAULT 1;
ALTER TABLE single_malt_wisky_list DROPz COLUMN producing_area_id ;


