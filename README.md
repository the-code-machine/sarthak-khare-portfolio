# Sarthak Khare — Portfolio

Personal portfolio site. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide icons**.

> Editorial light theme · Fraunces × Geist · Forest-green accent · Mobile-first · Reduced-motion friendly

---

## Quick start

```bash
# 1. install
npm install

# 2. dev server (http://localhost:3000)
npm run dev

# 3. production build
npm run build
npm start
```

Node 18+ recommended.

---

## Where the content lives

Every piece of content (projects, communities, hackathons, skills, education, wiki tools, social links) is in **one file**:

```
lib/data.ts
```

Edit there — the whole site updates automatically.

### Things you'll want to change

| What | Where |
|---|---|
| Your Instagram handle | `lib/data.ts → profile.socials.instagram` |
| Wikimedia username (Commons / Meta / MediaWiki / Phabricator URLs) | `lib/data.ts → wikiIdentity` |
| Project screenshots | drop PNGs into `public/images/projects/` matching the filenames in `lib/data.ts` |
| Your portrait | `public/images/portrait.png` |
| Site domain (used for OG metadata) | `app/layout.tsx → metadataBase` |

### Image filenames expected

Place these in `public/images/projects/`:

- `cobox.png`
- `sindhi-sanchaya.png`
- `jobpakki.png`
- `sabarkaro.png`
- `tick-your-tour.png`
- `paperbill.png`
- `glossour-web.png`
- `glossour-app.png`
- `effortless-events.png`
- `studygen.png`
- `itcouncil.png`
- `zootopia.png`

If an image is missing, the card shows a tasteful initial-letter placeholder — no broken images.

---

## Design system

| Token | Value |
|---|---|
| Background | `#FBFAF7` (warm cream) |
| Ink (text) | `#0E120F` |
| Accent | `#1F4D3E` (deep forest moss) |
| Display font | **Fraunces** (variable serif) |
| Body font | **Geist** (variable sans) |

Defined in `tailwind.config.ts` and `app/globals.css`.

---

## Sections (in order)

1. **Hero** — name, role, location, socials
2. **Experience** — Cobox (current) + IIT Indore × SRM AP internship
3. **Selected work** — filterable project grid (Cobox / Internship / Tuffle / Freelance)
4. **Wiki tools** — Toolforge & Render-hosted open-source tools
5. **Communities** — Variable X, Wiki Open Learning, Wiki Club SATI
6. **Hackathons** — wins & finalist runs
7. **Skills** — grouped stack + marquee
8. **Education** — SATI + Nehru Memorial HSS
9. **Wiki identity** — Commons / Meta / MediaWiki / Phabricator
10. **About** — personal narrative + stats
11. **Contact** — big email CTA + quick links

---

## Animations

Built with Framer Motion. Highlights:

- Staggered hero reveal
- Section headers with eyebrow + title cascade
- Project cards: fade-up + image scale on hover
- Filter pill: shared layout transition
- Marquee skill strip
- Scroll-triggered reveal for every section (with `viewport={{ once: true }}` so they don't re-run)
- Honors `prefers-reduced-motion`

---

## Deploying

Recommended: **Vercel** (zero config).

```bash
vercel
```

Or `npm run build` and host the `.next` output anywhere that runs Node.

---

## License

Personal portfolio — feel free to use the code structure for your own portfolio (with credit appreciated).
