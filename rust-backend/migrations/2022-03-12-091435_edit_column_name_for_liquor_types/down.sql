-- This file should undo anything in `up.sql`

alter table liquor_types RENAME COLUMN liquor_type_name to liquor_categories_name;