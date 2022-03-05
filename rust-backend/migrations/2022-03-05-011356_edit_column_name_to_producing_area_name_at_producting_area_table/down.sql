-- This file should undo anything in `up.sql`

alter table producing_areas RENAME COLUMN producing_area_name to name;