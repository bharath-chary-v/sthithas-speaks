import Reveal from "./Reveal";

const REACH = [
  "Secondary schools",
  "Intermediate colleges",
  "Degree colleges",
  "B.Tech & professional colleges",
  "Corporate teams in Hyderabad",
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot)]">
            About the venture
          </span>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mt-5 text-[var(--ink)] text-balance">
            A stage for <em>honest</em> conversations.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="text-lg text-[var(--ink)]/75 leading-relaxed">
            Sthitha&rsquo;s Speaks is the venture through which Jeevan delivers speeches and seminars,
            primarily for schools and colleges. So far he has delivered{" "}
            <strong className="text-[var(--ink)]">150+ sessions</strong> across Telangana and
            Andhra Pradesh — along with corporate trainings in Hyderabad.
          </p>
          <p className="mt-6 text-lg text-[var(--ink)]/75 leading-relaxed">
            Every session is built around the audience in the room: where they are in the academic
            year, what&rsquo;s happening around them, and the opportunities in their city.
          </p>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {REACH.map((r) => (
              <li
                key={r}
                className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--ink)]/80"
              >
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
