"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "./Counter";

const ease = [0.22, 1, 0.36, 1] as const;

const TICKER = [
  "Fear of exams",
  "What after college",
  "Gratitude",
  "Time management",
  "Stop procrastinating",
  "Study habits",
  "Daily routines",
  "Build your career",
];

const STATS = [
  { value: 150, suffix: "+", label: "Talks & seminars delivered" },
  { value: 2, suffix: "", label: "States — Telangana & Andhra Pradesh" },
  { value: 4, suffix: "", label: "Audiences — schools to corporates" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-36 overflow-hidden">
      <div aria-hidden className="spotlight pointer-events-none absolute inset-x-0 top-0 h-[110%] lg:left-[35%]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7 pb-12 lg:pb-24">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--spot)] animate-pulse" />
            Sthitha&rsquo;s Speaks
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.98] mt-6 text-[var(--ink)] text-balance"
          >
            One talk can change
            <br />
            <em>the direction</em> of a life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-8 text-lg text-[var(--ink)]/70 leading-relaxed max-w-xl"
          >
            Talks, seminars and training sessions by <strong className="text-[var(--ink)] font-semibold">Jeevan</strong>{" "}
            for students, teachers, parents and professionals — delivered in schools, colleges and
            companies across Telangana and Andhra Pradesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#invite"
              className="rounded-full bg-[var(--spot)] text-[var(--stage)] px-7 py-3.5 font-semibold hover:bg-[var(--ink)] shadow-[0_0_40px_-8px_rgba(255,178,62,0.55)] transition-colors duration-300"
            >
              Invite Jeevan to your campus
            </a>
            <a
              href="#topics"
              className="rounded-full border border-[var(--ink)]/20 text-[var(--ink)] px-7 py-3.5 font-medium hover:border-[var(--ink)] transition-colors duration-300"
            >
              Explore topics
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="lg:col-span-5 relative self-end"
        >
          {/* stage spotlight */}
          <div className="absolute inset-x-0 bottom-0 h-[85%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,178,62,0.30),transparent_70%)]" />
          <Image
            src="/jeevan.png"
            alt="Jeevan, Founder of Sthitha's and speaker"
            width={673}
            height={1000}
            priority
            sizes="(min-width: 1024px) 480px, 90vw"
            className="relative w-full max-w-md mx-auto h-auto"
          />
          <div className="absolute bottom-8 -left-2 sm:left-0 bg-[var(--panel)]/95 backdrop-blur border border-[var(--line)] rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
            <p className="font-display text-xl text-[var(--ink)] leading-none">Jeevan</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--spot)] mt-2">
              Speaker &middot; Founder, Sthitha&rsquo;s
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-[var(--line)] bg-[var(--panel)]/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]">
          {STATS.map((s) => (
            <div key={s.label} className="py-8 sm:px-8 first:sm:pl-0">
              <Counter
                to={s.value}
                suffix={s.suffix}
                className="font-mono text-5xl text-[var(--ink)]"
              />
              <p className="mt-2 text-sm text-[var(--ink)]/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[var(--spot)] text-[var(--stage)] py-4 -rotate-1 scale-[1.02] my-6">
        <div className="ticker flex w-max gap-10 whitespace-nowrap font-display text-2xl sm:text-3xl uppercase">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t}
              <span aria-hidden className="text-[var(--stage)]/40">&#10022;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
