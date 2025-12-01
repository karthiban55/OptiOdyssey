from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .orchestrator import generate_itinerary

app = FastAPI(title="OptiOdyssey Agent Service", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],       # <--- VERY IMPORTANT (accept POST + OPTIONS)
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "OptiOdyssey Agent Service Running 🤖"}

@app.post("/plan-trip")
async def plan_trip(request: dict):
    itinerary = await generate_itinerary(request)
    return {"itinerary": itinerary}
