"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  // Flatten for the marquee
  const allSkills = skillGroups.flatMap((g) => g.items);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="06"
          eyebrow="Stack"
          title="The toolkit."
          description="Languages, frameworks, infra and tooling I use day-to-day. The bold ones I'm shipping with right now."
        />

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3 border-b border-cream-300 pb-3">
                <span className="font-mono text-xs text-moss-500">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg tracking-tight text-ink">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cream-300 bg-white px-3 py-1.5 text-sm text-ink-soft transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative mt-20 overflow-hidden gradient-mask-x">
          <div className="marquee-track gap-12 py-6">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span
                key={i}
                className="flex-none whitespace-nowrap font-display text-3xl italic tracking-tight text-cream-300 md:text-5xl"
              >
                {s} <span className="text-moss-200">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
