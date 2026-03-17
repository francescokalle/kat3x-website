import React from 'react';
import { FileText, Quote, ScanEye, Search, Share2, ShieldCheck } from 'lucide-react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import reportsData from '@res/data/reports/reports-data.json';

const dictionaries: Record<string, any> = {
  it: {
    hero: {
      badge: "AI Visibility Observatory",
      titleLine1: "L'Osservatorio indipendente",
      titleLine2: "sulla",
      highlight: "AI Citability",
      description: "Kat3x analizza e definisce come i Large Language Models mappano il tessuto produttivo. Applichiamo pratiche di Knowledge Seeding per trasformare l'invisibilità digitale in Semantic Recognition.",
      quote: "Un'intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato."
    },
    identity: {
      title: "L'Architettura dell'Integrazione AI",
      kat3xTitle: "Kat3x: Il Nodo Osservativo",
      kat3xDesc: "Monitoriamo l'ingestione dati e l'assimilazione semantica dei brand nei modelli Generativi. Attraverso Protocolli Diagnostici rigorosi, misuriamo l'effettiva AI Citability delle architetture web aziendali.",
      chkcdTitle: "CHKCD: Lo Standard Normativo",
      chkcdDesc: "Il framework tecnico indipendente che codifica la strutturazione dei dati tramite sintassi TONL. Fornisce le direttive base affinché i crawler delle AI possano estrarre informazioni senza dispersione semantica."
    },
    pillars: {
      p1Title: "1. Knowledge Seeding",
      p1Desc: "Dispieghiamo nodi semantici ottimizzati per favorire l'ingestione diretta da parte dei sistemi RAG e dei crawler LLM.",
      p2Title: "2. Il Protocollo Diagnostico",
      p2Desc: "Non offriamo opinioni, ma test scientifici e replicabili per valutare il grado di Semantic Recognition del tuo brand.",
      p3Title: "3. L'AI Citability",
      p3Desc: "L'obiettivo finale: garantire che l'azienda sia presente, citata e compresa nei processi decisionali guidati dall'Intelligenza Artificiale."
    },
    experiments: {
      title: "AI Visibility Reports",
      subtitle: "Knowledge Seeding: Esperimenti di assimilazione semantica recenti.",
      viewAll: "Vedi tutti i report",
      comingSoon: "In Arrivo",
      processing: "Dati in elaborazione..."
    },
    ctaSection: {
      title: "Misura la tua AI Citability",
      desc: "Accedi al Diagnostic Playground. Utilizza il nostro protocollo standard per verificare il livello di ingestione dati del tuo brand sui principali LLM.",
      button: "Avvia Diagnostica Gratuita"
    }
  },
  en: {
    hero: {
      badge: "AI Visibility Observatory",
      titleLine1: "The Independent Observatory",
      titleLine2: "on",
      highlight: "AI Citability",
      description: "Kat3x analyzes and defines how Large Language Models map the productive fabric. We apply Knowledge Seeding practices to transform digital invisibility into Semantic Recognition.",
      quote: "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured."
    },
    identity: {
      title: "The Architecture of AI Integration",
      kat3xTitle: "Kat3x: The Observational Node",
      kat3xDesc: "We monitor data ingestion and semantic brand assimilation in Generative models. Through rigorous Diagnostic Protocols, we measure the actual AI Citability of corporate web architectures.",
      chkcdTitle: "CHKCD: The Normative Standard",
      chkcdDesc: "The independent technical framework encoding data structuring via TONL syntax. It provides baseline directives so AI crawlers can extract information without semantic dispersion."
    },
    pillars: {
      p1Title: "1. Knowledge Seeding",
      p1Desc: "We deploy optimized semantic nodes to favor direct ingestion by RAG systems and LLM crawlers.",
      p2Title: "2. The Diagnostic Protocol",
      p2Desc: "We do not offer opinions, but scientific and replicable tests to assess your brand's degree of Semantic Recognition.",
      p3Title: "3. AI Citability",
      p3Desc: "The ultimate goal: ensuring the company is present, cited, and understood in AI-driven decision-making processes."
    },
    experiments: {
      title: "AI Visibility Reports",
      subtitle: "Knowledge Seeding: Recent semantic assimilation experiments.",
      viewAll: "View all reports",
      comingSoon: "Coming Soon",
      processing: "Data processing..."
    },
    ctaSection: {
      title: "Measure your AI Citability",
      desc: "Access the Diagnostic Playground. Use our standard protocol to verify your brand's data ingestion level on major LLMs.",
      button: "Start Free Diagnostic"
    }
  }
};

