from celery import Celery

# Redis is both the queue (broker) and where results are stored (backend).
app = Celery("tasks", broker="redis://localhost:6379/0", backend="redis://localhost:6379/1")


@app.task
def add(x: int, y: int) -> int:
    return x + y
