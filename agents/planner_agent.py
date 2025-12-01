def planner_agent(destination, days):
    itinerary = []
    for day in range(days):
        itinerary.append({
            "day": day + 1,
            "activity": f"Explore popular attractions in {destination}",
        })
    return itinerary
