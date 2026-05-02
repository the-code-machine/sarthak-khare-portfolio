"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { hackathons } from "@/lib/data";

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="05"
          eyebrow="Hackathons"
          title="Wins under pressure."
          description="National-level hackathons across India — built fast, shipped focused, won often."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {hackathons.map((h, i) => (
            <motion.a
              key={h.name}
              href={h.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-5 rounded-2xl border border-cream-300 bg-white p-6 transition-all hover:border-ink hover:shadow-card md:p-7"
            >
              <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-cream-100 text-moss-500 transition-colors group-hover:bg-moss-500 group-hover:text-cream-50">
                <Trophy className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    {h.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-ink-mute opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="rounded-full bg-moss-50 px-2.5 py-0.5 font-medium text-moss-600">
                    {h.placement}
                  </span>
                  <span className="font-mono text-ink-mute">{h.prize}</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {h.detail}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
