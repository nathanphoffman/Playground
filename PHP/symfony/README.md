# Symfony

**Run:** `docker run --rm -p 8001:8001 -v "$PWD":/app -w /app php:8-cli php -S 0.0.0.0:8001 -t public` (or `just symfony` from `PHP/`), then open http://localhost:8001/hello/Nate. Runs in Docker; PHP isn't installed locally.

**Try next:** Try `composer require twig` for templates, `symfony/maker-bundle` (`bin/console make:controller`), and Doctrine for the database. Compare it with `../laravel`.
