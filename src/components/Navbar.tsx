"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About Jeevan" },
  { href: "#programs", label: "Programs" },
  { href: "#topics", label: "Topics" },
  { href: "#stages", label: "Stages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--stage)]/90 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-sthithas-light.png"
            alt="Sthitha's"
            width={1219}
            height={758}
            priority
            className="h-14 w-auto"
          />
          <span className="font-serif italic text-2xl text-[var(--spot)] group-hover:translate-x-0.5 transition-transform duration-300">
            Speaks
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-9">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative whitespace-nowrap font-medium text-sm text-[var(--ink)]/75 hover:text-[var(--ink)] transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--spot)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#invite"
            className="whitespace-nowrap rounded-full bg-[var(--ink)] text-[var(--stage)] text-sm font-medium px-5 py-2.5 hover:bg-[var(--spot)] transition-colors duration-300"
          >
            Invite Jeevan
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-[var(--ink)]"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-6 bg-[var(--ink)]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-[var(--ink)]"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[var(--stage)] border-b border-[var(--line)]"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[var(--ink)]/80"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#invite"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--ink)] text-[var(--stage)] text-sm font-medium px-5 py-3 text-center"
              >
                Invite Jeevan
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
