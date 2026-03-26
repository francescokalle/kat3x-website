// ============================================================
// API ROUTE: /api/seo-refresh
// ============================================================
//
// ISTRUZIONI:
// Copia in: src/app/api/seo-refresh/route.ts
//
// Richiede:
// - ANTHROPIC_API_KEY in .env.local
// - SEO_REFRESH_SECRET in .env.local
//
// Chiamato dal cron settimanale (o dal pipeline Gemini esistente).
//
// STIMA COSTI (modello claude-opus-4-6):
// - Input:  $5.00 / MTok
// - Output: $25.00 / MTok
// - Stima per chiamata (~14k tok in + ~1k tok out): ~$0.07/chiamata
// - Frequenza: 1x/settimana → ~$0.28/mese
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Runtime Node.js esplicito — fs e path non funzionano su Vercel edge runtime
export const runtime = "nodejs";

// ============================================================
// PROMPT DI SISTEMA — inlineato per compatibilità Vercel/Next.js
// (originale: seo-automation/seo-agent-prompt.txt)
// ============================================================
const SYSTEM_PROMPT_TEMPLATE = `#llm CANONICAL: Kat3x SEO Automation Agent — System Prompt
#llm 1. This prompt is executed weekly by Claude API to analyze and improve invisible SEO.
#llm 2. Does NOT touch the human-visible frontend. Only metadata| JSON-LD| sitemap| FAQ schema.
#llm 3. Output format: structured JSON with per-page suggestions.
#llm 4. Citation: "Kat3x SEO Agent Prompt v1.0"
#version 1.0
#updated 2026-03-25
#delimiter |

root{meta|identity|architecture|context|keywords|instructions|constraints|output_format}:

  meta{id|canonical|version|role}:
    id: kat3x_seo_agent_v1
    canonical: internal — not published
    version: "1.0"
    role: SEO Specialist Agent for kat3x.com

  identity{who|domain|tone}:
    who: SEO Specialist for Kat3x (kat3x.com)| independent AI Citability observatory
    domain: Invisible SEO optimization — metadata| structured data| knowledge layer
    tone: Direct| technical| data-driven. No hype. No invented metrics.

  architecture{layers[3]}:
    layers[3]:
      HUMAN: Frontend minimale Next.js — visibile agli utenti| non toccato dall'agente
      SEO: Metadata| JSON-LD| sitemap — invisibile nel codice| target dell'ottimizzazione
      MACHINE: Knowledge layer TONL| /knowledge/*.txt| llms.txt — per AI crawler

  context{current_metadata|gsc_data}:
    current_metadata: {{CURRENT_METADATA}}
    gsc_data: {{GSC_DATA}}

  keywords[7]{page|targets}:
    Home| AI citability| osservatorio AI| visibilita AI| CAMS| TONL
    Problem| invisibilita semantica| sito invisibile ChatGPT| nuova invisibilita
    Diagnostic| test AI citability| come vedono AI la mia azienda
    Invisibilita Semantica| invisibilita semantica| perche AI non cita azienda
    Come Apparire su ChatGPT| come apparire su ChatGPT| visibilita ChatGPT| farsi trovare ChatGPT
    About| chi e Kat3x| ecosistema AI visibility| CHKCD
    Knowledge| CAMS metrica| LAR| TONL formato| Knowledge Seeding

  instructions[5]{step|detail}:
    1| Analizza i metadata attuali di ogni pagina
    2| Confronta con keyword target e dati Search Console
    3| Suggerisci miglioramenti: meta title (max 60 char| keyword in testa)| meta description (max 155 char| CTA finale)| nuove keyword| FAQ aggiuntive per JSON-LD FAQPage
    4| Non cambiare il tono: diretto| tecnico| basato su dati
    5| Non inventare metriche o risultati

  constraints[3]:
    NEVER invent data| metrics| or results that are not provided in context
    NEVER modify human-visible frontend content
    ALWAYS maintain consistency with existing TONL knowledge layer terminology

  canonical_definitions{acronyms|hard_constraint}:
    acronyms[5]{term|full_name|definition|what_it_is_not}:
      CAMS| Contextual Assimilation Measurement Score| Metric measuring the degree to which a LLM has integrated a structured concept into its semantic space| making it citable during reasoning.| NOT a SEO score. NOT a sentiment score. NOT a traffic metric. NOT a keyword ranking.
      LAR| LLM Adoption Readiness| Composite indicator of signal presence| exposure| and routing maturity in LLM adoption. Measures whether a domain is recognized and used by LLMs.| NOT a popularity index. NOT a competitive ranking. NOT a brand awareness score. NOT answer correctness.
      DSP| Domain Semantic Pressure| Measures how assimilated knowledge is used by LLMs. Observes vocabulary usage patterns| semantic pressure| overfitting signals| distortion or flattening of concepts| and stability of references under prompt variation.| NOT semantic similarity scoring. NOT linguistic quality assessment. NOT a content quality metric.
      CRS| Cognitive Routing Stability| Consistency of concept retrieval across repeated queries| model versions| and time. Measures persistence of conceptual routing and resistance to regression.| NOT an uptime score. NOT a caching metric. NOT a response time measurement. NOT dataset freshness evaluation.
      CRD| Cognitive Routing Decay| Measures the velocity and direction of change in how LLMs route and use a knowledge domain over time. Complementary to CRS — CRS measures stability| CRD measures the decay vector.| NOT temporal accuracy. NOT a degradation metric in isolation. Must be read with CRS.
    format_definition{term|full_name|definition}:
      TONL| Technical Object Notation Language| Structured syntax for representing technical knowledge in machine-readable form. 50-70% token reduction vs JSON while maintaining full LLM parseability.
    framework_definition{term|full_name|definition}:
      CHKCD| Cognitive Hierarchical Knowledge for Contextual Discourse| Independent normative framework for structured knowledge. Kat3x adopts CHKCD| does not own it.
    hard_constraint: When generating FAQ| descriptions| or suggestions that mention CAMS| LAR| DSP| CRS| CRD| TONL| or CHKCD| you MUST use ONLY the definitions above. Do NOT invent| paraphrase| or expand these acronyms differently. If unsure| quote the canonical definition verbatim. This prevents knowledge contamination and maintains semantic consistency with Kat3x's knowledge layer.

  output_format{type|structure}:
    type: JSON
    structure{analysis_date|suggestions|trending_topics}:
      analysis_date: ISO8601
      suggestions[]{page|current_title|suggested_title|current_description|suggested_description|new_keywords|new_faq|reasoning}
      trending_topics[]{topic|relevance|action}
`;

