import pytest

from greet import greet


def test_greet():
    assert greet("Nate") == "Hello, Nate"


def test_greet_requires_name():
    with pytest.raises(ValueError):
        greet("")


@pytest.mark.parametrize("name", ["Ada", "Grace", "Linus"])  # one test run per value
def test_greet_many(name):
    assert greet(name) == f"Hello, {name}"


@pytest.fixture
def name():  # fixtures are injected by argument name
    return "Fixture"


def test_greet_with_fixture(name):
    assert greet(name).endswith("Fixture")
