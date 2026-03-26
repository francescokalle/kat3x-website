// ============================================================
// PAGINA: /[lang]/come-apparire-su-chatgpt
// ============================================================
//
// ISTRUZIONI:
// 1. Copia questa cartella in: src/app/[lang]/come-apparire-su-chatgpt/
// 2. Aggiungi il metadata da config/metadata-per-page.ts (comeApparireMetadataIT)
// 3. Aggiungi link nel NavBar e Footer
//
// SCOPO SEO:
// Intercetta la keyword "come apparire su ChatGPT" — la query che chi
// scopre il problema cerchera' su Google. Competizione quasi zero in IT.
// Struttura: problema > perche' non funziona > come si risolve > prova.
// ============================================================

import React from "react";
import {
  Search,
  XCircle,
  Lightbulb,
  Layers,
  FileCode,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Fingerprint,
  Cpu,
  Link2,
  ScanEye
} from "lucide-react";
import GlowTitle from "../../components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import PageBackground from "../../components/PageBackground";
import Blockquote from "@/app/components/blockquote";
import ProvaTuStesso from "@/app/components/ProvaTuStesso";
import FaqSection from "../../components/FaqSection";
import DefinitionSnippet from "../../components/DefinitionSnippet";
import { getPageFaq } from "@/config/metadata-per-page";

// Importa metadata da config/metadata-per-page.ts
// export { comeApparireMetadataIT as metadata } from "@/seo/metadata-per-page";

