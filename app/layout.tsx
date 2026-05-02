import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarthak-khare-portfolio.vercel.app"),
  title: "Sarthak Khare — Tech Lead & Full-Stack Engineer",
  description:
    "Tech Lead at Cobox. Full-stack engineer building products, infrastructure, and open-source tools — from Wikimedia archives to production SaaS.",
  keywords: [
    "Sarthak Khare",
    "Cobox",
    "Tech Lead",
    "Full Stack Developer",
    "Next.js",
    "Wikimedia",
    "Toolforge",
    "Freelance Developer",
    "India",
  ],
  authors: [
    { name: "Sarthak Khare", url: "https://github.com/the-code-machine" },
  ],
  openGraph: {
    title: "Sarthak Khare — Tech Lead & Full-Stack Engineer",
    description:
      "Tech Lead at Cobox, building products, infrastructure, and open-source tools.",
    url: "https://sarthak-khare-portfolio.vercel.app",
    siteName: "Sarthak Khare",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Khare — Tech Lead & Full-Stack Engineer",
    description:
      "Tech Lead at Cobox, building products, infrastructure, and open-source tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream-50 text-ink antialiased">{children}</body>
    </html>
  );
}
