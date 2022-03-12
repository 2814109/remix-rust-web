-- Your SQL goes here

ALTER TABLE liquors ADD COLUMN liquor_category_id INTEGER NOT NULL REFERENCES liquor_categories(id)  DEFAULT 1;
