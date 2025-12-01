import TripPlanner from "../components/TripPlanner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
            Multi-agent travel intelligence
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Design your next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
              optimized odyssey
            </span>
            .
          </h1>
          <p className="text-sm text-slate-300">
            OptiOdyssey orchestrates planner, stay, food and budget agents to
            craft itineraries that adapt to your time, budget and mood.
            You&apos;re using an early prototype wired end-to-end.
          </p>

          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
              🧠 LLM Orchestrator
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
              🗺️ Maps context
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700">
              🍽️ Food & Stay agents
            </span>
          </div>
        </div>

        <div className="mt-2 md:mt-0 text-xs text-slate-400 md:text-right">
          <p className="font-semibold text-slate-300 mb-1">
            Prototype features
          </p>
          <ul className="space-y-1">
            <li>✔ Parallel agents for planning, stay & food</li>
            <li>✔ Agent service decoupled from API backend</li>
            <li>✔ Frontend-integrated maps preview</li>
          </ul>
          <Link
            href="/explore"
            className="inline-flex mt-3 text-[11px] text-blue-300 hover:text-blue-200 underline underline-offset-4"
          >
            Browse curated locations & use cases →
          </Link>
        </div>
      </section>

      {/* Planner + map */}
      <TripPlanner />
    </div>
  );
}
