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
        "ChatGPT non cita la tua azienda? Non e' un problema di SEO. E' un problema di struttura. Ecco come risolverlo con dati reali.",
      quote:
        "Non basta essere online. Serve essere compresi. Dalle macchine, non solo dalle persone.",
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
    },
    misconceptions: {
      sectionTitle: "What Does NOT Work",
      subtitle: "Three common mistakes when trying to appear in LLMs",
      items: [
        {
          icon: "Search",
          title: "More SEO",
          desc: "SEO ranks you on Google. ChatGPT, Claude and Gemini do NOT use Google to answer questions. They have completely different data ingestion systems. More keywords won't help.",
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
          desc: "We measure how 3 AI models (ChatGPT, Claude, Gemini) see your business today. CAMS metrics on a 0-100 scale. Results in 60 seconds.",
        },
        {
          number: "02",
          title: "Knowledge Layer",
          desc: "We create a structured data layer in TONL format — invisible to users, perfectly readable by AI crawlers. 50-70% token reduction.",
        },
        {
          number: "03",
          title: "Knowledge Seeding",
          desc: "Structured data is exposed via CHKCD protocol: /knowledge/*.txt, llms.txt, Schema.org JSON-LD. AI models ingest it autonomously.",
        },
        {
          number: "04",
          title: "LAR Monitoring",
          desc: "We measure assimilation rate (LAR) weekly. Our data shows: 68.4% average LAR after 80+ days, verifiable across 3 models.",
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
      <PageBackground />
      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO */}
        <section className="relative pt-24 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl h-56 bg-gradient-to-r from-brand-100/60 to-emerald-100/40 blur-3xl -z-10 rounded-[100%]" />

          <GlowTitle
            as="h1"
            className="text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.05]"
            glowColor="100, 255, 100"
          >
            {dict.hero.titleLine1}{" "}
            <br className="hidden sm:block" />
            <span className="text-brand-600">{dict.hero.titleLine2}</span>
          </GlowTitle>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            {dict.hero.subtitle}
          </p>

          <DefinitionSnippet
            term="Apparire su ChatGPT"
            definition="significa rendere la propria conoscenza aziendale strutturata e leggibile per i modelli linguistici attraverso Knowledge Seeding e formati come TONL, non attraverso SEO tradizionale."
            className="mb-12"
          />

          <Blockquote quote={dict.hero.quote} />
        </section>

        {/* MISCONCEPTIONS */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-2">
                {dict.misconceptions.sectionTitle}
              </h2>
              <div className="w-12 h-1 bg-red-200 mx-auto rounded-full mb-4" />
              <p className="text-xl text-slate-600">
                {dict.misconceptions.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {dict.misconceptions.items.map(
                (
                  item: { icon: string; title: string; desc: string },
                  i: number
                ) => {
                  const Icon = misconceptionIcons[item.icon] || Search;
                  return (
                    <div
                      key={i}
                      className="group relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-8 overflow-hidden hover:-translate-y-0.5 transition-all"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                      <div className="w-12 h-12 bg-red-50/70 border border-red-200/60 text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — Steps */}
        <section className="py-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">
                {dict.howItWorks.sectionTitle}
              </h2>
              <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full mb-4" />
              <p className="text-xl text-slate-600">
                {dict.howItWorks.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {dict.howItWorks.steps.map(
                (
                  step: { number: string; title: string; desc: string },
                  i: number
                ) => (
                  <div
                    key={i}
                    className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-3xl p-8 md:p-10 overflow-hidden"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="flex items-start gap-6">
                      <div className="text-5xl font-black text-brand-100 select-none flex-shrink-0 leading-none">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-900">
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

        {/* RESULTS — Big Numbers */}
        <section className="py-20 relative overflow-hidden bg-slate-950 border-y border-slate-800">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                {dict.results.sectionTitle}
              </h2>
              <p className="text-lg text-slate-400">{dict.results.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dict.results.metrics.map(
                (m: { value: string; label: string }, i: number) => (
                  <div
                    key={i}
                    className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
                  >
                    <div className="text-5xl md:text-6xl font-black text-brand-400 mb-2">
                      {m.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                )
              )}
            </div>

            <p className="text-center text-slate-500 mt-8 max-w-2xl mx-auto">
              {dict.results.note}
            </p>
          </div>
        </section>

        {/* PROVA TU STESSO */}
        <ProvaTuStesso lang={lang} />

        {/* FAQ SECTION */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4">
            <FaqSection faq={getPageFaq("chatgpt", lang)} />
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
                <Zap className="h-12 w-12 text-white/80 mb-6" />
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
