"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-100 shadow-card">
              {/* Replace src with your portrait */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait.png"
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                }}
              />
              <div className="absolute inset-0 -z-10 flex items-center justify-center dotted-grid">
                <span className="font-display text-[12rem] text-cream-300">
                  S
                </span>
              </div>
              {/* corner sticker */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                    Engineer / Builder
                  </p>
                  <p className="font-display text-base tracking-tight text-ink">
                    {profile.name}
                  </p>
                </div>
                <span className="rounded-full bg-ink px-3 py-1 text-[10px] uppercase tracking-widest text-cream-50">
                  est. 2021
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: bio */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute"
            >
              <span className="font-mono text-moss-500">09</span>
              <span className="h-px w-10 bg-cream-300" />
              <span>About</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-4xl tracking-tightest text-ink md:text-5xl"
            >
              I like building things that work — and keep working at scale.
            </motion.h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
              {profile.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cream-300 bg-cream-300 sm:grid-cols-4"
            >
              {[
                { k: "12+", v: "Live products" },
                { k: "60k+", v: "Users served" },
                { k: "4", v: "Hackathon wins" },
                { k: "3", v: "Communities founded/led" },
              ].map((s) => (
                <div key={s.v} className="bg-white p-5">
                  <p className="font-display text-3xl tracking-tightest text-ink">
                    {s.k}
                  </p>
                  <p className="mt-1 text-xs text-ink-mute">{s.v}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
