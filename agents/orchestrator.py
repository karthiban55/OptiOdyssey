from .planner_agent import planner_agent
from .stay_agent import stay_agent
from .food_agent import food_agent

async def generate_itinerary(req):
    destination = req.get("destination")
    days = req.get("days", 1)

    base_plan = planner_agent(destination, days)

    enriched = []
    for day in base_plan:
        day["stay"] = stay_agent(destination)
        day["food"] = food_agent(destination)
        enriched.append(day)

    return enriched
