from tasks import add

result = add.delay(2, 3)  # returns immediately; a worker runs the task
print("queued:", result.id)
print("result:", result.get(timeout=10))
