const destinations = [
  {
    name: "Goa · Coastal Escape",
    description: "Beaches, nightlife, cafes and relaxed itineraries.",
    tags: ["Beach", "Nightlife", "Cafes"],
    bestFor: "Long weekends · Friends · Solo",
  },
  {
    name: "Munnar · Hill Retreat",
    description: "Tea estates, viewpoints and slow misty mornings.",
    tags: ["Hills", "Nature", "Slow travel"],
    bestFor: "Peaceful breaks · Couples",
  },
  {
    name: "Jaipur · Heritage Circuit",
    description: "Forts, palaces and food walks in the Pink City.",
    tags: ["Culture", "Architecture", "Food"],
    bestFor: "First-time travellers · Family",
  },
];

const foodThemes = [
  {
    title: "Local-first dining",
    description:
      "Agent prioritizes local, highly-rated spots over generic chains.",
  },
  {
    title: "Diet-aware planning",
    description:
      "Vegetarian, vegan or high-protein preferences carried across the itinerary.",
  },
  {
    title: "Budget-balanced meals",
    description:
      "Fine dining evenings automatically balanced with budget lunches.",
  },
];

const stayPatterns = [
  {
    title: "Walkable cores",
    description:
      "Stay suggestions prefer neighborhoods where most day plans are walkable.",
  },
  {
    title: "Check-in aware",
    description:
      "Early arrival / late checkout constraints influence the first and last day plans.",
  },
  {
    title: "Safety-first layers",
    description:
      "Future version can layer crime, lighting and review data for confident solo travel.",
  },
];

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Explore OptiOdyssey</h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          This page showcases how OptiOdyssey could extend into richer use-cases:
          curated destinations, food logic, stay patterns and health-aware routing.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {destinations.map((d) => (
          <article key={d.name} className="card p-4 space-y-2">
            <h2 className="text-sm font-semibold">{d.name}</h2>
            <p className="text-xs text-slate-300">{d.description}</p>
            <p className="text-[11px] text-slate-400">
              Best for: <span className="font-medium text-slate-200">{d.bestFor}</span>
            </p>
            <div className="flex flex-wrap gap-1 mt-1">
              {d.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-[2px] rounded-full bg-slate-900 border border-slate-700 text-[10px] text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <article className="card p-4 space-y-2">
          <h2 className="text-sm font-semibold">Food intelligence</h2>
          <p className="text-xs text-slate-300">
            Food agents can sync with your preferences, time of day and walking
            radius, while avoiding repetitive choices across the trip.
          </p>
          <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
            {foodThemes.map((f) => (
              <li key={f.title}>
                <span className="font-semibold text-slate-100">{f.title} · </span>
                {f.description}
              </li>
            ))}
          </ul>
        </article>

        <article className="card p-4 space-y-2">
          <h2 className="text-sm font-semibold">Stay intelligence</h2>
          <p className="text-xs text-slate-300">
            Stay agents can optimize around commute time, safety layers and
            late-night access while respecting your budget band.
          </p>
          <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
            {stayPatterns.map((s) => (
              <li key={s.title}>
                <span className="font-semibold text-slate-100">{s.title} · </span>
                {s.description}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
