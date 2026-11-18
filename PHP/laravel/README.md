# Laravel

**Run:** `docker run --rm -p 8000:8000 -v "$PWD":/app -w /app php:8-cli php artisan serve --host=0.0.0.0 --port=8000` (or `just laravel` from `PHP/`), then open http://localhost:8000 and http://localhost:8000/hello/Nate. Runs in Docker; PHP isn't installed locally.

**Try next:** Try `php artisan make:controller`, Blade views in `resources/views`, Eloquent models with `make:model -m`, and `php artisan test`.
