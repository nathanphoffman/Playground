import sqlite3
from pathlib import Path

# SQLite is a database in a single file (or in memory). No server, no Docker. Python ships with it.
db = sqlite3.connect(":memory:")  # use "playground.db" to keep data in a file
db.executescript(Path(__file__).with_name("hello.sql").read_text())  # hello.sql drops its own table at the end

db.executescript("CREATE TABLE notes (id INTEGER PRIMARY KEY, text TEXT); INSERT INTO notes (text) VALUES ('Hello, SQLite');")
print(db.execute("SELECT * FROM notes").fetchall())
