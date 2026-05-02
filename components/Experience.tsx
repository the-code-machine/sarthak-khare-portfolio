"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { currentRole, internship } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="01"
          eyebrow="Experience"
          title="Where I'm building right now."
          description="Currently leading engineering at Cobox. Before that, I helped IIT Indore and SRM University AP build a research-grade open-source archive."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Cobox — Current */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-cream-300 bg-ink p-8 text-cream-50 shadow-card md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-moss-500/30 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-moss-200/40 to-transparent" />

            <div className="relative">
              <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-moss-200">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-moss-500">
                  <Briefcase className="h-3.5 w-3.5" />
                </span>
                Current · {currentRole.period}
              </div>

              <h3 className="mt-6 font-display text-4xl tracking-tightest md:text-5xl">
                {currentRole.role}
                <span className="block text-moss-200">@ {currentRole.company}</span>
              </h3>

              <p className="mt-5 max-w-md text-base leading-relaxed text-cream-100/80">
                {currentRole.blurb}
              </p>

              <ul className="mt-8 space-y-3">
                {currentRole.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-cream-100/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-moss-200" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={currentRole.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-medium text-ink transition-all hover:bg-moss-200 hover:text-moss-700"
              >
                Visit Cobox
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Internship — IIT */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-cream-300 bg-white p-8 shadow-card md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-clay-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cream-200 text-ink">
                  <GraduationCap className="h-3.5 w-3.5" />
                </span>
                Internship · {internship.duration}
              </div>

              <h3 className="mt-6 font-display text-4xl tracking-tightest text-ink md:text-5xl">
                {internship.role}
                <span className="block text-ink-soft">@ {internship.company}</span>
              </h3>

              <p className="mt-3 text-sm text-ink-mute">
                {internship.period} · {internship.location}
              </p>

              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                {internship.blurb}
              </p>

              <ul className="mt-8 space-y-3">
                {internship.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-moss-500" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={internship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-cream-300 px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-moss-500 hover:bg-moss-500 hover:text-cream-50"
              >
                Visit Sindhi Sanchaya
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
