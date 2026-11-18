# Ruby on Rails

**Run:** From `Ruby/`:
1. `./rails.sh rails-app bash -c "bin/rails db:migrate && bin/rails db:seed"` (creates the SQLite database, runs migrations and seeds)
2. `./rails.sh rails-app -p 3000 bin/rails server -b 0.0.0.0`
3. `curl localhost:3000/hello/Nate` and `curl localhost:3000/people`

`rails.sh` runs everything in Docker because Ruby isn't installed locally.

**Try next:** Try `bin/rails generate scaffold Post title:string` for a full CRUD set, `bin/rails console` to play with models, validations and `has_many` associations, and `bin/rails test`.
