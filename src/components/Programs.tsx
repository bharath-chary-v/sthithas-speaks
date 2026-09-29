import Reveal from "./Reveal";

const PROGRAMS = [
  {
    title: "Corporate employee trainings",
    desc: "Sessions for teams on mindset, ownership, discipline and growth — designed around the company and its people.",
    icon: (
      <path d="M4 20V9l8-5 8 5v11M9 20v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Teacher–parent engagement sessions",
    desc: "Bringing teachers and parents onto the same page, so students feel supported at school and at home.",
    icon: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Realisation sessions",
    desc: "Reflective sessions that help students look back honestly, value the people around them and set things right.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Career guidance coaching",
    desc: "Clear, practical direction on what comes after school or college — courses, skills and the path to a career.",
    icon: (
      <path d="M4 18l6-6 4 4 6-8M14 8h6v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative bg-[var(--stage-2)] text-[var(--ink)] py-28 lg:py-36 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot-bright)]">
            Specialised programs
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-5 text-balance">
            Beyond the <em>regular</em> training session.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl bg-[var(--panel)] border border-[var(--line)] p-8 sm:p-10 hover:border-[var(--spot)]/50 hover:shadow-[0_0_60px_-20px_rgba(255,178,62,0.35)] transition duration-300">
                <div className="flex items-start justify-between">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-10 w-10 text-[var(--spot-bright)]"
                  >
                    {p.icon}
                  </svg>
                  <span className="font-mono text-xs text-[var(--ink)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl mt-8">{p.title}</h3>
                <p className="mt-3 text-[var(--ink)]/60 leading-relaxed max-w-md">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
