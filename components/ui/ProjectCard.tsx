"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
    >
      {/* Image wrapper */}
      <div className="relative aspect-[16/10] overflow-hidden bg-cream-100">
        <motion.div
          variants={{
            hover: { scale: 1.04 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Replace src with your screenshot path */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              // graceful fallback: show a neutral placeholder
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
            }}
          />
          {/* Placeholder behind image */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center dotted-grid">
            <span className="font-display text-7xl text-cream-300">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Top-right pill */}
        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink shadow-soft backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-moss-500" />
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl tracking-tight text-ink">
              {project.title}
            </h3>
            <motion.div
              variants={{
                hover: { x: 2, y: -2, rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="rounded-full border border-cream-300 p-2 text-ink transition-colors group-hover:border-moss-500 group-hover:bg-moss-500 group-hover:text-cream-50"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
          <p className="mt-1 text-sm text-ink-mute">{project.client} · {project.year}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cream-300 bg-cream-50 px-2.5 py-1 font-mono text-[11px] tracking-tight text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
