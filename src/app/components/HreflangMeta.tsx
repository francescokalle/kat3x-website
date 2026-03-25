"use client"

/**
 * COMPONENTE: HreflangMeta
 * ============================================================
 * Genera <link rel="alternate" hreflang="..."> per SEO multilingual.
 * Google usa hreflang per capire quale versione linguistica servire
 * e per consolidare i segnali di ranking tra le versioni.
 *
 * USO nel layout.tsx:
 *   import HreflangMeta from "@/components/HreflangMeta"
 *   <HreflangMeta path="/problem" />
 *
 * USO nelle singole pagine:
 *   import HreflangMeta from "@/components/HreflangMeta"
 *   <head><HreflangMeta path="/invisibilita-semantica" /></head>
 *
 * SUPPORTO LINGUE:
 * - it: Italiano (Italia)
 * - en: Inglese (Default internazionale)
 * - x-default: Fallback per lingue non specificate
 * ============================================================
 */

const BASE_URL = "https://kat3x.com"

interface HreflangMetaProps {
  path: string  // es. "/problem", "/about", "/invisibilita-semantica"
}

/**
 * HreflangMeta — Genera tag hreflang per SEO multilingual
 *
 * Renderizza 3 tag <link>:
 * 1. hreflang="it" → versione italiana
 * 2. hreflang="en" → versione inglese
 * 3. hreflang="x-default" → fallback (italiana)
 *
 * @param path - Path relativo della pagina (es. "/problem")
 * @returns JSX con tag <link> hreflang
 */
export default function HreflangMeta({ path }: HreflangMetaProps) {
  return (
    <>
      <link
        rel="alternate"
        hrefLang="it"
        href={`${BASE_URL}/it${path}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`${BASE_URL}/en${path}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${BASE_URL}/it${path}`}
      />
    </>
  )
}

/**
 * ALTERNATIVA: Metadata API Next.js
 * ============================================================
 * Se il progetto usa Next.js 13+ con Metadata API,
 * Francesco può aggiungere questo in ogni page.tsx:
 *
 * import { Metadata } from "next"
 *
 * export const metadata: Metadata = {
 *   alternates: {
 *     canonical: "https://kat3x.com/it/problem",
 *     languages: {
 *       it: "https://kat3x.com/it/problem",
 *       en: "https://kat3x.com/en/problem",
 *       "x-default": "https://kat3x.com/it/problem"
 *     }
 *   }
 * }
 *
 * Questo approccio è più pulito del componente <link> manuale
 * perché gestito direttamente da Next.js nel head.
 *
 * SCEGLINE UNO:
 * - Usa questo componente <HreflangMeta> se usi layout tradizionale
 * - Usa Metadata API se usi Next.js App Router e vuoi gestire tutto
 *   centralizzato in page.tsx
 * ============================================================
 */
