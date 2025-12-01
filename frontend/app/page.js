"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [itinerary, setItinerary] = useState(null);

  const planTrip = async () => {
    const res = await axios.post("http://127.0.0.1:8001/plan-trip", {
      destination,
      days: Number(days),
    });
    setItinerary(res.data.itinerary);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        OptiOdyssey ✈️ Travel Planner
      </h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-xl space-y-4 w-[400px]">
        <input
          type="text"
          placeholder="Enter Destination"
          className="w-full p-2 rounded text-black"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Days"
          className="w-full p-2 rounded text-black"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded font-bold"
          onClick={planTrip}
        >
          Plan Trip
        </button>
      </div>

      {itinerary && (
        <div className="mt-10 w-full max-w-3xl space-y-4">
          {itinerary.map((day, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl font-bold text-blue-300">Day {day.day}</h2>
              <p>🧭 {day.activity}</p>
              <p>🏨 Stay: {day.stay.hotel} ({day.stay.price_range})</p>
              <p>🍽️ Food: {day.food.restaurant} — {day.food.cuisine}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
