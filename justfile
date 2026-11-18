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
	cd CSharp/libraries/nuget-package && dotnet pack -c Release -o ../feed
	for p in CSharp/*/*/*.csproj; do dotnet build $p || exit 1; done

php:
	cd PHP && just run

sql-pg:
	cd SQL && just pg

[group('typescript')]
astro:
	cd Typescript/astro && pnpm install && pnpm dev

[group('typescript')]
bun:
	cd Typescript/bun && pnpm install && pnpm start

[group('typescript')]
electron:
	cd Typescript/electron && pnpm install && pnpm start

[group('typescript')]
gulp:
	cd Typescript/gulp && pnpm install && pnpm start

[group('typescript')]
jest:
	cd Typescript/jest && pnpm install && pnpm test

[group('typescript')]
mithril:
	cd Typescript/mithril && pnpm install && pnpm dev

[group('typescript')]
mocha-chai:
	cd Typescript/mocha-chai && pnpm install && pnpm test

[group('typescript')]
playwright:
	cd Typescript/playwright && pnpm install && pnpm test

[group('typescript')]
puppeteer:
	cd Typescript/puppeteer && pnpm install && pnpm start

[group('typescript')]
vite:
	cd Typescript/vite && pnpm install && pnpm dev

[group('typescript')]
vitest:
	cd Typescript/vitest && pnpm install && pnpm test

[group('typescript')]
webpack:
	cd Typescript/webpack && pnpm install && pnpm start

[group('typescript')]
zod:
	cd Typescript/zod && pnpm install && pnpm start

[group('typescript')]
react:
	cd Typescript/react && pnpm install && pnpm dev

[group('typescript')]
vue:
	cd Typescript/vue && pnpm install && pnpm dev

[group('typescript')]
eslint-prettier:
	cd Typescript/eslint-prettier && pnpm install && pnpm lint

[group('typescript')]
node:
	cd Typescript/node && pnpm install && pnpm start

# Needs wasm-pack
[group('typescript')]
wasm:
	cd Typescript/wasm && pnpm install && pnpm build && pnpm start

# Needs ANTHROPIC_API_KEY
[group('node')]
claude-api:
	cd Typescript/node/claude-api && pnpm install && pnpm start

[group('node')]
drizzle:
	cd Typescript/node/drizzle && pnpm install && pnpm start

[group('node')]
event-driven:
	cd Typescript/node/event-driven && pnpm install && pnpm start

[group('node')]
fastify:
	cd Typescript/node/fastify && pnpm install && pnpm start

[group('node')]
graphql:
	cd Typescript/node/graphql && pnpm install && pnpm start

[group('node')]
json-xml:
	cd Typescript/node/json-xml && pnpm install && pnpm start

[group('node')]
microservices:
	cd Typescript/node/microservices && pnpm install && pnpm start

[group('node')]
nestjs:
	cd Typescript/node/nestjs && pnpm install && pnpm start

[group('node')]
oauth:
	cd Typescript/node/oauth && pnpm install && pnpm start

[group('node')]
opentelemetry:
	cd Typescript/node/opentelemetry && pnpm install && pnpm start

[group('node')]
rest:
	cd Typescript/node/rest && pnpm install && pnpm start

[group('node')]
serverless:
	cd Typescript/node/serverless && pnpm install && pnpm start

[group('node')]
socketio:
	cd Typescript/node/socketio && pnpm install && pnpm start

[group('node')]
trpc:
	cd Typescript/node/trpc && pnpm install && pnpm start

[group('node')]
webhooks:
	cd Typescript/node/webhooks && pnpm install && pnpm start

[group('react')]
axios:
	cd Typescript/react/axios && pnpm install && pnpm dev

[group('react')]
chartjs:
	cd Typescript/react/chartjs && pnpm install && pnpm dev

[group('react')]
cypress:
	cd Typescript/react/cypress && pnpm install && pnpm cy:run

[group('react')]
emotion:
	cd Typescript/react/emotion && pnpm install && pnpm dev

[group('react')]
highcharts:
	cd Typescript/react/highcharts && pnpm install && pnpm dev

[group('react')]
hook-form:
	cd Typescript/react/hook-form && pnpm install && pnpm dev

