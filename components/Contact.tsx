"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 dotted-grid opacity-50" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-moss-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-mute"
        >
          <span className="font-mono text-moss-500">10</span>
          <span className="h-px w-10 bg-cream-300" />
          <span>Get in touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl tracking-tightest text-ink md:text-7xl lg:text-8xl"
        >
          Have a project worth{" "}
          <span className="italic text-moss-500">building?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          I take on a small number of select projects outside Cobox each
          quarter. Tell me what you&apos;re building — I&apos;ll reply within 48
          hours.
        </motion.p>

        {/* Email card */}
        <motion.a
          href={profile.socials.email}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="group mt-10 flex w-full items-center justify-between rounded-3xl bg-ink p-6 text-cream-50 shadow-card transition-shadow hover:shadow-card-hover md:p-10"
        >
          <div className="flex min-w-0 items-center gap-4 md:gap-6">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-moss-500 md:h-14 md:w-14">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </span>
            <span className="truncate font-display text-2xl tracking-tight md:text-4xl">
              {profile.email}
            </span>
          </div>
          <span className="grid h-12 w-12 flex-none place-items-center rounded-full border border-cream-50/20 transition-all group-hover:bg-cream-50 group-hover:text-ink md:h-14 md:w-14">
            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
          </span>
        </motion.a>

        {/* Methods grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              Icon: Github,
              label: "GitHub",
              href: profile.socials.github,
              sub: "the-code-machine",
            },
            {
              Icon: Linkedin,
              label: "LinkedIn",
              href: profile.socials.linkedin,
              sub: "/sarthak-khare",
            },
            {
              Icon: Instagram,
              label: "Instagram",
              href: profile.socials.instagram,
              sub: "@sarthak_io",
            },
            {
              Icon: Phone,
              label: "Phone",
              href: `tel:${profile.phone.replace(/\s/g, "")}`,
              sub: profile.phone,
            },
          ].map(({ Icon, label, href, sub }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-cream-300 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-ink-soft group-hover:text-ink" />
                <div>
                  <p className="text-sm font-medium text-ink">{label}</p>
                  <p className="text-xs text-ink-mute">{sub}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
