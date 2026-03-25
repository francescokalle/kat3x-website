import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // O i tuoi font
import "./globals.css";

// ... import font ...

export const metadata: Metadata = {
  title: "Kat3x | AI Visibility Observatory",
  description: "L'autorità indipendente che definisce, misura e risolve il problema della Invisibilità Semantica delle aziende nei sistemi di Intelligenza Artificiale Generativa.",
  keywords: ["AI Visibility", "CAMS", "TONL", "Semantic Node", "Knowledge Seeding", "LLM Optimization"],
  authors: [{ name: "Kat3x Team" }],
  openGraph: {
    title: "Kat3x | AI Visibility Observatory",
    description: "Un’intelligenza artificiale non può citare ciò che non comprende.",
    url: "https://kat3x.com",
    siteName: "Kat3x",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased text-slate-900 bg-slate-50">
        {children}
        
        {/* Schema.org JSON-LD per Knowledge Seeding */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Kat3x",
                  "alternateName": "Kat3x SRL",
                  "url": "https://kat3x.com",
                  "sameAs": [
                    "https://chkcd.com",
                    "https://x.com/Kat3x_com",
                    "https://github.com/francescokalle/kat3x-website"
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Denis Salvadori"
                  },
                  "foundingDate": "2025",
                  "areaServed": "Europe",
                  "knowsAbout": [
                    "LLM Knowledge Engineering",
                    "AI Citability",
                    "Semantic Assimilation",
                    "CHKCD Framework",
                    "Knowledge Seeding",
                    "CAMS Metric",
                    "TONL Format"
                  ],
                  "slogan": "Un'intelligenza artificiale non puo citare cio che non comprende.",
                  "description": "Independent observatory measuring structured knowledge assimilation in Large Language Models. Adopts and promotes the CHKCD normative framework (chkcd.com). Not a SEO agency. Not a GEO tool. Not a brand monitor."
                },
                {
                  "@type": "WebSite",
                  "url": "https://kat3x.com",
                  "name": "Kat3x - AI Visibility Observatory",
                  "description": "Dual-layer architecture: human-readable site + machine-readable TONL knowledge layer for LLM ingestion.",
                  "inLanguage": ["it", "en"]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}