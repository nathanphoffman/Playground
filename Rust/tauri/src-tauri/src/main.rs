// A Rust function the web page can call. The UI is HTML/JS in ../ui; the "backend" is this Rust code.
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {name}, from Rust!")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri app");
}
