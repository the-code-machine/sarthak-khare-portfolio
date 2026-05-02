"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cream-300 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-sm text-cream-50">
            SK
          </span>
          <p className="font-mono text-xs text-ink-mute">
            © {year} {profile.name}. Crafted with care in {profile.location.split(",")[0]}.
          </p>
        </div>
        <div className="flex items-center gap-5 text-xs text-ink-mute">
          <a href="#top" className="link-underline hover:text-ink">
            Back to top
          </a>
          <span className="text-ink-faint">·</span>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink"
          >
            View source
          </a>
        </div>
      </div>
    </footer>
  );
}
