# Prometheus + Grafana

**Run:** `docker compose up`, then open Prometheus at http://localhost:9090 and Grafana at http://localhost:3001 (login `admin` / `admin`). The Prometheus data source is already set up.

**Try next:** In Prometheus, run `rate(node_cpu_seconds_total[1m])`. In Grafana, build a dashboard from the same query. Then expose `/metrics` from one of the playground servers (e.g. `prom-client` in `Typescript/node/express`) and add it to `prometheus.yml`.
