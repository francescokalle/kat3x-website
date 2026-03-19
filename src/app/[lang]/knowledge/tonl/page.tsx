import React from "react";
import { Code2, Info } from "lucide-react";
import GlowTitle from "../../../components/GlowTitle";
import Navbar from "../../../components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../../components/PageBackground";

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: "Sintassi TONL (Esempi)",
    subtitle:
      "Esempi pratici della sintassi TONL utilizzata negli esperimenti Kat3x. I blocchi sottostanti sono progettati per essere letti e assimilati direttamente dagli LLM.",
    disclaimer:
      "La rappresentazione strutturata utilizzata negli esperimenti Kat3x segue la sintassi TONL, una notazione compatta progettata per il parsing LLM con riduzione del 50-70% dei token rispetto al JSON.",
    whatIsTitle: "Cos'è TONL?",
    whatIsDesc:
      "TONL (Technical Object Notation Language) è uno standard sviluppato da CHKCD per rappresentare oggetti tecnici e profili aziendali in forma machine-readable. A differenza del JSON, TONL elimina la ridondanza sintattica mantenendo la struttura gerarchica necessaria ai sistemi RAG per estrarre informazioni senza dispersione semantica.",
    examplesTitle: "Esempi di Strutture TONL",
    examples: [
      {
        id: "machine",
        label: "Oggetto Tecnico — Essiccatore Industriale",
        description:
          "Rappresentazione di un macchinario industriale. La struttura dichiara le proprietà chiave nella prima riga e le espande nelle righe successive.",
        code: `machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h`,
      },
      {
        id: "company",
        label: "Profilo Aziendale — Entità Produttiva",
        description:
          "Profilo strutturato di un'entità aziendale. Ottimizzato per l'indicizzazione RAG e il riconoscimento semantico nei corpus LLM.",
        code: `company{name|sector|core_product|market|certifications}:
  name: Acme Industrial S.r.l.
  sector: agri-food machinery
  core_product: grain dryer GD-500
  market: EU, MENA
  certifications: CE, ISO9001`,
      },
      {
        id: "experiment",
        label: "Nodo Sperimentale — Esperimento di Knowledge Seeding",
        description:
          "Struttura TONL per un nodo sperimentale Kat3x. Documenta i parametri, le metriche e lo stato di un esperimento di assimilazione semantica.",
        code: `experiment{id|subject|baseline_cams|target_cams|duration|status}:
  id: KAT3X-EXP-007
  subject: Acme Industrial S.r.l.
  baseline_cams: 0.12
  target_cams: 0.75
  duration: 60d
  status: in_progress`,
      },
    ],
    whyTitle: "Perché TONL riduce i Token?",
    whyItems: [
      "Niente parentesi graffe, virgolette o due punti ridondanti come in JSON.",
      "L'intestazione dichiara lo schema una sola volta; i valori sono allineati verticalmente.",
      "La struttura gerarchica tramite indentazione è nativamente riconosciuta dai tokenizer moderni.",
      "Un profilo aziendale completo in TONL occupa ~40 token contro ~110 token in JSON equivalente.",
    ],
  },
  en: {
    title: "TONL Syntax (Examples)",
    subtitle:
      "Practical examples of the TONL syntax used in Kat3x experiments. The blocks below are designed to be read and assimilated directly by LLMs.",
    disclaimer:
      "The structured representation used in Kat3x experiments follows the TONL syntax, a compact notation designed for LLM parsing with 50-70% token reduction compared to JSON.",
    whatIsTitle: "What is TONL?",
    whatIsDesc:
      "TONL (Technical Object Notation Language) is a standard developed by CHKCD to represent technical objects and company profiles in machine-readable form. Unlike JSON, TONL eliminates syntactic redundancy while maintaining the hierarchical structure needed by RAG systems to extract information without semantic dispersion.",
    examplesTitle: "TONL Structure Examples",
    examples: [
      {
        id: "machine",
        label: "Technical Object — Industrial Grain Dryer",
        description:
          "Representation of an industrial machine. The structure declares key properties in the first line and expands them in subsequent lines.",
        code: `machine{type|input_moisture|output_moisture|capacity}:
  type: grain dryer
  input_moisture: 24%
  output_moisture: 14%
  capacity: 5.3 t/h`,
      },
      {
        id: "company",
        label: "Company Profile — Productive Entity",
        description:
          "Structured profile of a company entity. Optimized for RAG indexing and semantic recognition in LLM corpora.",
        code: `company{name|sector|core_product|market|certifications}:
  name: Acme Industrial S.r.l.
  sector: agri-food machinery
  core_product: grain dryer GD-500
  market: EU, MENA
  certifications: CE, ISO9001`,
      },
      {
        id: "experiment",
        label: "Experimental Node — Knowledge Seeding Experiment",
        description:
          "TONL structure for a Kat3x experimental node. Documents the parameters, metrics, and status of a semantic assimilation experiment.",
        code: `experiment{id|subject|baseline_cams|target_cams|duration|status}:
  id: KAT3X-EXP-007
  subject: Acme Industrial S.r.l.
  baseline_cams: 0.12
  target_cams: 0.75
  duration: 60d
  status: in_progress`,
      },
    ],
    whyTitle: "Why does TONL reduce tokens?",
    whyItems: [
      "No redundant curly braces, quotes, or colons as in JSON.",
      "The header declares the schema only once; values are vertically aligned.",
      "Hierarchical structure via indentation is natively recognized by modern tokenizers.",
      "A complete company profile in TONL occupies ~40 tokens vs ~110 tokens in equivalent JSON.",
    ],
  },
};

// --- PAGE COMPONENT ---
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
            <Code2 className="h-7 w-7" />
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

          {/* DISCLAIMER (glass callout) */}
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

          {/* EXAMPLES */}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            {dict.examplesTitle}
          </h2>

          <div className="space-y-8">
            {dict.examples.map((example: any) => (
              <article
                key={example.id}
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
                      {example.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 border border-white/70 bg-white/50 px-2 py-1 rounded-full">
                    TONL
                  </span>
                </div>

                <div className="px-6 py-5">
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                    {example.description}
                  </p>

                  <pre className="bg-slate-950 text-emerald-200/90 text-sm rounded-2xl p-5 overflow-x-auto leading-relaxed font-mono border border-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
                    {example.code}
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