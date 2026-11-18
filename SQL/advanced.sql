-- Beyond the basics: joins, grouping, CTEs, window functions, indexes and transactions.
-- Works on Postgres and SQL Server (the date/boolean bits are kept simple on purpose).
CREATE TABLE customers (id INT PRIMARY KEY, name VARCHAR(50));
CREATE TABLE orders (id INT PRIMARY KEY, customer_id INT REFERENCES customers(id), total INT);

INSERT INTO customers VALUES (1, 'Ada'), (2, 'Linus'), (3, 'Grace');
INSERT INTO orders VALUES (1, 1, 50), (2, 1, 70), (3, 2, 20);   -- Grace has no orders

-- JOIN: LEFT keeps customers with no orders (their total is NULL)
SELECT c.name, o.total FROM customers c LEFT JOIN orders o ON o.customer_id = c.id ORDER BY c.id, o.id;

-- GROUP BY + HAVING: only customers who spent more than 30
SELECT c.name, SUM(o.total) AS spent
FROM customers c JOIN orders o ON o.customer_id = c.id
GROUP BY c.name HAVING SUM(o.total) > 30;

-- CTE (a named sub-query) + window function: rank customers by spend
WITH spend AS (
    SELECT c.name, COALESCE(SUM(o.total), 0) AS spent
    FROM customers c LEFT JOIN orders o ON o.customer_id = c.id
    GROUP BY c.name
)
SELECT name, spent, RANK() OVER (ORDER BY spent DESC) AS rnk FROM spend;

-- Index: makes lookups by customer_id fast. Check the query plan with EXPLAIN (Postgres) or the actual execution plan (SQL Server).
CREATE INDEX ix_orders_customer ON orders (customer_id);

-- Transaction: both changes happen or neither does
BEGIN TRANSACTION;
UPDATE orders SET total = total - 10 WHERE id = 1;
UPDATE orders SET total = total + 10 WHERE id = 3;
COMMIT;

SELECT id, total FROM orders ORDER BY id;

DROP TABLE orders;
DROP TABLE customers;