// ============================================================
// METADATA FALLBACK — tutte le pagine IT + EN
// Usato se data/current-metadata.json non è disponibile
// ============================================================
const METADATA_FALLBACK = `
Home IT: title="Kat3x — Osservatorio AI Citability" desc="Come le AI comprendono e citano la tua azienda?"
Problem IT: title="La Nuova Invisibilita'" desc="Il tuo sito e' perfetto ma ChatGPT non ti conosce."
Diagnostic IT: title="Test AI Citability Gratuito" desc="Scopri in 60 secondi come le AI vedono la tua azienda."
Invisibilita IT: title="Invisibilita' Semantica" desc="Il tuo sito e' primo su Google ma le AI non lo conoscono."
ChatGPT IT: title="Come Apparire su ChatGPT" desc="ChatGPT non cita la tua azienda? Non e' SEO."
About IT: title="Chi Siamo — Kat3x" desc="Kat3x e' un osservatorio indipendente sull'AI Citability."
Knowledge IT: title="Knowledge Base — CAMS, LAR, TONL" desc="Metriche e formati per la visibilita AI."
Home EN: title="Kat3x — AI Citability Observatory" desc="How AI systems understand and cite your company?"
Problem EN: title="The New Invisibility" desc="Your site is perfect but ChatGPT doesn't know you."
Diagnostic EN: title="Free AI Citability Test" desc="Discover in 60 seconds how AI sees your company."
Invisibilita EN: title="Semantic Invisibility" desc="Your site ranks on Google but AI doesn't know it."
ChatGPT EN: title="How to Appear on ChatGPT" desc="ChatGPT doesn't cite your company? It's not SEO."
About EN: title="About — Kat3x" desc="Kat3x is an independent AI Citability observatory."
Knowledge EN: title="Knowledge Base — CAMS, LAR, TONL" desc="Metrics and formats for AI visibility."
`;

// ============================================================
// Legge il TONL knowledge index da public/knowledge/seo-index.tonl
// ============================================================
async function readSeoIndex(): Promise<string> {
  const filePath = path.join(process.cwd(), "public", "knowledge", "seo-index.tonl");
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    console.warn("[SEO-REFRESH] seo-index.tonl not found, proceeding without TONL context");
    return "";
  }
}

// Intervallo minimo tra chiamate: 1 ora
const MIN_INTERVAL_MS = 60 * 60 * 1000;

