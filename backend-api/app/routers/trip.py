from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models.trip import Trip
from ..schemas.trip import TripCreate, TripResponse

router = APIRouter(prefix="/trips", tags=["Trips"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=TripResponse)
def create_trip(data: TripCreate, db: Session = Depends(get_db)):
    trip = Trip(**data.dict())
    db.add(trip)
    db.commit()
    db.refresh(trip)
    return trip
