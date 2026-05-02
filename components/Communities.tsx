"use client";

import { motion } from "framer-motion";
import { Users, ArrowUpRight, Crown } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { communities } from "@/lib/data";

export default function Communities() {
  return (
    <section id="communities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="04"
          eyebrow="Communities"
          title="Spaces I've founded and led."
          description="Building communities is engineering with humans. These are the ones I've started, led and contributed to."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {communities.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-cream-300 bg-white p-7 shadow-card transition-all hover:shadow-card-hover"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-moss-50 transition-all duration-700 group-hover:bg-moss-100" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-cream-50">
                    {c.role.toLowerCase().includes("founder") ? (
                      <Crown className="h-5 w-5" />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>

                <p className="mt-7 font-mono text-[11px] uppercase tracking-widest text-moss-500">
                  {c.role}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight text-ink">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {c.blurb}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
