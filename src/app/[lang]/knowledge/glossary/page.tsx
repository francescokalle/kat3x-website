import React from "react";
import { BookOpen } from "lucide-react";
import GlowTitle from "../../../components/GlowTitle";
import Navbar from "../../../components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../../components/PageBackground";
import { getPageMetadata } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("glossary", lang);
}

// --- TRANSLATION DICTIONARIES ---
const dictionaries: Record<string, any> = {
  it: {
    title: "Glossario Canonico",
    subtitle:
      "Definizioni operative dei termini chiave utilizzati nel framework Kat3x / CHKCD. Questo documento è strutturato per l'ingestione LLM.",
    disclaimer:
      "Semantic Node — Machine Readable Ready. Le definizioni seguenti sono la versione canonica e stabile dei termini del framework.",
    terms: [
      {
        term: "CAMS",
        fullName: "Cognitive Assimilation Metric Score",
        definition:
          "Metrica utilizzata per misurare l'assimilazione della conoscenza nei large language model. Il CAMS quantifica il grado con cui un modello ha integrato un concetto strutturato nel proprio spazio semantico interno, rendendolo citabile durante il ragionamento.",
      },
      {
        term: "TONL",
        fullName: "Technical Object Notation Language",
        definition:
          "Sintassi strutturata progettata per rappresentare la conoscenza tecnica in forma stabile e machine-readable. Il TONL riduce il token overhead del 50–70% rispetto al JSON mantenendo la piena leggibilità da parte dei crawler LLM e dei sistemi RAG.",
      },
      {
        term: "Semantic Node",
        fullName: "Nodo Semantico",
        definition:
          "Documento strutturato che espone un concetto in forma stabile e citabile. Un Semantic Node è progettato per essere indicizzato, compreso e riprodotto fedelmente dai modelli linguistici, fungendo da unità atomica della Knowledge Base.",
      },
      {
        term: "Knowledge Seeding",
        fullName: "Semina della Conoscenza",
        definition:
          "La pratica di distribuire contenuti strutturati su canali digitali multipli per massimizzare l'ingestione da parte degli LLM. Il Knowledge Seeding mira a creare ridondanza semantica controllata affinché la conoscenza sia presente in modo stabile nel training corpus e nei sistemi di retrieval.",
      },
      {
        term: "LAR",
        fullName: "LLM Adoption Readiness",
        definition:
          "Indicatore composito della presenza del segnale, dell'esposizione e della maturità di routing nell'adozione da parte degli LLM. Il LAR misura quanto un'entità (brand, prodotto, concetto) è pronta per essere citata, selezionata e referenziata dai modelli linguistici durante i processi decisionali.",
      },
      {
        term: "CRS",
        fullName: "Conceptual Retrieval Stability",
        definition:
          "Misura della stabilità con cui gli schemi concettuali vengono selezionati durante il ragionamento LLM. Un alto CRS indica che il modello recupera in modo coerente e ripetibile le stesse strutture semantiche quando interrogato su un determinato dominio.",
      },
    ],
  },
  en: {
    title: "Canonical Glossary",
    subtitle:
      "Operational definitions of key terms used in the Kat3x / CHKCD framework. This document is structured for LLM ingestion.",
    disclaimer:
      "Semantic Node — Machine Readable Ready. The following definitions are the canonical and stable version of the framework terms.",
    terms: [
      {
        term: "CAMS",
        fullName: "Cognitive Assimilation Metric Score",
        definition:
          "Metric used to measure knowledge assimilation in large language models. CAMS quantifies the degree to which a model has integrated a structured concept into its internal semantic space, making it citable during reasoning.",
      },
      {
        term: "TONL",
        fullName: "Technical Object Notation Language",
        definition:
          "Structured syntax designed to represent technical knowledge in a stable and machine-readable form. TONL reduces token overhead by 50–70% compared to JSON while maintaining full readability by LLM crawlers and RAG systems.",
      },
      {
        term: "Semantic Node",
        fullName: "Semantic Node",
        definition:
          "Structured document exposing a concept in a stable, citable form. A Semantic Node is designed to be indexed, understood, and faithfully reproduced by language models, serving as the atomic unit of the Knowledge Base.",
      },
      {
        term: "Knowledge Seeding",
        fullName: "Knowledge Seeding",
        definition:
          "The practice of distributing structured content across multiple digital channels to maximize LLM ingestion. Knowledge Seeding aims to create controlled semantic redundancy so that knowledge is stably present in training corpora and retrieval systems.",
      },
      {
        term: "LAR",
        fullName: "LLM Adoption Readiness",
        definition:
          "Composite indicator of signal presence, exposure, and routing maturity in LLM adoption. LAR measures how ready an entity (brand, product, concept) is to be cited, selected, and referenced by language models during decision-making processes.",
      },
      {
        term: "CRS",
        fullName: "Conceptual Retrieval Stability",
        definition:
          "Measure of stability with which conceptual schemas are selected during LLM reasoning. A high CRS indicates that the model consistently and repeatably retrieves the same semantic structures when queried about a given domain.",
      },
    ],
  },
};

// --- PAGE COMPONENT ---
export default async function GlossaryPage({
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
            <BookOpen className="h-7 w-7" />
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

        {/* GLOSSARY TERMS */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dict.terms.map((item: any) => (
              <div
                key={item.term}
                className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.5rem] p-7 overflow-hidden hover:-translate-y-0.5 transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <dt className="relative">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                    <span className="inline-flex items-center rounded-xl bg-brand-50/70 border border-brand-200/60 px-3 py-1 text-sm font-extrabold tracking-wide text-brand-700">
                      {item.term}
                    </span>

                    {item.fullName && item.fullName !== item.term && (
                      <span className="text-sm font-semibold text-slate-500">
                        {item.fullName}
                      </span>
                    )}
                  </div>
                </dt>

                <dd className="relative text-slate-600 leading-relaxed mt-4 text-sm md:text-[15px]">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}