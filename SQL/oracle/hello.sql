-- Oracle's SQL differs a little from the others: no multi-row VALUES, FETCH FIRST instead of LIMIT, VARCHAR2.
CREATE TABLE people (id NUMBER PRIMARY KEY, name VARCHAR2(50), age NUMBER);
INSERT INTO people VALUES (1, 'Ada', 36);
INSERT INTO people VALUES (2, 'Linus', 55);
INSERT INTO people VALUES (3, 'Grace', 85);

SELECT name FROM people WHERE age > 40 ORDER BY age;
SELECT name FROM people ORDER BY age DESC FETCH FIRST 2 ROWS ONLY;
SELECT COUNT(*) AS total, AVG(age) AS avg_age FROM people;
SELECT SYSDATE FROM dual;   -- `dual` is Oracle's dummy one-row table

DROP TABLE people;
EXIT;
