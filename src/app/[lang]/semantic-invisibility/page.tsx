// ============================================================
// PAGINA: /[lang]/invisibilita-semantica
// ============================================================
//
// ISTRUZIONI:
// 1. Copia questa cartella in: src/app/[lang]/invisibilita-semantica/
// 2. Aggiungi il metadata da config/metadata-per-page.ts (invisibilitaMetadataIT)
// 3. Aggiungi link nel NavBar e Footer
// 4. Il componente ProvaTuStesso va in src/app/components/ProvaTuStesso.tsx
//
// SCOPO SEO:
// Pagina dedicata alla keyword "invisibilita' semantica" — competizione ZERO
// in Italia. Intercetta chi cerca il problema ma non conosce ancora Kat3x.
// ============================================================

import React from "react";
import {
  EyeOff,
  TrendingDown,
  Brain,
  BarChart3,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import GlowTitle from "../../components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../components/PageBackground";
import Blockquote from "@/app/components/blockquote";
import ProvaTuStesso from "@/app/components/ProvaTuStesso";
import FaqSection from "@/app/components/FaqSection";
import DefinitionSnippet from "@/app/components/DefinitionSnippet";
import { getPageMetadata, getPageFaq } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  // Assicurati che la chiave "invisibilita" esista nel tuo getPageMetadata
  return getPageMetadata("invisibilita", lang);
}

const dictionaries: Record<string, any> = {
  it: {
    hero: {
      titleLine1: "Invisibilità",
      titleLine2: "Semantica",
      subtitle:
        "Il tuo sito è primo su Google. Ma ChatGPT non sa che esisti. Benvenuto nella nuova invisibilità.",
      quote:
        "Un'intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
    },
    problem: {
      sectionTitle: "Il Problema Che Non Vedi",
      cards: [
        {
          icon: "EyeOff",
          title: "Il Sito Parla Agli Umani",
          desc: "Il tuo sito web è bellissimo. I colori sono perfetti, il copy è curato. Ma un Large Language Model non vede colori. Analizza nodi semantici. Se non li trova, per lui non esisti.",
        },
        {
          icon: "TrendingDown",
          title: "La Ricerca Sta Cambiando",
          desc: "Entro il 2026, il 25% delle ricerche passeranno da interfacce conversazionali (Gartner). L'89% dei buyer B2B già usa AI per decisioni di acquisto. Chi non è visibile alle AI perde clienti.",
        },
        {
          icon: "Brain",
          title: "La SEO Non Basta Più",
          desc: "La SEO tradizionale ti posiziona su Google. Ma ChatGPT, Claude e Gemini non usano Google. Hanno i propri sistemi di ingestione dati. Servono dati strutturati per macchine, non per persone.",
        },
      ],
    },
    symptoms: {
      sectionTitle: "Sintomi dell'Invisibilità Semantica",
      subtitle: "Come capire se la tua azienda è invisibile alle AI",
      items: [
        "Chiedi a ChatGPT della tua azienda e non sa rispondere",
        "I concorrenti appaiono nelle risposte AI, tu no",
        "Il tuo sito è indicizzato su Google ma inesistente per gli LLM",
        "Hai investito in SEO ma le AI non ti citano",
        "I tuoi clienti B2B usano AI per scegliere fornitori e tu non compari",
      ],
    },
    solution: {
      sectionTitle: "La Soluzione Esiste",
      subtitle: "Non è un problema tecnico. È un problema di struttura.",
      items: [
        {
          title: "Knowledge Layer Strutturato",
          desc: "Un livello di dati invisibile agli utenti ma perfettamente leggibile dai crawler AI. Formato TONL: 50-70% token in meno di JSON.",
        },
        {
          title: "Misurazione Scientifica",
          desc: "Le metriche CAMS e LAR quantificano la tua visibilità AI. Non opinioni, ma dati replicabili su 3 modelli diversi.",
        },
        {
          title: "Protocollo CHKCD",
          desc: "Framework normativo indipendente per strutturare i dati aziendali in modo comprensibile ai Large Language Models.",
        },
      ],
    },
    cta: {
      title: "Misura la Tua Invisibilità",
      desc: "In 60 secondi scopri come le AI vedono (o non vedono) la tua azienda. Diagnostica gratuita. Nessuna registrazione.",
      button: "Avvia Diagnostica Gratuita",
    },
  },
  en: {
    hero: {
      titleLine1: "Semantic",
      titleLine2: "Invisibility",
      subtitle:
        "Your site ranks #1 on Google. But ChatGPT doesn't know you exist. Welcome to the new invisibility.",
      quote:
        "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
    },
    problem: {
      sectionTitle: "The Problem You Can't See",
      cards: [
        {
          icon: "EyeOff",
          title: "Your Site Speaks to Humans",
          desc: "Your website is beautiful. The colors are perfect, the copy is polished. But a Large Language Model doesn't see colors. It analyzes raw semantic nodes. If it can't find them, you don't exist.",
        },
        {
          icon: "TrendingDown",
          title: "Search Is Changing",
          desc: "By 2026, 25% of searches will go through conversational interfaces (Gartner). 89% of B2B buyers already use AI for purchasing decisions. If you're invisible to AI, you lose customers.",
        },
        {
          icon: "Brain",
          title: "SEO Is No Longer Enough",
          desc: "Traditional SEO ranks you on Google. But ChatGPT, Claude and Gemini don't use Google. They have their own data ingestion systems. You need data structured for machines, not people.",
        },
      ],
    },
    symptoms: {
      sectionTitle: "Symptoms of Semantic Invisibility",
      subtitle: "How to tell if your business is invisible to AI",
      items: [
        "Ask ChatGPT about your company and it can't answer",
        "Competitors appear in AI responses, you don't",
        "Your site is indexed on Google but nonexistent to LLMs",
        "You invested in SEO but AI models don't cite you",
        "Your B2B customers use AI to choose suppliers and you're missing",
      ],
    },
    solution: {
      sectionTitle: "The Solution Exists",
      subtitle: "It's not a technical problem. It's a structure problem.",
      items: [
        {
          title: "Structured Knowledge Layer",
          desc: "A data layer invisible to users but perfectly readable by AI crawlers. TONL format: 50-70% fewer tokens than JSON.",
        },
        {
          title: "Scientific Measurement",
          desc: "CAMS and LAR metrics quantify your AI visibility. Not opinions, but replicable data across 3 different models.",
        },
        {
          title: "CHKCD Protocol",
          desc: "Independent normative framework for structuring business data in a way comprehensible to Large Language Models.",
        },
      ],
    },
    cta: {
      title: "Measure Your Invisibility",
      desc: "In 60 seconds, discover how AI sees (or doesn't see) your business. Free diagnostic. No registration.",
      button: "Start Free Diagnostic",
    },
  },
};

