-- This file should undo anything in `up.sql`

alter table wisky_types RENAME COLUMN wisky_type_name to type_name;