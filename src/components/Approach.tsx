import Reveal from "./Reveal";

const FACTORS = [
  {
    k: "The academic calendar",
    v: "Exam fear before exams, direction before placements, fresh starts at the beginning of the year.",
  },
  {
    k: "What's happening now",
    v: "Current trends and issues young people are actually facing — addressed directly.",
  },
  {
    k: "The city & its opportunities",
    v: "Examples and career paths that make sense for where the audience lives and studies.",
  },
  {
    k: "The people in the room",
    v: "Students, teachers, parents or employees — the language and depth change with the audience.",
  },
];

export default function Approach() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot)]">
            How sessions are designed
          </span>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mt-5 text-[var(--ink)] text-balance">
            No two talks are <em>the same.</em>
          </h2>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          {FACTORS.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.06}>
              <div className="grid sm:grid-cols-5 gap-2 sm:gap-8 py-7 border-b border-[var(--line)] first:pt-0">
                <p className="sm:col-span-2 font-display text-xl text-[var(--ink)]">{f.k}</p>
                <p className="sm:col-span-3 text-[var(--ink)]/65 leading-relaxed">{f.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
