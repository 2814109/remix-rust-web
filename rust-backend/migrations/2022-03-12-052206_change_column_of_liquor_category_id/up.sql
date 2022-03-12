-- Your SQL goes here

ALTER TABLE liquors DROP COLUMN liquor_category_id;


ALTER TABLE liquors ADD COLUMN liquor_type_id INTEGER NOT NULL REFERENCES liquor_types(id);