// ============================================================
// Legge i metadata dinamicamente da data/current-metadata.json
// Fallback: stringa hardcoded con tutte le pagine IT + EN
// ============================================================
async function getCurrentMetadata(): Promise<string> {
  const metadataPath = path.join(process.cwd(), "data", "current-metadata.json");
  try {
    const raw = await fs.readFile(metadataPath, "utf-8");
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed === "string") return parsed;
    return JSON.stringify(parsed, null, 2);
  } catch {
    // File non trovato o non parsabile — usa il fallback hardcoded
    return METADATA_FALLBACK;
  }
}

// ============================================================
// Verifica il rate limit leggendo il timestamp dell'ultimo file
// generato (data/seo-metadata.json).
// L'in-memory reset ad ogni cold start Vercel — questa versione
// è persistente tra invocazioni serverless.
// ============================================================
async function checkRateLimit(): Promise<{ limited: boolean; lastRunAt: string | null }> {
  const outputPath = path.join(process.cwd(), "data", "seo-metadata.json");
  try {
    const raw = await fs.readFile(outputPath, "utf-8");
    const parsed = JSON.parse(raw) as { generated_at?: string };
    const generatedAt = parsed.generated_at;
    if (!generatedAt) return { limited: false, lastRunAt: null };

    const lastTs = new Date(generatedAt).getTime();
    const now = Date.now();
    if (now - lastTs < MIN_INTERVAL_MS) {
      return { limited: true, lastRunAt: generatedAt };
    }
    return { limited: false, lastRunAt: generatedAt };
  } catch {
    // File non esiste ancora — nessun limite
    return { limited: false, lastRunAt: null };
  }
}

// ============================================================
// [FIX] Strip markdown code fences dalla risposta di Claude.
// Opus wrappa quasi sempre l'output JSON in ```json ... ```.
// Questa funzione rimuove i backtick in modo robusto prima
// di passare la stringa a JSON.parse().
// ============================================================
function stripCodeFences(raw: string): string {
  // Trim whitespace prima di tutto
  let clean = raw.trim();

  // Pattern: ```json ... ``` oppure ``` ... ```
  // Usa una regex che gestisce anche varianti senza newline
  clean = clean
    .replace(/^```(?:json)?\s*/i, "")  // rimuove apertura ```json o ```
    .replace(/\s*```\s*$/i, "");        // rimuove chiusura ```

  return clean.trim();
}

