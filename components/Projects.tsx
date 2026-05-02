"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Cobox", "Internship", "Tuffle", "Freelance"] as const;
type Category = (typeof categories)[number];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="02"
          eyebrow="Selected work"
          title="Things I've built and shipped."
          description="From IIT-funded open-source archives to production SaaS used by thousands. Each project below is live — click through to explore."
        />

        {/* Filter tabs */}
        <LayoutGroup>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`relative rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === cat
                    ? "border-ink text-cream-50"
                    : "border-cream-300 bg-white text-ink-soft hover:border-ink"
                }`}
              >
                {active === cat && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                <span
                  className={`relative z-10 ml-1.5 font-mono text-[11px] ${
                    active === cat ? "text-moss-200" : "text-ink-faint"
                  }`}
                >
                  {cat === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        {/* Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