const dictionaries: Record<string, any> = {
  it: {
    hero: {
      titleLine1: "Come Apparire",
      titleLine2: "su ChatGPT",
      subtitle:
        "ChatGPT non cita la tua azienda? Non è un problema di SEO. È un problema di struttura. Ecco come risolverlo con dati reali.",
      quote:
        "Non basta essere online. Serve essere compresi. Dalle macchine, non solo dalle persone.",
      badge: "AI Visibility Protocol"
    },
    definition: {
      title: "Cosa significa apparire?",
      text: "Apparire su ChatGPT significa esistere nello spazio vettoriale dei modelli linguistici. Non si tratta di scalare una classifica, ma di fornire le coordinate esatte affinché l'AI possa recuperare i tuoi dati tramite processi di RAG (Retrieval-Augmented Generation).",
      highlight: "In Kat3x trasformiamo il tuo sito da un insieme di pixel per umani in un database di concetti per macchine.",
      visualTitle: "Semantic Bridge",
      visualStatus: "Collegamento Interrotto"
    },
    misconceptions: {
      sectionTitle: "Cosa NON Funziona",
      subtitle: "Tre errori comuni di chi prova ad apparire sugli LLM",
      items: [
        {
          icon: "Search",
          title: "Piu' SEO",
          desc: "La SEO ti posiziona su Google. ChatGPT, Claude e Gemini NON usano Google per rispondere. Hanno sistemi di ingestione dati completamente diversi. Piu' keyword non aiutano.",
        },
        {
          icon: "XCircle",
          title: "Contenuti 'AI-Optimized'",
          desc: "Scrivere contenuti 'per le AI' senza struttura sottostante e' come urlare in una stanza vuota. Il problema non e' il volume, e' il formato.",
        },
        {
          icon: "Lightbulb",
          title: "Pagare per Essere Citati",
          desc: "Non esiste un 'Google Ads per ChatGPT'. La citazione AI si guadagna con dati strutturati e comprensibili, non con budget pubblicitario.",
        },
      ],
    },
    howItWorks: {
      sectionTitle: "Come Funziona Realmente",
      subtitle:
        "Il percorso per passare da invisibili a citati dai modelli AI",
      steps: [
        {
          number: "01",
          title: "Diagnostica",
          desc: "Misuriamo come 3 modelli AI (ChatGPT, Claude, Gemini) vedono la tua azienda oggi. Metriche CAMS su scala 0-100. Risultato in 60 secondi.",
        },
        {
          number: "02",
          title: "Knowledge Layer",
          desc: "Creiamo un livello di dati strutturati in formato TONL — invisibile agli utenti, perfettamente leggibile dai crawler AI. Riduzione token del 50-70%.",
        },
        {
          number: "03",
          title: "Knowledge Seeding",
          desc: "I dati strutturati vengono esposti tramite protocollo CHKCD: /knowledge/*.txt, llms.txt, Schema.org JSON-LD. Le AI li ingeriscono autonomamente.",
        },
        {
          number: "04",
          title: "Monitoraggio LAR",
          desc: "Misuriamo settimanalmente il tasso di assimilazione (LAR). I nostri dati mostrano: 68.4% LAR medio dopo 80+ giorni, verificabile su 3 modelli.",
        },
      ],
    },
    results: {
      sectionTitle: "Risultati Reali, Non Promesse",
      subtitle: "Dati dal nostro esperimento su kat3x.com — verificabili",
      metrics: [
        { value: "68.4%", label: "LAR medio su 3 modelli" },
        { value: "80+", label: "Giorni di monitoraggio" },
        { value: "3", label: "LLM monitorati in parallelo" },
        { value: "0", label: "Budget pubblicitario" },
      ],
      note: "Questi dati sono verificabili. Chiedi a ChatGPT, Claude o Gemini informazioni su Kat3x e confronta le risposte.",
    },
    cta: {
      title: "La Tua Azienda E' Visibile?",
      desc: "Scoprilo in 60 secondi. Diagnostica AI gratuita con metriche CAMS. Nessuna registrazione richiesta.",
      button: "Avvia Diagnostica Gratuita",
    },
  },
  en: {
    hero: {
      titleLine1: "How to Appear",
      titleLine2: "on ChatGPT",
      subtitle:
        "ChatGPT doesn't cite your business? It's not an SEO problem. It's a structure problem. Here's how to fix it with real data.",
      quote:
        "Being online is not enough. You need to be understood. By machines, not just people.",
      badge: "AI Visibility Protocol"
    },
    definition: {
      title: "What does appearing mean?",
      text: "Appearing on ChatGPT means existing in the vector space of linguistic models. It's not about climbing a rank, but providing the exact coordinates so AI can retrieve your data via RAG processes.",
      highlight: "At Kat3x, we transform your site from a set of pixels for humans into a database of concepts for machines.",
      visualTitle: "Semantic Bridge",
      visualStatus: "Connection Severed"
    },
    misconceptions: {
      sectionTitle: "What Does NOT Work",
      subtitle: "Three common mistakes when trying to appear in LLMs",
      items: [
        {
          icon: "Search",
          title: "More SEO",
          desc: "SEO ranks you on Google. ChatGPT, Claude and Gemini do NOT use Google to answer questions. They have completely different data ingestion systems.",
        },
        {
          icon: "XCircle",
          title: "'AI-Optimized' Content",
          desc: "Writing content 'for AI' without underlying structure is like shouting in an empty room. The problem isn't volume, it's format.",
        },
        {
          icon: "Lightbulb",
          title: "Paying to Be Cited",
          desc: "There is no 'Google Ads for ChatGPT'. AI citation is earned through structured, comprehensible data — not advertising budget.",
        },
      ],
    },
    howItWorks: {
      sectionTitle: "How It Actually Works",
      subtitle: "The path from invisible to cited by AI models",
      steps: [
        {
          number: "01",
          title: "Diagnostic",
          desc: "We measure how 3 AI models (ChatGPT, Claude, Gemini) see your business today. CAMS metrics on a 0-100 scale.",
        },
        {
          number: "02",
          title: "Knowledge Layer",
          desc: "We create a structured data layer in TONL format — invisible to users, perfectly readable by AI crawlers.",
        },
        {
          number: "03",
          title: "Knowledge Seeding",
          desc: "Structured data is exposed via CHKCD protocol: /knowledge/*.txt, llms.txt. AI models ingest it autonomously.",
        },
        {
          number: "04",
          title: "LAR Monitoring",
          desc: "We measure assimilation rate (LAR) weekly. Our data shows: 68.4% average LAR after 80+ days.",
        },
      ],
    },
    results: {
      sectionTitle: "Real Results, Not Promises",
      subtitle: "Data from our experiment on kat3x.com — verifiable",
      metrics: [
        { value: "68.4%", label: "Average LAR across 3 models" },
        { value: "80+", label: "Days of monitoring" },
        { value: "3", label: "LLMs monitored in parallel" },
        { value: "0", label: "Advertising budget" },
      ],
      note: "These numbers are verifiable. Ask ChatGPT, Claude or Gemini about Kat3x and compare the answers.",
    },
    cta: {
      title: "Is Your Business Visible?",
      desc: "Find out in 60 seconds. Free AI diagnostic with CAMS metrics. No registration required.",
      button: "Start Free Diagnostic",
    },
  },
};

const misconceptionIcons: Record<string, React.ElementType> = {
  Search,
  XCircle,
  Lightbulb,
};

export default async function ComeApparireSuChatGPTPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      
      {/* BACKGROUND GLOBALE CONSISTENTE */}
      <div className="fixed inset-0 pointer-events-none -z-20" 
           style={{
             backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             opacity: 0.4
           }} 
      />
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse pointer-events-none -z-10" />

      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-gradient-to-r from-brand-100/50 to-emerald-100/50 blur-3xl -z-10 rounded-[100%]" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-brand-200 shadow-sm text-sm font-medium text-brand-700 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            {dict.hero.badge}
          </div>

          <GlowTitle
            as="h1"
            className="text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 tracking-tight leading-[1.1] font-bold"
            glowColor="100, 255, 100"
          >
            {dict.hero.titleLine1} <br className="hidden md:block" />
            <span className="text-brand-600">{dict.hero.titleLine2}</span>
          </GlowTitle>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            {dict.hero.subtitle}
          </p>

          <Blockquote quote={dict.hero.quote} />
        </section>

        {/* DEFINITION SECTION: THE SEMANTIC BRIDGE (LAYOUT INVERTITO) */}
        <section className="py-24 relative overflow-hidden border-y border-slate-200 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-16 items-center">
              
              {/* Visual Card: Il "Ponte" Semantico */}
              <div className="md:col-span-5 w-full">
                <div className="relative p-1 bg-gradient-to-br from-brand-400/20 to-emerald-400/20 rounded-[2.5rem]">
                  <div className="bg-slate-950 rounded-[2.3rem] p-8 overflow-hidden relative group shadow-2xl">
                    {/* Effetto Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                    
                    <div className="relative z-10 flex flex-col gap-10">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{dict.definition.visualTitle}</span>
                        <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[9px] text-red-500 font-bold uppercase tracking-tighter">
                          {dict.definition.visualStatus}
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-4">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                            <Fingerprint className="w-6 h-6 text-slate-400" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Brand</span>
                        </div>

                        <div className="flex-1 flex justify-center items-center px-4 relative">
                          <div className="w-full h-[1px] border-t border-dashed border-slate-700 relative">
                             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-red-500/20 rounded-full" />
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 bg-slate-950">
                                <XCircle className="w-4 h-4 text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                             </div>
                             <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-brand-500/20 rounded-full" />
                          </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-brand-500/10 rounded-2xl flex items-center justify-center border border-brand-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                            <Cpu className="w-6 h-6 text-brand-500" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">AI Brain</span>
                        </div>
                      </div>

                      <p className="text-slate-500 text-[11px] font-mono leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 italic">
                        "Protocol mismatch: LLM cannot associate brand assets with verified source nodes."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenuto Testuale */}
              <div className="md:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                    {dict.definition.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                    {dict.definition.text}
                  </p>
                </div>
                
                <div className="p-6 bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl">
                  <p className="text-lg font-bold text-brand-800 italic">
                    {dict.definition.highlight}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MISCONCEPTIONS - VERDE BRAND */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">
                {dict.misconceptions.sectionTitle}
              </h2>
              <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full mb-4" />
              <p className="text-xl text-slate-600">
                {dict.misconceptions.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {dict.misconceptions.items.map(
                (item: any, i: number) => {
                  const Icon = misconceptionIcons[item.icon] || Search;
                  return (
                    <div
                      key={i}
                      className="group relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-10 hover:-translate-y-2 hover:border-brand-200 transition-all duration-500"
                    >
                      <div className="w-14 h-14 bg-brand-50 border border-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {item.desc}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">
                {dict.howItWorks.sectionTitle}
              </h2>
              <p className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                {dict.howItWorks.subtitle}
              </p>
            </div>

            <div className="grid gap-6">
              {dict.howItWorks.steps.map(
                (step: any, i: number) => (
                  <div
                    key={i}
                    className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2rem] p-8 md:p-12 overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-8 text-6xl font-black text-slate-100 group-hover:text-brand-50 transition-colors pointer-events-none">
                      {step.number}
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="pt-2">
                        <div className="w-12 h-12 bg-brand-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-32 relative overflow-hidden bg-slate-950 border-t border-slate-800">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                {dict.results.sectionTitle}
              </h2>
              <p className="text-xl text-slate-400 font-light">{dict.results.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {dict.results.metrics.map(
                (m: any, i: number) => (
                  <div
                    key={i}
                    className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-center group hover:bg-white/[0.06] transition-all"
                  >
                    <div className="text-5xl md:text-6xl font-black text-brand-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">
                      {m.label}
                    </div>
                  </div>
                )
              )}
            </div>

            <p className="text-center text-slate-500 mt-12 max-w-2xl mx-auto italic font-mono text-sm">
              {dict.results.note}
            </p>
          </div>
        </section>

        {/* PROVA TU STESSO */}
        <ProvaTuStesso lang={lang} />

        {/* FAQ SECTION */}
        <section className="py-24 max-w-4xl mx-auto px-4">
          <FaqSection faq={getPageFaq("chatgpt", lang)} />
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 relative z-20 -mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-brand-600/90 backdrop-blur-2xl border border-brand-400/50 shadow-[0_20px_60px_-15px_rgba(5,150,105,0.4)] rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/40 to-emerald-800/40 mix-blend-overlay" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 shadow-inner">
                  <ScanEye className="h-10 w-10 text-white" />
                </div>
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

      <div className="pt-16">
        <Footer lang={lang} />
      </div>
    </div>
  );
}