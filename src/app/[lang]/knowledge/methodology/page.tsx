import React from "react";
import { FlaskConical, Timer, Layers, BarChart3 } from "lucide-react";
import GlowTitle from "../../../components/GlowTitle";
import Navbar from "../../../components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../../components/PageBackground";
import { getPageMetadata } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("methodology", lang);
}

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: "Protocollo Metodologico",
    subtitle:
      "Il protocollo scientifico applicato da Kat3x per misurare l'ingestione semantica e la citabilità AI. Ogni fase è replicabile e documentata.",
    disclaimer:
      "Questo protocollo è progettato per essere riproducibile. I risultati sono espressi tramite le metriche CAMS, LAR e CRS del framework CHKCD.",
    phases: [
      {
        id: "baseline",
        icon: Layers,
        label: "Fase 0",
        title: "Il Baseline — Misurazione Zero",
        description:
          "Prima di qualsiasi intervento, viene stabilita la condizione di partenza del soggetto analizzato. Il baseline include:",
        items: [
          "Probing iniziale sui principali LLM (GPT-4, Claude, Gemini) per rilevare il grado di riconoscimento spontaneo.",
          "Analisi della struttura semantica esistente: markup, metadati, qualità dei contenuti indicizzabili.",
          "Calcolo del CAMS zero: il punteggio di assimilazione cognitiva prima del Knowledge Seeding.",
          "Documentazione dello stato iniziale come riferimento immutabile per tutte le fasi successive.",
        ],
      },
      {
        id: "seeding",
        icon: FlaskConical,
        label: "Fase 1",
        title: "Iniezione dei Nodi Semantici — Seeding Phase",
        description:
          "La fase attiva del protocollo. I Semantic Node vengono progettati e distribuiti seguendo criteri rigorosi:",
        items: [
          "Creazione dei nodi in sintassi TONL per garantire la massima densità informativa con il minimo token overhead.",
          "Distribuzione multi-canale: pagine web, documenti pubblici, repository tecnici, feed RSS strutturati.",
          "Ottimizzazione per crawler RAG: struttura gerarchica stabile, citabilità atomica, ridondanza controllata.",
          "Monitoraggio dell'indicizzazione iniziale tramite sistemi di tracciamento semantico.",
        ],
      },
      {
        id: "probing",
        icon: Timer,
        label: "Fase 2",
        title: "Sondaggio Longitudinale — Longitudinal Probing",
        description:
          "Test continui e sistematici eseguiti a intervalli prestabiliti per tracciare l'evoluzione dell'assimilazione:",
        items: [
          "T+15 giorni: primo rilevamento post-seeding. Verifica dell'indicizzazione e della presenza nei corpus di retrieval.",
          "T+30 giorni: analisi della stabilità. Misurazione della coerenza delle risposte LLM su query standardizzate.",
          "T+60 giorni: valutazione longitudinale completa. Calcolo del delta CAMS e analisi della deriva semantica.",
          "Query standardizzate e ripetibili per eliminare il bias da variabilità del modello.",
        ],
      },
      {
        id: "evaluation",
        icon: BarChart3,
        label: "Fase 3",
        title: "Valutazione dei Risultati — Calcolo LAR e CAMS",
        description:
          "La fase conclusiva trasforma i dati di probing in metriche quantitative interpretabili:",
        items: [
          "Calcolo del CAMS finale: confronto con il baseline per misurare il delta di assimilazione cognitiva.",
          "Calcolo del LAR (LLM Adoption Readiness): indicatore composito di presenza, esposizione e maturità di routing.",
          "Calcolo del CRS (Conceptual Retrieval Stability): misura della stabilità con cui i concetti vengono selezionati durante il ragionamento.",
          "Produzione del report diagnostico con raccomandazioni per le fasi di ottimizzazione successive.",
        ],
      },
    ],
  },
  en: {
    title: "Methodological Protocol",
    subtitle:
      "The scientific protocol applied by Kat3x to measure semantic ingestion and AI citability. Each phase is replicable and documented.",
    disclaimer:
      "This protocol is designed to be reproducible. Results are expressed using the CAMS, LAR, and CRS metrics of the CHKCD framework.",
    phases: [
      {
        id: "baseline",
        icon: Layers,
        label: "Phase 0",
        title: "The Baseline — Zero Measurement",
        description:
          "Before any intervention, the starting condition of the analyzed subject is established. The baseline includes:",
        items: [
          "Initial probing on major LLMs (GPT-4, Claude, Gemini) to detect the degree of spontaneous recognition.",
          "Analysis of existing semantic structure: markup, metadata, quality of indexable content.",
          "Calculation of CAMS zero: the cognitive assimilation score before Knowledge Seeding.",
          "Documentation of the initial state as an immutable reference for all subsequent phases.",
        ],
      },
      {
        id: "seeding",
        icon: FlaskConical,
        label: "Phase 1",
        title: "Semantic Node Injection — Seeding Phase",
        description:
          "The active phase of the protocol. Semantic Nodes are designed and distributed following rigorous criteria:",
        items: [
          "Node creation in TONL syntax to ensure maximum information density with minimum token overhead.",
          "Multi-channel distribution: web pages, public documents, technical repositories, structured RSS feeds.",
          "Optimization for RAG crawlers: stable hierarchical structure, atomic citability, controlled redundancy.",
          "Monitoring of initial indexing through semantic tracking systems.",
        ],
      },
      {
        id: "probing",
        icon: Timer,
        label: "Phase 2",
        title: "Longitudinal Probing — Continuous Testing",
        description:
          "Systematic continuous tests performed at predetermined intervals to track the evolution of assimilation:",
        items: [
          "T+15 days: first post-seeding detection. Verification of indexing and presence in retrieval corpora.",
          "T+30 days: stability analysis. Measurement of LLM response consistency on standardized queries.",
          "T+60 days: complete longitudinal evaluation. Calculation of CAMS delta and semantic drift analysis.",
          "Standardized and repeatable queries to eliminate bias from model variability.",
        ],
      },
      {
        id: "evaluation",
        icon: BarChart3,
        label: "Phase 3",
        title: "Results Evaluation — LAR and CAMS Calculation",
        description:
          "The final phase transforms probing data into interpretable quantitative metrics:",
        items: [
          "Calculation of final CAMS: comparison with baseline to measure the cognitive assimilation delta.",
          "Calculation of LAR (LLM Adoption Readiness): composite indicator of signal presence, exposure, and routing maturity.",
          "Calculation of CRS (Conceptual Retrieval Stability): measure of stability with which concepts are selected during reasoning.",
          "Production of the diagnostic report with recommendations for subsequent optimization phases.",
        ],
      },
    ],
  },
};

