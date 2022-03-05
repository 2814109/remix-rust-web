-- Your SQL goes here

CREATE TABLE countries (
  id SERIAL NOT NULL PRIMARY KEY,
  country_name TEXT NOT NULL
);

INSERT INTO countries(country_name) VALUES ('スコットランド'),('アイルランド'),('アメリカ'),('カナダ'),('日本'),('台湾');
