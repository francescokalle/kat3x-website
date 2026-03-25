// ============================================================
// METADATA PER PAGINA — Letti da data/seo-metadata.json
// Generato dall'agente SEO Claude, consumato da Next.js a build time
// Fallback hardcoded se il file JSON non esiste
// ============================================================

import fs from "fs";
import path from "path";
import type { Metadata } from "next";

interface PageMeta {
  page: string;
  lang: string;
  title: string;
  description: string;
  keywords: string[];
  faq: Array<{ question: string; answer: string }>;
}

interface SeoMetadataFile {
  generated_at: string;
  model: string;
  pages: PageMeta[];
}

// Cache in-memory — valida per tutta la durata del build o della request
let cached: SeoMetadataFile | null = null;

function loadMetadata(): SeoMetadataFile {
  if (cached) return cached;
  try {
    const filePath = path.join(process.cwd(), "data", "seo-metadata.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    cached = JSON.parse(raw) as SeoMetadataFile;
    return cached;
  } catch {
    return { generated_at: "fallback", model: "none", pages: [] };
  }
}

/**
 * Ottieni i metadata Next.js per una pagina specifica.
 * Uso: export const metadata = getPageMetadata("home", "it")
 */
export function getPageMetadata(page: string, lang: string): Metadata {
  const data = loadMetadata();
  const found = data.pages.find((p) => p.page === page && p.lang === lang);

  if (!found) {
    return {
      title: "Kat3x — " + page,
      description: "Kat3x AI Citability Observatory",
    };
  }

  return {
    title: found.title,
    description: found.description,
    keywords: found.keywords,
    openGraph: {
      title: found.title,
      description: found.description,
      siteName: "Kat3x",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: found.title,
      description: found.description,
    },
  };
}

/**
 * Ottieni le FAQ per il JSON-LD FAQPage schema.
 * Uso: const faq = getPageFaq("home", "it")
 */
export function getPageFaq(
  page: string,
  lang: string
): Array<{ question: string; answer: string }> {
  const data = loadMetadata();
  const found = data.pages.find((p) => p.page === page && p.lang === lang);
  return found?.faq || [];
}