export default async function Kat3xHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen font-sans selection:bg-brand-200">

      <Navbar lang={lang} />

      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="bg-dark text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sm text-muted mb-10 tracking-wide">
              <span className="w-2 h-2 bg-brand-400 rounded-full" />
              {dict.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              {dict.hero.titleLine1}
              <br className="hidden sm:block" />
              {dict.hero.titleLine2}{' '}
              <span className="text-brand-400">{dict.hero.highlight}</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-14 leading-relaxed">
              {dict.hero.description}
            </p>

            {/* Quote */}
            <blockquote className="border border-white/10 bg-white/5 rounded-2xl px-8 py-7 max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-slate-300 italic leading-relaxed">
                &ldquo;{dict.hero.quote}&rdquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ── IDENTITY ─────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark tracking-tight">
                {dict.identity.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-brand-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-brand-50 rounded-xl">
                    <Search className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{dict.identity.kat3xTitle}</h3>
                </div>
                <p className="text-mid leading-relaxed">{dict.identity.kat3xDesc}</p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-brand-300 hover:shadow-sm transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-brand-50 rounded-xl">
                    <ShieldCheck className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{dict.identity.chkcdTitle}</h3>
                </div>
                <p className="text-mid leading-relaxed">{dict.identity.chkcdDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE 3 PILLARS ────────────────────────────────────── */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <Share2 className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{dict.pillars.p1Title}</h3>
                <p className="text-mid text-sm leading-relaxed">{dict.pillars.p1Desc}</p>
              </article>
              <article className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <ScanEye className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{dict.pillars.p2Title}</h3>
                <p className="text-mid text-sm leading-relaxed">{dict.pillars.p2Desc}</p>
              </article>
              <article className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <Quote className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{dict.pillars.p3Title}</h3>
                <p className="text-mid text-sm leading-relaxed">{dict.pillars.p3Desc}</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── REPORTS DASHBOARD ────────────────────────────────── */}
        <section className="py-24 bg-dark text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">{dict.experiments.title}</h2>
                <p className="text-muted">{dict.experiments.subtitle}</p>
              </div>
              <a
                href={`/${lang}/knowledge/experiments`}
                className="text-brand-400 hover:text-brand-300 font-medium mt-4 md:mt-0 flex items-center gap-1 transition-colors"
              >
                {dict.experiments.viewAll} &rarr;
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reportsData.map((report) => (
                <div
                  key={report.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                      {report.category}
                    </div>
                    {report.status === 'coming_soon' && (
                      <span className="text-xs font-medium bg-white/10 text-slate-300 px-2.5 py-1 rounded-full">
                        {dict.experiments.comingSoon}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold mb-3">{report.title}</h3>
                  <p className="text-sm text-muted mb-6 flex-grow leading-relaxed">{report.description}</p>

                  {report.formats.length > 0 ? (
                    <div className="flex gap-2 text-sm flex-wrap">
                      {report.formats.map((format) => (
                        <span
                          key={format}
                          className="flex items-center gap-1.5 text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg text-xs"
                        >
                          <FileText className="h-3.5 w-3.5" /> {format}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 italic">{dict.experiments.processing}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-24 bg-brand-600 text-white text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{dict.ctaSection.title}</h2>
            <p className="text-lg text-brand-100 mb-10 leading-relaxed max-w-xl mx-auto">
              {dict.ctaSection.desc}
            </p>
            <a
              href={`/${lang}/diagnostic`}
              className="inline-block bg-white text-brand-700 font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:bg-brand-50 transition-all"
            >
              {dict.ctaSection.button}
            </a>
          </div>
        </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
};
