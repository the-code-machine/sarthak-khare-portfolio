"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ArrowDown,
} from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40"
    >
      {/* Decorative dotted grid */}
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-60 gradient-mask-b" />

      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-moss-50 blur-3xl md:-right-20" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-clay-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-moss-200 bg-moss-50 px-3 py-1 text-moss-600">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss-500" />
            </span>
            Available for select work
          </span>
          <span className="hidden h-px w-8 bg-cream-300 md:inline-block" />
          <span className="inline-flex items-center gap-1.5 text-ink-mute">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
        </motion.div>

        {/* Name — big editorial */}
        <div className="mt-8 md:mt-10">
          <h1 className="font-display tracking-tightest text-ink">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[18vw] leading-[0.92] md:text-[10rem] lg:text-[12rem]"
            >
              Sarthak
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[18vw] leading-[0.92] italic text-moss-500 md:text-[10rem] lg:text-[12rem]"
              style={{ fontStyle: "italic" }}
            >
              Khare.
            </motion.span>
          </h1>
        </div>

        {/* Sub-info row */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          {/* Left: title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 lg:col-span-7"
          >
            <p className="max-w-xl text-balance text-lg leading-relaxed text-ink-soft md:text-xl">
              Tech Lead at{" "}
              <a
                href="https://www.cobox.co"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-ink"
              >
                Cobox
              </a>
              . I design, ship and operate full software ecosystems — from
              frontend pixels to AWS infrastructure. Previously open-source
              engineering for{" "}
              <span className="font-medium text-ink">IIT Indore</span> and the{" "}
              <span className="font-medium text-ink">Wikimedia community</span>.
            </p>
          </motion.div>

          {/* Right: meta + socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-6 md:pl-12 lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Currently
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  Tech Lead, Cobox
                </p>
                <p className="text-sm text-ink-mute">Jun 2025 — Present</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  Based in
                </p>
                <p className="mt-2 text-sm font-medium text-ink">
                  Dubai · Hybrid
                </p>
                <p className="text-sm text-ink-mute">Working globally</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              {[
                { Icon: Github, href: profile.socials.github, label: "GitHub" },
                {
                  Icon: Linkedin,
                  href: profile.socials.linkedin,
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: profile.socials.instagram,
                  label: "Instagram",
                },
                { Icon: Mail, href: profile.socials.email, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream-300 bg-white text-ink-soft shadow-soft transition-colors hover:border-moss-500 hover:bg-moss-500 hover:text-cream-50"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute md:mt-24"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
          Scroll to explore the work
        </motion.div>
      </div>
    </section>
  );
}
