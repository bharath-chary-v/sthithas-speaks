"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const TOPICS = [
  { title: "Fear of exams", line: "Turning pressure into preparation." },
  { title: "What after college?", line: "Choosing a direction with clarity." },
  { title: "Gratitude to parents & teachers", line: "Recognising the people behind every step." },
  { title: "Realisation & rectification", line: "Owning past choices and setting them right." },
  { title: "Mastering time management", line: "Making every hour count." },
  { title: "Stopping procrastination", line: "From 'tomorrow' to 'today'." },
  { title: "Building strong study habits", line: "Consistency over cramming." },
  { title: "The power of daily routines", line: "Small habits, big outcomes." },
  { title: "How to build a successful career", line: "Skills, attitude and the long game." },
];

export default function Topics() {
  return (
    <section id="topics" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <Reveal className="lg:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot)]">
              College sessions
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mt-5 text-[var(--ink)] text-balance">
              Topics students <em>carry home.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lg text-[var(--ink)]/70 leading-relaxed">
              Our sessions at colleges usually include a mix of these themes — chosen for the batch,
              the season and the moment.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full rounded-2xl bg-[var(--panel)] border border-[var(--line)] p-7 overflow-hidden"
              >
                <span className="absolute -right-2 -top-6 font-display text-[7rem] leading-none text-[var(--ink)]/[0.04] group-hover:text-[var(--spot)]/10 transition-colors duration-300 select-none">
                  {i + 1}
                </span>
                <span className="font-mono text-[11px] text-[var(--spot)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-display text-2xl text-[var(--ink)] mt-4 leading-snug">
                  {t.title}
                </h3>
                <p className="relative mt-2 text-sm text-[var(--ink)]/60">{t.line}</p>
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[var(--spot)] group-hover:w-full transition-all duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
