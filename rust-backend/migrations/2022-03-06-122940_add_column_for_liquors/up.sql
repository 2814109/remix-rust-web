-- Your SQL goes here

ALTER TABLE liquors ADD COLUMN liquor_categories_id INTEGER NOT NULL REFERENCES liquor_categories(id)  DEFAULT 1;
