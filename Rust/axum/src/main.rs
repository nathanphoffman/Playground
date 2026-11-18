use axum::{Json, Router, extract::Path, routing::get};
use serde_json::{Value, json};

async fn hello(Path(name): Path<String>) -> Json<Value> {
    Json(json!({ "message": format!("Hello, {name}") }))
}

// #[tokio::main] sets up the async runtime that axum runs on.
#[tokio::main]
async fn main() {
    let app = Router::new().route("/hello/{name}", get(hello));
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    println!("Axum listening on http://localhost:3000");
    axum::serve(listener, app).await.unwrap();
}
