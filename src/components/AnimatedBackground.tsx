"use client";

const LINES = [
  { y: 70, color: "var(--ink)", opacity: 0.1, dur: 26, delay: 0 },
  { y: 150, color: "var(--ochre)", opacity: 0.1, dur: 32, delay: -4 },
  { y: 230, color: "var(--ink)", opacity: 0.08, dur: 22, delay: -10 },
  { y: 320, color: "var(--moss)", opacity: 0.09, dur: 30, delay: -2 },
  { y: 410, color: "var(--ink)", opacity: 0.07, dur: 24, delay: -14 },
  { y: 500, color: "var(--ochre)", opacity: 0.07, dur: 34, delay: -8 },
  { y: 600, color: "var(--ink)", opacity: 0.08, dur: 28, delay: -18 },
  { y: 700, color: "var(--moss)", opacity: 0.07, dur: 26, delay: -6 },
  { y: 800, color: "var(--ink)", opacity: 0.06, dur: 30, delay: -12 },
];

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none contour-bg"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {LINES.map((l, i) => (
          <path
            key={i}
            className="contour-drift"
            d={`M-200 ${l.y} C 200 ${l.y - 50}, 450 ${l.y + 70}, 800 ${l.y} S 1400 ${l.y - 60}, 1900 ${l.y}`}
            fill="none"
            stroke={l.color}
            strokeOpacity={l.opacity}
            strokeWidth={1.1}
            style={{
              animationDuration: `${l.dur}s`,
              animationDelay: `${l.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* soft ambient glow orbs for depth */}
      <div className="ambient-orb absolute -left-32 top-[10%] h-[420px] w-[420px] rounded-full bg-[var(--ochre)]/[0.05] blur-3xl" />
      <div className="ambient-orb-2 absolute right-[-10%] top-[55%] h-[520px] w-[520px] rounded-full bg-[var(--moss)]/[0.06] blur-3xl" />
      <div className="ambient-orb absolute left-[35%] bottom-[-10%] h-[380px] w-[380px] rounded-full bg-[var(--stage-2)]/[0.04] blur-3xl" />
    </div>
  );
}
