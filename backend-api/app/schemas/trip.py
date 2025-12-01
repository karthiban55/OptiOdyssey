from pydantic import BaseModel
from datetime import date

class TripCreate(BaseModel):
    user_id: int
    destination: str
    start_date: date
    end_date: date
    budget: float

class TripResponse(TripCreate):
    id: int

    class Config:
        orm_mode = True