// ============================================================
// POST /api/seo-refresh
// ============================================================
export async function POST(request: NextRequest) {
  // 1. Autenticazione
  const authHeader = request.headers.get("authorization");
  const secret = process.env.SEO_REFRESH_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Rate limiting basato su file (persistente tra cold start)
  const { limited, lastRunAt } = await checkRateLimit();
  if (limited) {
    return NextResponse.json(
      {
        error: "Rate limited. Max 1 call per hour.",
        last_run: lastRunAt,
      },
      { status: 429 }
    );
  }

  // 3. Leggi metadata dinamicamente (con fallback hardcoded)
  const currentMetadata = await getCurrentMetadata();

  // 4. Costruisci il prompt sostituendo i placeholder
  const systemPrompt = SYSTEM_PROMPT_TEMPLATE
    .replace("{{CURRENT_METADATA}}", currentMetadata)
    .replace("{{GSC_DATA}}", "Non disponibili in questa iterazione.");

  // 5. Verifica chiave API
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    // 6. Leggi il TONL context
    const tonlContext = await readSeoIndex();

    // 6b. Chiama Claude API con pattern a 3 messaggi (user-assistant-user)
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Charset": "utf-8",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-opus-4-6",
        max_tokens: 16000,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: tonlContext
              ? "Contesto: ecco il knowledge index TONL di Kat3x. Usalo come riferimento per terminologia, definizioni, identita' aziendale e strategia per pagina.\n\n" + tonlContext
              : "Nessun contesto TONL disponibile. Usa le canonical_definitions nel system prompt."
          },
          {
            role: "assistant",
            content: "Ho letto e compreso il knowledge index TONL di Kat3x. Procedera' con l'analisi SEO usando questa base come riferimento."
          },
          {
            role: "user",
            // [FIX] Aggiunta istruzione esplicita: output SOLO JSON raw, nessun code fence.
            // Riduce la probabilità che Opus wrapi in ```json```, ma stripCodeFences()
            // rimane come safety net nel parser.
            content: "Analizza i metadata attuali e produci i metadata migliorati. FORMATO OUTPUT OBBLIGATORIO: un JSON con chiave \"pages\" contenente un array. Ogni elemento ha: page (string), lang (\"it\" o \"en\"), title (string, max 60 char), description (string, max 155 char), keywords (string[]), faq (array di {question, answer}). Puoi includere opzionalmente un campo \"trending_topics\" di array con oggetti {topic, relevance, action}. REGOLE: usa SOLO apostrofi semplici (e' non e con accento). Output ONLY raw JSON — nessun markdown, nessun code fence, nessun testo prima o dopo il JSON."
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[SEO-REFRESH] Claude API error:", errorText);
      return NextResponse.json(
        { error: "Claude API error", details: errorText },
        { status: 502 }
      );
    }

    const data = (await response.json()) as {
      content?: Array<{ text?: string }>;
      usage?: { input_tokens: number; output_tokens: number };
    };
    const rawContent = data.content?.[0]?.text ?? "";

    // [FIX] Strip robusto dei markdown code fences prima del parse
    const cleanContent = stripCodeFences(rawContent);

    // 7. Parse e valida la risposta
    let parsedOutput: { pages?: Array<unknown>; trending_topics?: Array<unknown> };
    try {
      parsedOutput = JSON.parse(cleanContent);
    } catch {
      // JSON non valido — salva raw per debug, NON sovrascrivere metadata
      const rawPath = path.join(process.cwd(), "data", "seo-raw-debug.json");
      await fs.mkdir(path.dirname(rawPath), { recursive: true });
      await fs.writeFile(
        rawPath,
        JSON.stringify(
          {
            generated_at: new Date().toISOString(),
            error: "Invalid JSON from Claude",
            raw_content: rawContent,      // raw originale con eventuali fences
            clean_content: cleanContent,  // versione dopo strip, utile per debug
          },
          null,
          2
        )
      );
      return NextResponse.json(
        {
          success: false,
          error: "Claude returned invalid JSON",
          debug_file: "data/seo-raw-debug.json",
        },
        { status: 422 }
      );
    }

    // Verifica che ci sia l'array pages
    if (
      !parsedOutput.pages ||
      !Array.isArray(parsedOutput.pages) ||
      parsedOutput.pages.length === 0
    ) {
      const rawPath = path.join(process.cwd(), "data", "seo-raw-debug.json");
      await fs.mkdir(path.dirname(rawPath), { recursive: true });
      await fs.writeFile(
        rawPath,
        JSON.stringify(
          {
            generated_at: new Date().toISOString(),
            error: "JSON valid but missing pages array",
            parsed: parsedOutput,
          },
          null,
          2
        )
      );
      return NextResponse.json(
        {
          success: false,
          error: "Missing pages array in Claude response",
        },
        { status: 422 }
      );
    }

    // 8. Backup del file esistente
    const metadataPath = path.join(process.cwd(), "data", "seo-metadata.json");
    const backupPath = path.join(process.cwd(), "data", "seo-metadata.backup.json");
    try {
      const existing = await fs.readFile(metadataPath, "utf-8");
      await fs.writeFile(backupPath, existing);
      console.log("[SEO-REFRESH] Backup saved to seo-metadata.backup.json");
    } catch {
      // Primo run, nessun file da backuppare
    }

    // 9. Scrivi i nuovi metadata
    // [FIX] Salva trending_topics se presente nella risposta di Claude (opzione B)
    const finalOutput: {
      generated_at: string;
      model: string;
      pages: Array<unknown>;
      trending_topics?: Array<unknown>;
    } = {
      generated_at: new Date().toISOString(),
      model: "claude-opus-4-6",
      pages: parsedOutput.pages,
    };

    if (
      parsedOutput.trending_topics &&
      Array.isArray(parsedOutput.trending_topics) &&
      parsedOutput.trending_topics.length > 0
    ) {
      finalOutput.trending_topics = parsedOutput.trending_topics;
      console.log(
        "[SEO-REFRESH] trending_topics salvati: " + parsedOutput.trending_topics.length
      );
    }

    await fs.mkdir(path.dirname(metadataPath), { recursive: true });
    await fs.writeFile(metadataPath, JSON.stringify(finalOutput, null, 2));
    console.log(
      "[SEO-REFRESH] Metadata written to seo-metadata.json (" +
        parsedOutput.pages.length +
        " pages)"
    );

    // 10. Restituisci il risultato
    return NextResponse.json({
      success: true,
      generated_at: new Date().toISOString(),
      pages_count: parsedOutput.pages.length,
      trending_topics_count: finalOutput.trending_topics?.length ?? 0,
      backup: "seo-metadata.backup.json",
      usage: data.usage,
    });
  } catch (error: unknown) {
    console.error("[SEO-REFRESH] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ============================================================
// GET /api/seo-refresh — health check
// ============================================================
export async function GET() {
  const { lastRunAt } = await checkRateLimit();
  return NextResponse.json({
    status: "ok",
    service: "seo-refresh",
    last_run: lastRunAt,
  });
}