[group('react')]
leaflet:
	cd Typescript/react/leaflet && pnpm install && pnpm dev

# Needs a Mapbox token (see its README)
[group('react')]
mapbox:
	cd Typescript/react/mapbox && pnpm install && pnpm dev

[group('react')]
msw:
	cd Typescript/react/msw && pnpm install && pnpm test

[group('react')]
mui:
	cd Typescript/react/mui && pnpm install && pnpm dev

[group('react')]
next:
	cd Typescript/react/next && pnpm install && pnpm dev

[group('react')]
react-native:
	cd Typescript/react/react-native && pnpm install && pnpm web

[group('react')]
redux:
	cd Typescript/react/redux && pnpm install && pnpm dev

[group('react')]
router:
	cd Typescript/react/router && pnpm install && pnpm dev

[group('react')]
sass:
	cd Typescript/react/sass && pnpm install && pnpm dev

[group('react')]
tanstack-query:
	cd Typescript/react/tanstack-query && pnpm install && pnpm dev

[group('react')]
testing-library:
	cd Typescript/react/testing-library && pnpm install && pnpm test

[group('react')]
zustand:
	cd Typescript/react/zustand && pnpm install && pnpm dev

# Start the remote first, then the host
[group('react')]
mf-host:
	cd Typescript/react/module-federation/host && pnpm install && pnpm start

[group('react')]
mf-remote:
	cd Typescript/react/module-federation/remote && pnpm install && pnpm start

[group('typescript')]
nuxt:
	cd Typescript/vue/nuxt && pnpm install && pnpm dev

[group('web')]
bootstrap:
	cd CSS/bootstrap && pnpm install && pnpm dev

[group('web')]
tailwind:
	cd CSS/tailwind && pnpm install && pnpm dev

[group('web')]
jquery:
	cd JavaScript/jquery && pnpm install && pnpm dev

[group('database')]
redis:
	cd Redis && docker compose up -d && pnpm install && pnpm start

[group('database')]
mongo:
	cd MongoDB && docker compose up -d && pnpm install && pnpm start

[group('database')]
dynamo:
	cd DynamoDB && docker compose up -d && pnpm install && pnpm start

[group('database')]
kafka:
	cd Kafka && docker compose up -d && sleep 10 && pnpm install && pnpm start

[group('database')]
mysql:
	cd SQL && just mysql

[group('database')]
sqlserver:
	cd SQL && just sqlserver

[group('database')]
sqlite:
	cd SQL && just sqlite

[group('php')]
php-serve:
	cd PHP && just serve

[group('csharp')]
aspnet-webapi:
	cd CSharp/web/aspnet-webapi && dotnet run

[group('csharp')]
aws-sdk:
	cd Cloud/aws && docker compose up -d
	cd CSharp/cloud/aws-sdk && dotnet run

# Needs credentials and a real account (see its README)
[group('csharp')]
azure-ad:
	cd CSharp/cloud/azure-ad && dotnet run

# Needs credentials and a real account (see its README)
[group('csharp')]
azure-eventhubs:
	cd CSharp/cloud/azure-eventhubs && dotnet run

# Needs credentials and a real account (see its README)
[group('csharp')]
azure-servicebus:
	cd CSharp/cloud/azure-servicebus && dotnet run

[group('csharp')]
blazor:
	cd CSharp/web/blazor && dotnet run

[group('csharp')]
dapper:
	cd CSharp/data/dapper && dotnet run

[group('csharp')]
fluentvalidation:
	cd CSharp/libraries/fluentvalidation && dotnet run

[group('csharp')]
hangfire:
	cd CSharp/web/hangfire && dotnet run

[group('csharp')]
linq:
	cd CSharp/libraries/linq && dotnet run

[group('csharp')]
mapster:
	cd CSharp/libraries/mapster && dotnet run

[group('csharp')]
mediatr:
	cd CSharp/libraries/mediatr && dotnet run

[group('csharp')]
minimal-api:
	cd CSharp/web/minimal-api && dotnet run

[group('csharp')]
mvc:
	cd CSharp/web/mvc && dotnet run

[group('csharp')]
polly:
	cd CSharp/libraries/polly && dotnet run

