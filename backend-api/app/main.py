from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.trip import router as trip_router
from app.database import Base, engine

# Create database tables automatically
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OptiOdyssey Backend API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(trip_router)

@app.get("/")
def root():
    return {"message": "OptiOdyssey Backend Running 🚀"}