// --- PAGE COMPONENT ---
export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      <PageBackground />
      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO */}
        <section className="relative pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <div className="w-16 h-16 bg-white/60 backdrop-blur-xl border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-7 shadow-sm">
            <FlaskConical className="h-7 w-7" />
          </div>

          <GlowTitle
            as="h1"
            className="text-4xl md:text-6xl text-slate-900 mb-5 tracking-tight leading-[1.1]"
            glowColor="100, 255, 100"
          >
            {dict.title}
          </GlowTitle>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            {dict.subtitle}
          </p>

          {/* DISCLAIMER (glass) */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-6 sm:p-7 overflow-hidden text-left">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-200/35 rounded-full blur-3xl" />
              <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                {dict.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* PROTOCOL PHASES */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            {dict.phases.map((phase: any, index: number) => {
              const Icon = phase.icon;


              return (
                <article
                  key={phase.id}
                  className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-7 md:p-8 overflow-hidden transition-all hover:-translate-y-0.5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                  <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <span className="inline-flex items-center rounded-full bg-brand-50/70 border border-brand-200/60 px-2.5 py-1 text-[11px] font-extrabold text-brand-700 uppercase tracking-wider">
                        {phase.label}
                      </span>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mt-2">
                        {phase.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-5 leading-relaxed">
                    {phase.description}
                  </p>

                  <ul className="space-y-3">
                    {phase.items.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}