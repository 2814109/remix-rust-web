-- This file should undo anything in `up.sql`

ALTER TABLE liquors DROP COLUMN liquor_type_id;


ALTER TABLE liquors ADD COLUMN liquor_category_id INTEGER NOT NULL;