-- Your SQL goes here

CREATE TABLE producing_areas (
  id SERIAL NOT NULL PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO producing_areas(name) VALUES ('Highlands'),('Speyside'),('Lowlands'),('Campbeltown'),('Islay'),('Islands');



