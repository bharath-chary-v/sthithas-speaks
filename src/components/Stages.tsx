import Reveal from "./Reveal";

type Stage = { name: string; logo?: string };

// Add a logo by dropping the file into /public/stages and setting `logo`.
const GROUPS: { label: string; note?: string; items: Stage[] }[] = [
  {
    label: "Schools",
    note: "…and a number of government schools",
    items: [
      { name: "Little Angels" },
      { name: "Good News" },
      { name: "Krishnaveni Schools" },
      { name: "Shanthiniketan" },
      { name: "Little Flowers" },
      { name: "Nagarjuna NexGen" },
      { name: "Sri Vidya Bharathi" },
    ],
  },
  {
    label: "Colleges",
    items: [
      { name: "St. Mary's Engineering College", logo: "/stages/st-marys.png" },
      { name: "Princeton Engineering College" },
      { name: "Siddhartha Engineering College" },
      { name: "Vaagdevi Group of Colleges", logo: "/stages/vaagdevi.png" },
      { name: "Sri Indu Engineering College" },
      { name: "Gitanjali Degree College" },
      { name: "Akash Degree College" },
      { name: "Sadhana Degree College" },
      { name: "JIMS Homoeopathic College", logo: "/stages/jims.png" },
    ],
  },
  {
    label: "Corporate trainings",
    items: [{ name: "Sai Krishna Jewellers" }, { name: "Cinerous Technologies" }],
  },
];

function Tile({ s }: { s: Stage }) {
  return (
    <div className="group h-28 rounded-2xl bg-[var(--ink)] flex items-center justify-center px-4 text-center ring-1 ring-transparent hover:ring-[var(--spot)] hover:shadow-[0_0_40px_-10px_rgba(255,178,62,0.5)] transition duration-300">
      {s.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.logo}
          alt={s.name}
          loading="lazy"
          className="max-h-16 max-w-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
        />
      ) : (
        <span className="font-display text-lg leading-snug text-[var(--stage)]/75 group-hover:text-[var(--stage)] transition-colors">
          {s.name}
        </span>
      )}
    </div>
  );
}

export default function Stages() {
  return (
    <section id="stages" className="relative bg-[var(--stage-2)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot)]">
            Where we&rsquo;ve shared stages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-5 text-[var(--ink)] text-balance">
            150+ rooms. <em>Thousands</em> of listeners.
          </h2>
        </Reveal>

        <div className="space-y-16">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <Reveal className="flex items-baseline justify-between gap-6 mb-6 border-b border-[var(--ink)]/10 pb-4">
                <h3 className="font-display text-2xl text-[var(--ink)]">{g.label}</h3>
                <span className="font-mono text-xs text-[var(--ink)]/40">
                  {String(g.items.length).padStart(2, "0")}
                  {g.note ? "+" : ""}
                </span>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {g.items.map((s, i) => (
                  <Reveal key={s.name} delay={(i % 4) * 0.05}>
                    <Tile s={s} />
                  </Reveal>
                ))}
              </div>
              {g.note && (
                <p className="mt-5 font-serif italic text-[var(--ink)]/50">{g.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
