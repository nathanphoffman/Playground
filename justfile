default:
	@just --list

ts:
	cd Typescript && npm install && npm start

hare:
	cd Hare && just build && just run

rust:
	cd Rust && cargo build && cargo run

mojo:
	cd Mojo && .venv/bin/mojo build main.mojo -o hello && ./hello

c:
	cd C && gcc main.c -o hello && ./hello

fortran:
	cd Fortran && gfortran -std=f95 -Wall main.f90 -o hello && ./hello

csharp:
	cd CSharp && dotnet run

go:
	cd Go && go run .