[group('csharp')]
refit:
	cd CSharp/libraries/refit && dotnet run

[group('csharp')]
serilog:
	cd CSharp/libraries/serilog && dotnet run

[group('csharp')]
signalr:
	cd CSharp/web/signalr && dotnet run

# Needs credentials and a real account (see its README)
[group('csharp')]
snowflake:
	cd CSharp/data/snowflake && dotnet run

# Needs credentials and a real account (see its README)
[group('csharp')]
stripe:
	cd CSharp/libraries/stripe && dotnet run

[group('csharp')]
wcf-soap:
	cd CSharp/web/wcf-soap && dotnet run

[group('csharp')]
efcore:
	cd SQL/postgres && docker compose up -d
	cd CSharp/data/efcore && dotnet run

[group('csharp')]
aws-lambda:
	cd CSharp/cloud/aws-lambda && dotnet build

# Needs Azure Functions Core Tools
[group('csharp')]
azure-functions:
	cd CSharp/cloud/azure-functions && func start

# Needs Docker
[group('csharp')]
testcontainers:
	cd CSharp/testing/testcontainers && dotnet test

[group('csharp')]
nunit-moq:
	cd CSharp/testing/nunit-moq && dotnet test

[group('csharp')]
mstest-moq:
	cd CSharp/testing/mstest-moq && dotnet test

[group('csharp')]
xunit-moq:
	cd CSharp/testing/xunit-moq && dotnet test

[group('python')]
flask:
	cd Python/flask && uv run main.py

[group('python')]
fastapi:
	cd Python/fastapi && uv run fastapi dev main.py

[group('python')]
django:
	cd Python/django && uv run manage.py runserver

[group('python')]
pandas:
	cd Python/pandas && uv run main.py

[group('devops')]
bash:
	cd DevOps/bash && ./hello.sh Nate

[group('devops')]
docker:
	cd DevOps/docker && just run

# Then open http://localhost:8088
[group('devops')]
nginx:
	cd DevOps/nginx && docker compose up -d

[group('devops')]
railway:
	cd DevOps/railway && pnpm install && pnpm start

[group('devops')]
terraform:
	cd DevOps/terraform && just apply

[group('devops')]
terraform-destroy:
	cd DevOps/terraform && just destroy

# Needs a cluster (kind or minikube)
[group('devops')]
k8s:
	cd DevOps/kubernetes && kubectl apply -f hello.yaml

[group('cloud')]
aws:
	cd Cloud/aws && docker compose up -d

# Starts Azurite (fake Azure Storage)
[group('cloud')]
azure:
	cd Cloud/azure && docker compose up -d

# Needs system libs (see its README)
[group('rust')]
tauri:
	cd Rust/tauri/src-tauri && cargo run

# Needs the Flutter SDK (not installed)
[group('flutter')]
flutter:
	cd Flutter && flutter run -d chrome

[group('typescript')]
angular:
	cd Typescript/angular && pnpm install && pnpm dev

[group('typescript')]
svelte:
	cd Typescript/svelte && pnpm install && pnpm dev

[group('node')]
express:
	cd Typescript/node/express && pnpm install && pnpm start

[group('node')]
prisma:
	cd Typescript/node/prisma && pnpm install && pnpm generate && pnpm prisma db push && pnpm start

[group('php')]
laravel:
	cd PHP && just laravel

[group('rust')]
axum:
	cd Rust/axum && cargo run

[group('go')]
gin:
	cd Go/gin && go run .

[group('python')]
pytest:
	cd Python/pytest && uv run pytest -v

[group('python')]
sqlalchemy:
	cd Python/sqlalchemy && uv run main.py

[group('devops')]
prometheus-grafana:
	cd DevOps/prometheus-grafana && docker compose up

[group('node')]
hono:
	cd Typescript/node/hono && pnpm install && pnpm start

[group('typescript')]
sveltekit:
	cd Typescript/sveltekit && pnpm install && pnpm dev

[group('react')]
storybook:
	cd Typescript/react/storybook && pnpm install && pnpm storybook

# Needs 3 terminals, see its README
[group('python')]
celery:
	cd Python/celery && docker compose up -d && uv run celery -A tasks worker --loglevel=info

