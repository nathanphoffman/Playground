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

deor:
	cd Deor && DEOR_LIB=lib deor main.deor main.rs && rustc main.rs -o hello && ./hello

rexx:
	cd Rexx && rexx main.rexx

python:
	cd Python && python3 main.py

zig:
	cd Zig && zig run main.zig

deor-update:
	cd Deor && just update

# Install dependencies for every pnpm project in the playground
install-all:
	find . -name package.json -not -path '*/node_modules/*' -not -path './Typescript/package.json' -execdir pnpm install \;

# Build every C# project in CSharp/
dotnet-build-all:
	for p in CSharp/*/*.csproj; do dotnet build $p || exit 1; done

php:
	cd PHP && just run

sql-pg:
	cd SQL && just pg
