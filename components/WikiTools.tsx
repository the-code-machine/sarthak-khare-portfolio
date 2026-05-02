"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { wikiTools } from "@/lib/data";

export default function WikiTools() {
  return (
    <section
      id="wiki-tools"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream-300 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="03"
          eyebrow="Open-source for Wikimedia"
          title="Tools I've built for editors."
          description="Hosted on Wikimedia Toolforge and Render — each tool solves a real bottleneck I've watched editors and the community wrestle with."
        />

        <div className="grid gap-px overflow-hidden rounded-3xl border border-cream-300 bg-cream-300 md:grid-cols-2">
          {wikiTools.map((tool, i) => (
            <motion.a
              key={tool.title}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover="hover"
              className="group relative flex flex-col bg-white p-8 transition-colors hover:bg-cream-50 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cream-300 bg-cream-50 text-moss-500 transition-all group-hover:border-moss-500 group-hover:bg-moss-500 group-hover:text-cream-50">
                  <BookOpen className="h-5 w-5" />
                </div>
                <motion.div
                  variants={{ hover: { x: 3, y: -3 } }}
                  transition={{ duration: 0.3 }}
                  className="text-ink-mute group-hover:text-ink"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </div>

              <h3 className="mt-8 font-display text-2xl tracking-tight text-ink md:text-3xl">
                {tool.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {tool.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-cream-200 pt-5 text-xs uppercase tracking-widest text-ink-mute">
                <span>{tool.host}</span>
                <span className="font-mono text-[10px] text-ink-faint">
                  /tool/0{i + 1}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
