from pydantic import BaseModel, ConfigDict
from sqlalchemy import create_engine, select
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column


class Base(DeclarativeBase):
    pass


class Person(Base):  # SQLAlchemy model: describes the table
    __tablename__ = "people"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]


class PersonOut(BaseModel):  # Pydantic model: validates and shapes the data we return
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str


engine = create_engine("sqlite:///:memory:")
Base.metadata.create_all(engine)

with Session(engine) as session:
    session.add(Person(name="Ada"))
    session.commit()
    for person in session.scalars(select(Person)):
        print(PersonOut.model_validate(person))
