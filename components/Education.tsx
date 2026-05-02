"use client";

import { motion } from "framer-motion";
import { School } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="07"
          eyebrow="Education"
          title="Where I trained."
        />

        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-4 rounded-2xl border border-cream-300 bg-white p-6 shadow-soft md:grid-cols-12 md:items-center md:p-8"
            >
              <div className="flex items-center gap-4 md:col-span-5">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-cream-100 text-ink">
                  <School className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-ink">
                    {e.school}
                  </h3>
                  <p className="text-sm text-ink-mute">{e.location}</p>
                </div>
              </div>
              <div className="md:col-span-4 md:border-l md:border-cream-300 md:pl-6">
                <p className="text-sm font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-ink-mute">{e.period}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <span className="inline-flex rounded-full bg-moss-50 px-3 py-1 font-mono text-xs text-moss-600">
                  {e.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
