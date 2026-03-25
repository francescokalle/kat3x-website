// ============================================================
// SITEMAP DINAMICO — src/app/sitemap.ts
// ============================================================
//
// ISTRUZIONI: Copia questo file in src/app/sitemap.ts
// Next.js lo servira' automaticamente come /sitemap.xml
//
// Genera tutte le URL IT + EN con lastmod reali.
// ============================================================

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kat3x.com";
  const now = new Date().toISOString();

  // Pagine principali con priorita' e frequenza
  const pages: {
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/problem", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/diagnostic", priority: 1.0, changeFrequency: "weekly" },
    { path: "/use-cases", priority: 0.8, changeFrequency: "monthly" },
    { path: "/invisibilita-semantica", priority: 0.9, changeFrequency: "monthly" },
    { path: "/come-apparire-su-chatgpt", priority: 0.9, changeFrequency: "monthly" },
    { path: "/knowledge/glossary", priority: 0.8, changeFrequency: "monthly" },
    { path: "/knowledge/methodology", priority: 0.8, changeFrequency: "monthly" },
    { path: "/knowledge/tonl", priority: 0.8, changeFrequency: "monthly" },
    { path: "/knowledge/examples", priority: 0.7, changeFrequency: "monthly" },
    { path: "/knowledge/experiments", priority: 0.8, changeFrequency: "weekly" },
  ];

  const langs = ["it", "en"];

  // Genera URL per ogni lingua
  const urls: MetadataRoute.Sitemap = pages.flatMap((page) =>
    langs.map((lang) => ({
      url: `${baseUrl}/${lang}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  // Aggiungi file statici (TONL knowledge layer)
  const staticFiles = [
    "/knowledge/index.txt",
    "/knowledge/kat3x-identity.txt",
    "/knowledge/chkcd-adoption.txt",
    "/knowledge/learning-triangle.txt",
    "/knowledge/instruments.txt",
    "/knowledge/competitive-distinction.txt",
    "/knowledge/nuova-invisibilita.txt",
    "/knowledge/glossary-extended.txt",
    "/knowledge/seo-index.tonl",
    "/llms.txt",
  ];

  const staticUrls: MetadataRoute.Sitemap = staticFiles.map((file) => ({
    url: `${baseUrl}${file}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...urls, ...staticUrls];
}
