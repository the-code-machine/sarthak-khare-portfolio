"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { wikiIdentity } from "@/lib/data";

export default function WikiIdentity() {
  return (
    <section id="wiki-identity" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="08"
          eyebrow="Wikimedia presence"
          title="My Wiki accounts."
          description="Find me across the Wikimedia movement — same handle, same engineer, different surfaces."
        />

        <div className="grid gap-3 md:grid-cols-2">
          {wikiIdentity.links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream-300 bg-white px-6 py-5 transition-all hover:border-ink hover:bg-ink hover:text-cream-50"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint group-hover:text-moss-200">
                  /user/{wikiIdentity.username.replace(" ", "_")}
                </p>
                <h3 className="mt-1 font-display text-xl tracking-tight">
                  {l.label}
                </h3>
                <p className="mt-1 text-sm text-ink-mute group-hover:text-cream-100/80">
                  {l.description}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 flex-none transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
