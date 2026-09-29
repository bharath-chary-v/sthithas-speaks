import Image from "next/image";

const SISTERS = [
  { href: "https://sthithakoushalam.tech/", label: "SthithaKoushalam Tech" },
  { href: "https://placements.sthithakoushalam.tech/", label: "Training & Placement" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070605] border-t border-[var(--line)] text-[var(--ink)]/60 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-sthithas-light.png"
            alt="Sthitha's"
            width={1219}
            height={758}
            className="h-16 w-auto"
          />
          <span className="font-serif italic text-xl text-[var(--spot-bright)]">Speaks</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--ink)]/40">
            One umbrella
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {SISTERS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] transition-colors"
              >
                {s.label} &#8599;
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs">&copy; {new Date().getFullYear()} Sthitha&rsquo;s Speaks. All rights reserved.</p>
      </div>
    </footer>
  );
}
