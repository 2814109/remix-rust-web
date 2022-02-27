-- Your SQL goes here

CREATE TABLE existence_statuses (
  id SERIAL NOT NULL PRIMARY KEY,
  status TEXT NOT NULL
);

INSERT INTO existence_statuses(status) VALUES ('購入予定'),('所有している'),('以前所有していた');
