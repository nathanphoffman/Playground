-- Plain SQL that works on Postgres, MySQL and SQL Server (mostly).
CREATE TABLE people (id INT PRIMARY KEY, name VARCHAR(50), age INT);
INSERT INTO people VALUES (1, 'Ada', 36), (2, 'Linus', 55), (3, 'Grace', 85);

SELECT name FROM people WHERE age > 40 ORDER BY age;
SELECT COUNT(*) AS total, AVG(age) AS avg_age FROM people;

DROP TABLE people;
