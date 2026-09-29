"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "Sthithakoushalamtech@gmail.com";
const CONTACT_PHONE = "+91 73864 68158";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `[Speaks Invite] ${data.session} — ${data.organisation}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json();
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.message || "Failed to send");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="invite" className="relative bg-[var(--stage-2)] text-[var(--ink)] py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,178,62,0.18),transparent_65%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--spot-bright)]">
            Invite Jeevan
          </span>
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mt-5 text-balance">
            Bring a session to your <em>campus</em> or team.
          </h2>
          <p className="mt-6 text-[var(--ink)]/65 leading-relaxed text-lg max-w-md">
            Tell us about your audience and timing. We&rsquo;ll get back to you to shape a session
            around it.
          </p>

          <div className="mt-12 pt-10 border-t border-[var(--ink)]/10 space-y-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 group">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--spot-bright)] w-14">Email</span>
              <span className="text-[var(--ink)]/85 group-hover:text-[var(--ink)] transition-colors break-all">
                {CONTACT_EMAIL}
              </span>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-4 group">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--spot-bright)] w-14">Phone</span>
              <span className="text-[var(--ink)]/85 group-hover:text-[var(--ink)] transition-colors">
                {CONTACT_PHONE}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <div className="relative bg-[var(--panel)] text-[var(--ink)] rounded-3xl p-8 sm:p-10 border border-[var(--line)]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Your name" name="name" required />
                    <Field label="Phone number" name="phone" type="tel" required />
                  </div>
                  <Field label="Email address" name="email" type="email" required />
                  <Field label="School / college / company" name="organisation" required />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink)]/50">
                        Session type
                      </label>
                      <select
                        name="session"
                        required
                        className="mt-2 w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--spot)] outline-none transition-colors"
                      >
                        <option value="">Select</option>
                        <option>Student seminar</option>
                        <option>Career guidance</option>
                        <option>Teacher–parent engagement</option>
                        <option>Realisation session</option>
                        <option>Corporate training</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <Field label="Expected audience size" name="audience" />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink)]/50">
                      Preferred dates / message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      className="mt-2 w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--spot)] outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-3 rounded-full bg-[var(--ink)] text-[var(--ink)] py-3.5 font-medium hover:bg-[var(--spot)] transition-colors duration-300 disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Request a Session"}
                  </button>
                  {error && (
                    <p className="text-sm text-red-400">
                      {error} Please try again or email us at {CONTACT_EMAIL}.
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-start py-10"
                >
                  <div className="h-14 w-14 rounded-full bg-[var(--spot)] text-[var(--panel)] flex items-center justify-center mb-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5L9 18L20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl mb-2">Request received.</h3>
                  <p className="text-[var(--ink)]/65">
                    Thank you — our team will reach out shortly to plan the session.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-wider text-[var(--ink)]/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-[var(--line)] py-2.5 focus:border-[var(--spot)] outline-none transition-colors"
      />
    </div>
  );
}
