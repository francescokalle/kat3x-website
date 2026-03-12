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
              "@type": "Organization",
              "name": "Kat3x",
              "url": "https://kat3x.com",
              "slogan": "Un’intelligenza artificiale non può citare ciò che non comprende.",
              "knowsAbout": ["AI Visibility", "Semantic Knowledge", "LLM Optimization"]
            })
          }}
        />
      </body>
    </html>
  );
}