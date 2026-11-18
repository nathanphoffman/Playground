import os

from pydantic import BaseModel
from pydantic_ai import Agent
from pydantic_ai.models.test import TestModel


class City(BaseModel):  # the model's reply is validated against this
    name: str
    country: str


# With no API key it uses TestModel, a fake model that returns made-up data matching City.
# Set ANTHROPIC_API_KEY to talk to a real Claude model instead.
model = "anthropic:claude-sonnet-5-5" if os.getenv("ANTHROPIC_API_KEY") else TestModel()
agent = Agent(model, output_type=City, instructions="Reply with the city the user asks about.")

result = agent.run_sync("Where is the Eiffel Tower?")
print(result.output)
