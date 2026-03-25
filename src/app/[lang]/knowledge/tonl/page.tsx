import React from "react";
import { Code2, Info, FileText } from "lucide-react";
import GlowTitle from "@/app/components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "@/app/components/PageBackground";
import { getPageMetadata } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("tonl", lang);
}

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: "Sintassi TONL (Reference)",
    subtitle:
      "La grammatica della visibilità AI. Scopri come TONL (Text Object Notation for LLMs) struttura i dati per massimizzare l'assimilazione semantica e minimizzare il costo in token.",
    disclaimer:
      "Questo documento non è la specifica ufficiale (disponibile su chkcd.com), ma una guida su come Kat3x utilizza il formato TONL nei suoi esperimenti di Knowledge Seeding.",
    whatIsTitle: "Cos'è TONL?",
    whatIsDesc:
      "TONL è un formato di markup progettato per essere parsabile dai Large Language Models (LLM) senza preprocessing. A differenza del JSON, che è ottimizzato per le API classiche, TONL usa sezioni semantiche esplicite (@claims, @entities, @limitations) che riducono drasticamente il costo cognitivo (e di token) per il modello durante i processi RAG.",
    rulesTitle: "Regole Sintattiche di Base",
    rules: [
      {
        id: "header",
        label: "Dichiarazione dell'Entità (Header)",
        description:
          "Ogni oggetto inizia dichiarando lo schema dei dati una sola volta nell'intestazione, separando le chiavi con il pipe (|). I valori seguono incolonnati.",
        code: `company{name|sector|core_product}:
  name: Kat3x Observatory
  sector: AI Research
  core_product: Semantic Analytics`,
      },
      {
        id: "annotations",
        label: "Annotazioni Semantiche (@)",
        description:
          "Le annotazioni con la chiocciola guidano l'attenzione dell'LLM verso metadati o contesti specifici, fondamentali per il corretto routing delle informazioni.",
        code: `@entity: research_report
@id: KAT3X-001
@context: machine_readability`,
      },
    ],
    whyTitle: "Perché TONL riduce i Token del 50-70%?",
    whyItems: [
      "Assenza di sintassi ridondante: Nessuna parentesi graffa multipla, virgolette o virgole finali come in JSON.",
      "Schema unificato: L'intestazione dichiara lo schema una sola volta, l'LLM mappa nativamente i valori successivi per indentazione.",
      "L'indentazione spaziale è nativamente riconosciuta e compressa dai tokenizer moderni (come cl100k_base di OpenAI).",
      "Maggiore 'Densità Semantica': Più concetti espressi nella stessa finestra di contesto (Context Window).",
    ],
  },
  en: {
    title: "TONL Syntax (Reference)",
    subtitle:
      "The grammar of AI visibility. Discover how TONL (Text Object Notation for LLMs) structures data to maximize semantic assimilation and minimize token cost.",
    disclaimer:
      "This document is not the official specification (available at chkcd.com), but a guide on how Kat3x uses the TONL format in its Knowledge Seeding experiments.",
    whatIsTitle: "What is TONL?",
    whatIsDesc:
      "TONL is a markup format designed to be parsed by Large Language Models (LLMs) without preprocessing. Unlike JSON, which is optimized for classical APIs, TONL uses explicit semantic sections (@claims, @entities, @limitations) that drastically reduce the cognitive (and token) cost for the model during RAG processes.",
    rulesTitle: "Basic Syntax Rules",
    rules: [
      {
        id: "header",
        label: "Entity Declaration (Header)",
        description:
          "Each object begins by declaring the data schema once in the header, separating keys with a pipe (|). Values follow aligned below.",
        code: `company{name|sector|core_product}:
  name: Kat3x Observatory
  sector: AI Research
  core_product: Semantic Analytics`,
      },
      {
        id: "annotations",
        label: "Semantic Annotations (@)",
        description:
          "Annotations with the at-symbol guide the LLM's attention to specific metadata or contexts, essential for the correct routing of information.",
        code: `@entity: research_report
@id: KAT3X-001
@context: machine_readability`,
      },
    ],
    whyTitle: "Why does TONL reduce Tokens by 50-70%?",
    whyItems: [
      "No redundant syntax: No multiple curly braces, quotes, or trailing commas like in JSON.",
      "Unified Schema: The header declares the schema once, the LLM natively maps subsequent values by indentation.",
      "Spatial indentation is natively recognized and compressed by modern tokenizers (like OpenAI's cl100k_base).",
      "Higher 'Semantic Density': More concepts expressed in the same Context Window.",
    ],
  },
};

export default async function TonlPage({
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
            <FileText className="h-7 w-7" />
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

          {/* DISCLAIMER */}
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-6 sm:p-7 overflow-hidden text-left">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-brand-200/35 rounded-full blur-3xl" />

              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-white/60 backdrop-blur-md border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Info className="h-5 w-5" />
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                  {dict.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* WHAT IS TONL */}
          <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-7 md:p-8 overflow-hidden mb-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl opacity-70" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              {dict.whatIsTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed">{dict.whatIsDesc}</p>
          </div>

          {/* RULES */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {dict.rulesTitle}
          </h2>

          <div className="space-y-8">
            {dict.rules.map((rule: any) => (
              <article
                key={rule.id}
                className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] overflow-hidden hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="px-6 py-4 border-b border-white/70 bg-white/35 backdrop-blur-md flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-white/60 backdrop-blur-md border border-white/70 text-brand-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm truncate">
                      {rule.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 border border-white/70 bg-white/50 px-2 py-1 rounded-full">
                    SINTASSI
                  </span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                    {rule.description}
                  </p>

                  <pre className="bg-slate-950 text-emerald-200/90 text-sm rounded-2xl p-5 overflow-x-auto leading-relaxed font-mono border border-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
                    {rule.code}
                  </pre>
                </div>
              </article>
            ))}
          </div>

          {/* WHY TONL REDUCES TOKENS */}
          <div className="mt-12 relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-7 md:p-8 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
              {dict.whyTitle}
            </h2>

            <ul className="space-y-3">
              {dict.whyItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}