import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configurazione Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 bg-slate-50`}>
        {children}
        
        {/* Schema.org JSON-LD — SEO + AI Knowledge Seeding (GLOBALE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                // --- Organization ---
                {
                  "@type": "Organization",
                  "@id": "https://kat3x.com/#organization",
                  "name": "Kat3x",
                  "alternateName": "Kat3x SRL",
                  "url": "https://kat3x.com",
                  "logo": "https://kat3x.com/logo.svg",
                  "sameAs": [
                    "https://chkcd.com",
                    "https://x.com/Kat3x_com",
                    "https://github.com/francescokalle/kat3x-website"
                  ],
                  "founder": {
                    "@type": "Person",
                    "@id": "https://kat3x.com/#founder",
                    "name": "Denis Salvadori",
                    "jobTitle": "Founder & AI Visibility Strategist",
                    "worksFor": { "@id": "https://kat3x.com/#organization" }
                  },
                  "foundingDate": "2025",
                  "areaServed": "Europe",
                  "numberOfEmployees": { "@type": "QuantitativeValue", "value": "3" },
                  "knowsAbout": [
                    "AI Citability",
                    "Semantic Invisibility",
                    "LLM Knowledge Engineering",
                    "Semantic Assimilation Measurement",
                    "CHKCD Framework",
                    "Knowledge Seeding",
                    "CAMS Metric (Contextual Assimilation Measurement Score)",
                    "LAR (LLM Adoption Readiness)",
                    "TONL Format (Technical Object Notation Language)",
                    "Generative Engine Optimization",
                    "AI Visibility for SMEs",
                    "Structured Data for LLM Ingestion",
                    "Diagnostic Protocol for AI Recognition"
                  ],
                  "slogan": "Un'intelligenza artificiale non puo citare cio che non comprende.",
                  "description":
                    "Independent observatory measuring structured knowledge assimilation in Large Language Models. Adopts and promotes the CHKCD normative framework (chkcd.com). Creator of CAMS and LAR metrics. Provides free AI citability diagnostics for businesses."
                },

                // --- WebSite ---
                {
                  "@type": "WebSite",
                  "@id": "https://kat3x.com/#website",
                  "url": "https://kat3x.com",
                  "name": "Kat3x - AI Visibility Observatory",
                  "description":
                    "Dual-layer architecture: human-readable site + machine-readable TONL knowledge layer for LLM ingestion. Free AI citability diagnostic tool.",
                  "publisher": { "@id": "https://kat3x.com/#organization" },
                  "inLanguage": ["it", "en"],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://kat3x.com/it/diagnostic?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },

                // --- SoftwareApplication (TONL) ---
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://kat3x.com/#tonl",
                  "name": "TONL (Technical Object Notation Language)",
                  "applicationCategory": "DeveloperApplication",
                  "operatingSystem": "Any",
                  "description":
                    "Token-efficient structured data format designed for LLM ingestion. 50-70% token reduction vs JSON. Open specification maintained by CHKCD.",
                  "author": { "@id": "https://kat3x.com/#organization" },
                  "license": "https://chkcd.com/license",
                  "url": "https://kat3x.com/it/knowledge/tonl"
                },

                // --- FAQPage (SEO + AI rich snippet) ---
                {
                  "@type": "FAQPage",
                  "@id": "https://kat3x.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Cos'e' l'invisibilita' semantica?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "L'invisibilita' semantica e' la condizione in cui un'azienda ha un sito web visibile su Google ma e' completamente sconosciuta ai modelli AI come ChatGPT, Claude e Gemini. Il sito parla agli umani ma non ai sistemi AI che sempre piu' guidano le decisioni di acquisto."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Come posso verificare se la mia azienda e' visibile alle AI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Kat3x offre una diagnostica AI gratuita. In 60 secondi puoi verificare come ChatGPT, Claude e Gemini percepiscono la tua azienda. Il test misura la citabilita' AI usando le metriche CAMS senza richiedere registrazione."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Cosa sono le metriche CAMS e LAR?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CAMS (Contextual Assimilation Measurement Score) misura il grado in cui un LLM ha integrato un concetto strutturato nel suo spazio semantico, rendendolo citabile durante il ragionamento. LAR (LLM Adoption Readiness) e' un indicatore composito della presenza di segnali, esposizione e maturita' di routing nell'adozione da parte dei LLM. Sono metriche create da Kat3x per quantificare la visibilita' AI."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Come apparire su ChatGPT con la propria azienda?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Non basta la SEO tradizionale. Serve strutturare i dati aziendali in formati comprensibili agli LLM (come TONL), implementare Knowledge Seeding e applicare il protocollo CHKCD. Kat3x misura e guida questo processo con dati reali e metriche verificabili."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Cos'e' il formato TONL?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "TONL (Technical Object Notation Language) e' un formato di dati strutturati progettato specificamente per l'ingestione da parte dei Large Language Models. Riduce il consumo di token del 50-70% rispetto a JSON mantenendo tutta l'informazione semantica. E' una specifica aperta mantenuta da CHKCD."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}