const iconMap: Record<string, React.ElementType> = {
  EyeOff,
  TrendingDown,
  Brain,
};

export default async function InvisibilitaSemanticaPage({
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
        {/* HEADER / HERO */}
        <section className="relative pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          {/* Soft orb behind hero - riadattato ai colori del brand/red */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-red-100/40 to-orange-100/40 blur-3xl -z-10 rounded-[100%]" />

          <GlowTitle
            as="h1"
            className="text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.05]"
            glowColor="255, 100, 100"
          >
            {dict.hero.titleLine1}{" "}
            <br className="hidden sm:block" />
            <span className="text-red-500">{dict.hero.titleLine2}</span>
          </GlowTitle>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dict.hero.subtitle}
          </p>

          <DefinitionSnippet
            term={lang === "it" ? "L'invisibilità semantica" : "Semantic invisibility"}
            definition={
              lang === "it"
                ? "è la condizione in cui un'azienda è ben posizionata su Google ma completamente assente o distorta nelle risposte dei modelli AI. Il sito esiste per i motori di ricerca ma non per lo spazio semantico dei LLM."
                : "is the condition where a company ranks well on Google but is completely absent or distorted in AI model responses. The site exists for search engines but not for the semantic space of LLMs."
            }
            className="mb-12"
          />

          {/* CANONICAL QUOTE (glass) */}
          <Blockquote quote={dict.hero.quote} />
        </section>

        {/* PROBLEM CARDS */}
        <section className="py-10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-2 text-center">
              {dict.problem.sectionTitle}
            </h2>
            <div className="w-12 h-1 bg-red-200 mx-auto rounded-full mb-12" />

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {dict.problem.cards.map(
                (
                  card: { icon: string; title: string; desc: string },
                  i: number
                ) => {
                  const Icon = iconMap[card.icon] || EyeOff;
                  return (
                    <div
                      key={i}
                      className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden hover:-translate-y-0.5 transition-all"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-200/20 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-opacity" />

                      <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white/70 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* SYMPTOMS CHECKLIST */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-red-500/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <AlertTriangle className="h-8 w-8 text-orange-400 mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {dict.symptoms.sectionTitle}
                </h2>
                <p className="text-slate-400 mb-8">{dict.symptoms.subtitle}</p>

                <ul className="space-y-4">
                  {dict.symptoms.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400 text-sm font-bold">
                          !
                        </span>
                      </div>
                      <span className="text-slate-200 text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">
                {dict.solution.sectionTitle}
              </h2>
              <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full mb-4" />
              <p className="text-xl text-slate-600">{dict.solution.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {dict.solution.items.map(
                (item: { title: string; desc: string }, i: number) => (
                  <div
                    key={i}
                    className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 lg:p-10 rounded-3xl overflow-hidden hover:-translate-y-0.5 transition-all"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    <CheckCircle2 className="h-8 w-8 text-brand-600 mb-6" />
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* PROVA TU STESSO */}
        <ProvaTuStesso lang={lang} />

        {/* FAQ SECTION */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4">
            <FaqSection faq={getPageFaq("invisibilita", lang)} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 relative z-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-brand-600/90 backdrop-blur-2xl border border-brand-400/50 shadow-[0_20px_60px_-15px_rgba(5,150,105,0.4)] rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/40 to-emerald-800/40 mix-blend-overlay" />
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-[100px]" />

              <div className="relative z-10 flex flex-col items-center">
                <BarChart3 className="h-12 w-12 text-white/80 mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  {dict.cta.title}
                </h2>
                <p className="text-xl md:text-2xl text-brand-50 mb-12 max-w-3xl leading-relaxed font-light">
                  {dict.cta.desc}
                </p>
                <a
                  href={`/${lang}/diagnostic`}
                  className="inline-flex items-center gap-3 bg-white text-brand-700 font-bold text-lg px-10 py-5 rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
                >
                  {dict.cta.button}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}