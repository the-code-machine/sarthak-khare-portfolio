import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
    {
      name: "Sarthak Khare",
      url: "https://github.com/the-code-machine",
    },
  ],

  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
    ],

    shortcut: [{ url: "/favicon.ico?v=2" }],

    apple: [
      {
        url: "/apple-icon.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

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
      <body className="bg-cream-50 text-ink antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCJFV3PVR5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-BCJFV3PVR5');
          `}
        </Script>
      </body>
    </html>
  );
}
