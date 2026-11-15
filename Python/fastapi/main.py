from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):  # request bodies are validated from the type hints
    name: str
    price: float


@app.get("/")
def hello() -> dict[str, str]:
    return {"message": "Hello, FastAPI"}


@app.post("/items")
def create_item(item: Item) -> Item:
    return item
