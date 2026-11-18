# Celery + Redis

**Run:** three terminals:
1. `docker compose up` (starts Redis)
2. `uv run celery -A tasks worker --loglevel=info`
3. `uv run main.py`

**Try next:** Try retries (`@app.task(bind=True, max_retries=3)`), scheduled tasks with `celery beat`, and `Flower` to watch the queue.
