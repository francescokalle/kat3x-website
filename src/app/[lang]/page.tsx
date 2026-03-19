import React from 'react';
import { FileText, Quote, ScanEye, Search, Share2, ShieldCheck } from 'lucide-react';
import GlowTitle from '../components/GlowTitle';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import reportsData from '@res/data/reports/reports-data.json';
import BlockQuote from '../components/blockquote';

const dictionaries: Record<string, any> = {
  it: {
    hero: {
      titleLine1: "L'Osservatorio indipendente",
      titleLine2: "sulla",
      highlight: "AI Citability",
      description: "Kat3x analizza e definisce come i Large Language Models mappano il tessuto produttivo. Applichiamo pratiche di Knowledge Seeding per trasformare l'invisibilità digitale in Semantic Recognition.",
      quote: "Un’intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato."
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
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      
      {/* --- BACKGROUND DECORATIVO GLOBALE PER EFFETTO VETRO --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse pointer-events-none -z-10" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-300/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse pointer-events-none -z-10" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      {/* ----------------------------------------------------- */}

      <Navbar lang={lang}/>

      <main>
        {/* HERO SECTION */}
        <section className="pt-30 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mt-8 md:mt-0 relative">
          <GlowTitle 
            as="h1" 
            className="text-4xl sm:text-5xl md:text-6xl text-slate-900 tracking-tight"
            glowColor="100, 255, 100"
          >
            {dict.hero.titleLine1} <br className="hidden sm:block" /> {dict.hero.titleLine2} <span className="text-brand-600">{dict.hero.highlight}</span>
          </GlowTitle>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 px-2 mt-6 relative z-10">
            {dict.hero.description}
          </p>
          
          <BlockQuote quote={dict.hero.quote}/>
        </section>

        {/* IDENTITY & ROLES SECTION */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{dict.identity.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              
              {/* CARD KAT3X - GLASSMORPHISM */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 md:p-10 rounded-3xl break-words overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="p-2 bg-white/50 rounded-xl shadow-sm border border-white/40">
                    <Search className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  </div>
                  <span>{dict.identity.kat3xTitle}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.identity.kat3xDesc}
                </p>
              </div>

              {/* CARD CHKCD - GLASSMORPHISM */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 md:p-10 rounded-3xl break-words overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
                <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-3">
                  <div className="p-2 bg-white/50 rounded-xl shadow-sm border border-white/40">
                    <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  </div>
                  <span>{dict.identity.chkcdTitle}</span>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.identity.chkcdDesc}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* THE 3 PILLARS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            {/* PILLAR 1 */}
            <article className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="w-14 h-14 bg-brand-100/50 backdrop-blur-md border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.pillars.p1Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p1Desc}</p>
            </article>

            {/* PILLAR 2 */}
            <article className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="w-14 h-14 bg-brand-100/50 backdrop-blur-md border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ScanEye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.pillars.p2Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p2Desc}</p>
            </article>

            {/* PILLAR 3 */}
            <article className="relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 rounded-3xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <div className="w-14 h-14 bg-brand-100/50 backdrop-blur-md border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Quote className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{dict.pillars.p3Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p3Desc}</p>
            </article>

          </div>
        </section>

        {/* EXPERIMENTS DASHBOARD (DARK GLASSMORPHISM) */}
        <section className="py-20 relative overflow-hidden bg-slate-900/95 backdrop-blur-3xl border-t border-slate-800">
          {/* Sfondi sfocati interni per la dark mode */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-3">{dict.experiments.title}</h2>
                <p className="text-slate-400">{dict.experiments.subtitle}</p>
              </div>
              <a href={`/${lang}/knowledge/experiments`} className="text-brand-400 hover:text-brand-300 font-medium mt-4 md:mt-0 flex items-center gap-1 transition-colors">
                {dict.experiments.viewAll} &rarr;
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reportsData.map((report) => (
                <div key={report.id} className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:bg-white/10 transition-colors">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{report.category}</div>
                    {report.status === 'coming_soon' && (
                      <span className="text-xs font-medium bg-white/10 text-slate-300 px-3 py-1 rounded-full border border-white/10">
                        {dict.experiments.comingSoon}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{report.title}</h3>
                  <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">{report.description}</p>
                  
                  {report.formats.length > 0 && (
                    <div className="flex gap-2 text-sm flex-wrap">
                      {report.formats.map((format) => (
                        <span key={format} className="flex items-center gap-1.5 text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                          <FileText className="h-4 w-4 text-brand-400"/> {format}
                        </span>
                      ))}
                    </div>
                  )}
                  {report.formats.length === 0 && (
                    <div className="text-sm text-slate-500 italic">
                      {dict.experiments.processing}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION (GLASSMORPHISM SU SFONDO COLORATO) */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
          {/* Base colorata */}
          <div className="absolute inset-0 bg-brand-600" />
          {/* Effetti luminosi sullo sfondo della CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-400/50 to-emerald-600/50 mix-blend-overlay" />
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/20 rounded-full filter blur-[100px]" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            {/* CARD GLASSMORPHISM INTERNA */}
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-12 md:p-16 text-center text-white overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.ctaSection.title}</h2>
              <p className="text-lg md:text-xl text-brand-50 mb-10 max-w-2xl mx-auto leading-relaxed">
                {dict.ctaSection.desc}
              </p>
              <a href={`/${lang}/diagnostic`} className="inline-block bg-white/90 backdrop-blur-md text-brand-700 font-bold text-lg px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:bg-white hover:scale-105 transition-all duration-300">
                {dict.ctaSection.button}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};