-- This file should undo anything in `up.sql`


ALTER TABLE liquors DROP COLUMN field_id;

ALTER TABLE liquors ADD COLUMN country_id INTEGER NOT NULL REFERENCES countries(id)  DEFAULT 1;
ALTER TABLE liquors ADD COLUMN producing_area_id INTEGER NOT NULL REFERENCES countries(id)  DEFAULT 1;

