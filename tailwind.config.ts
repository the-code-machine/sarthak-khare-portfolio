import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBFAF7",
          100: "#F8F6F1",
          200: "#F1EEE5",
          300: "#E6E2D6",
          400: "#D5D0BF",
        },
        ink: {
          DEFAULT: "#0E120F",
          soft: "#3A413C",
          mute: "#727670",
          faint: "#A8ABA5",
        },
        moss: {
          50: "#EEF4EF",
          100: "#D8E5DB",
          200: "#A8C2AD",
          300: "#6F9577",
          400: "#3D6B47",
          500: "#1F4D3E",
          600: "#163A2E",
          700: "#0E281F",
        },
        clay: {
          400: "#C97C5D",
          500: "#B05A3B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(20,30,22,0.04), 0 8px 24px -12px rgba(20,30,22,0.10)",
        "card-hover":
          "0 1px 0 0 rgba(20,30,22,0.06), 0 24px 48px -16px rgba(20,30,22,0.18)",
        soft: "0 2px 12px -4px rgba(20,30,22,0.08)",
      },
      backgroundImage: {
        "noise-grid":
          "radial-gradient(circle at 1px 1px, rgba(14,18,15,0.06) 1px, transparent 0)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
