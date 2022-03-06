-- Your SQL goes here


CREATE TABLE liquor_categories (
  id SERIAL NOT NULL PRIMARY KEY,
  liquor_categories_name TEXT NOT NULL
);

INSERT INTO liquor_categories(liquor_categories_name) VALUES ('wine'),('wisky'),('Brandy');