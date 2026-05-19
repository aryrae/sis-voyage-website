import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIS Voyage — Group, mission, heritage & bespoke travel",
  description:
    "SIS Voyage is a full-service travel agency specialising in group, mission, heritage, wedding, corporate and bespoke travel — bilingual EN/FR, combat-disabled veteran-owned (SDVOSB), Fora-credentialed.",
  keywords: [
    "travel agency",
    "Christian travel",
    "Holy Land tours",
    "mission trips",
    "Reformation tours",
    "group travel",
    "destination weddings",
    "corporate retreats",
    "African safari",
    "honeymoon planning",
    "bilingual travel agency",
    "Burkina Faso travel",
    "Francophone Africa travel",
    "Fora travel advisor",
    "combat-disabled veteran-owned (SDVOSB) travel",
  ].join(", "),
  authors: [{ name: "Ary" }],
  openGraph: {
    title: "SIS Voyage — Travel done with care",
    description:
      "Group · mission · heritage · weddings · corporate · honeymoons · bespoke. Bilingual EN/FR. Veteran-owned. Fora-credentialed.",
    type: "website",
    locale: "en_US",
    siteName: "SIS Voyage",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="aurora-bg min-h-screen">{children}</body>
    </html>
  );
}
