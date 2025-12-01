"use client";

import { useState } from "react";
import axios from "axios";

type StayInfo = {
  hotel: string;
  price_range: string;
};

type FoodInfo = {
  restaurant: string;
  cuisine: string;
};

type ItineraryDay = {
  day: number;
  activity: string;
  stay: StayInfo;
  food: FoodInfo;
};

export default function TripPlanner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState<string>("3");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const planTrip = async () => {
    setError(null);
    setItinerary(null);

    if (!destination || !days) {
      setError("Please enter a destination and number of days.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8001/plan-trip", {
        destination,
        days: Number(days),
      });
      setItinerary(res.data.itinerary);
    } catch (err) {
      console.error(err);
      setError("Could not reach OptiOdyssey Agent service.");
    } finally {
      setLoading(false);
    }
  };

  const mapSrc =
    destination.trim().length > 0
      ? `https://www.google.com/maps?q=${encodeURIComponent(
          destination
        )}&output=embed`
      : `https://www.google.com/maps?q=India&output=embed`;

  return (
    <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-6 items-start">
      {/* Planner card */}
      <section className="card p-6 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Smart Trip Planner
            </h2>
            <p className="text-xs text-slate-400">
              Multi-agent engine that crafts your optimal travel plan.
            </p>
          </div>
          <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[11px] font-semibold">
            Live · Prototype
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Destination</label>
            <input
              type="text"
              placeholder="eg. Goa, Munnar, Jaipur"
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/60"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-400">Trip duration (days)</label>
            <input
              type="number"
              min={1}
              max={14}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/60"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={planTrip}
          disabled={loading}
          className="mt-1 inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:hover:bg-blue-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-500/30 transition-colors"
        >
          {loading ? "Planning your odyssey…" : "Generate Itinerary"}
        </button>

        {error && (
          <p className="text-xs text-red-400 bg-red-950/40 border border-red-900 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        {itinerary && (
          <div className="mt-4 space-y-3 max-h-[340px] overflow-y-auto pr-1">
            {itinerary.map((day) => (
              <article
                key={day.day}
                className="rounded-xl bg-slate-900/70 border border-slate-800 px-4 py-3 text-sm space-y-1.5"
              >
                <h3 className="font-semibold text-blue-300">
                  Day {day.day}
                </h3>
                <p className="flex items-start gap-2">
                  <span>🧭</span>
                  <span>{day.activity}</span>
                </p>
                <p className="flex items-start gap-2">
                  <span>🏨</span>
                  <span>
                    <span className="font-medium">Stay: </span>
                    {day.stay.hotel}{" "}
                    <span className="text-slate-400">
                      ({day.stay.price_range})
                    </span>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span>🍽️</span>
                  <span>
                    <span className="font-medium">Food: </span>
                    {day.food.restaurant} —{" "}
                    <span className="text-slate-400">
                      {day.food.cuisine}
                    </span>
                  </span>
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Map + context card */}
      <section className="card overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
              Location context
            </p>
            <h3 className="text-sm font-semibold">
              {destination || "India / Global"}
            </h3>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-300">
            Maps preview
          </span>
        </div>
        <div className="h-64">
          <iframe
            title="destination-map"
            src={mapSrc}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-4 text-[11px] text-slate-400 space-y-1">
          <p>
            This embedded map is a lightweight preview. In a full version,
            OptiOdyssey would use live routing, congestion data and
            walkability scores to re-balance your day in real time.
          </p>
        </div>
      </section>
    </div>
  );
}
