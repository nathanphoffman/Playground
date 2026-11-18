use sqlx::{FromRow, sqlite::SqlitePoolOptions};

#[derive(Debug, FromRow)]
struct Person {
    id: i64,
    name: String,
}

#[tokio::main]
async fn main() -> Result<(), sqlx::Error> {
    // One connection so the in-memory database is shared. Swap the URL for Postgres to match SQL/postgres.
    let pool = SqlitePoolOptions::new().max_connections(1).connect("sqlite::memory:").await?;

    sqlx::query("CREATE TABLE people (id INTEGER PRIMARY KEY, name TEXT NOT NULL)")
        .execute(&pool)
        .await?;
    sqlx::query("INSERT INTO people (name) VALUES (?)").bind("Ada").execute(&pool).await?;

    let people: Vec<Person> = sqlx::query_as("SELECT id, name FROM people").fetch_all(&pool).await?;
    println!("{people:?}");
    Ok(())
}
