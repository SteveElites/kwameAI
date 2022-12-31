CREATE DATABASE notes_app;

CREATE TABLE notes (
    id SERIAL PRIMARY KEY NOT NULL,
    note_id CHAR(30) NOT NULL,
    title VARCHAR(255) NOT NULL,
    text VARCHAR(1000),
    date DATE NOT NULL,
    updated DATE 
);