[group('python')]
pydantic-ai:
	cd Python/pydantic-ai && uv run main.py

[group('rust')]
sqlx:
	cd Rust/sqlx && cargo run

[group('go')]
cobra:
	cd Go/cobra && go run . greet Nate

[group('php')]
symfony:
	cd PHP && just symfony

[group('devops')]
helm:
	cd DevOps/helm-argocd && docker run --rm -v "$PWD":/w -w /w alpine/helm template demo hello

[group('database')]
rabbitmq:
	cd RabbitMQ && docker compose up -d && pnpm install && pnpm start

[group('web')]
razor-pages:
	cd CSharp/web/razor-pages && dotnet run

# Packs the library into a local feed first, then runs the app that uses it
[group('libraries')]
nuget:
	cd CSharp/libraries/nuget-package && dotnet pack -c Release -o ../feed
	cd CSharp/libraries/nuget-consumer && dotnet run

[group('libraries')]
nservicebus:
	cd CSharp/libraries/nservicebus && dotnet run

[group('java')]
java:
	cd Java/hello && java Hello.java

# Java projects run Maven in Docker (see Java/mvn.sh)
[group('java')]
spring-boot:
	cd Java && ./mvn.sh spring-boot -p 8080 spring-boot:run

[group('java')]
spring-data-jpa:
	cd Java && ./mvn.sh spring-data-jpa spring-boot:run

[group('java')]
junit-mockito:
	cd Java && ./mvn.sh junit-mockito test

[group('java')]
quarkus:
	cd Java && ./mvn.sh quarkus -p 8080 quarkus:dev -Dquarkus.http.host=0.0.0.0 -Dquarkus.console.enabled=false

[group('kotlin')]
kotlin:
	cd Kotlin && ./gradle.sh hello run

[group('kotlin')]
ktor:
	cd Kotlin && ./gradle.sh ktor -p 8080 run

# Runs in Docker, see Ruby/rails.sh. First time: set up the database (see its README)
[group('ruby')]
rails:
	cd Ruby && ./rails.sh rails-app -p 3000 bin/rails server -b 0.0.0.0

[group('java')]
spring-security:
	cd Java && ./mvn.sh spring-security -p 8080 spring-boot:run

[group('auth')]
keycloak:
	cd Auth/keycloak && docker compose up -d && pnpm install && pnpm start

[group('web')]
identity:
	cd CSharp/web/identity && dotnet run

[group('web')]
grpc-csharp:
	cd CSharp/web/grpc && dotnet run

[group('go')]
grpc-server:
	cd Go/grpc && go run ./server

[group('go')]
grpc-client:
	cd Go/grpc && go run ./client Nate

[group('node')]
grpc-node-server:
	cd Typescript/node/grpc && pnpm install && pnpm server

[group('node')]
grpc-node-client:
	cd Typescript/node/grpc && pnpm client

[group('vue')]
pinia:
	cd Typescript/vue/pinia && pnpm install && pnpm dev

[group('vue')]
vue-router:
	cd Typescript/vue/router && pnpm install && pnpm dev

[group('vue')]
vuetify:
	cd Typescript/vue/vuetify && pnpm install && pnpm dev

[group('vue')]
primevue:
	cd Typescript/vue/primevue && pnpm install && pnpm dev

# Vitest + Vue Test Utils + accessibility (axe) tests
[group('vue')]
vue-testing:
	cd Typescript/vue/testing && pnpm install && pnpm test

[group('database')]
sql-oracle:
	cd SQL && just oracle

[group('database')]
sql-advanced-pg:
	cd SQL && just advanced-pg

[group('web')]
application-insights:
	cd CSharp/cloud/application-insights && dotnet run

# Needs an Azure Event Grid topic, see its README
[group('cloud')]
eventgrid:
	cd CSharp/cloud/azure-eventgrid && dotnet run

[group('libraries')]
ddd:
	cd CSharp/patterns/ddd && dotnet run

# Full-stack todo app: run both, in two terminals
[group('fullstack')]
fullstack-api:
	cd FullStack/api && dotnet run --urls http://localhost:5100

[group('fullstack')]
fullstack-web:
	cd FullStack/web && pnpm install && pnpm dev
