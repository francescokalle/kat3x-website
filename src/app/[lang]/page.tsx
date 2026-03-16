import React from 'react';
import { FileText, Quote, ScanEye, Search, Share2, ShieldCheck } from 'lucide-react';
import GlowTitle from '../components/GlowTitle';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import reportsData from '@res/data/reports/reports-data.json';

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200">
      
      <Navbar lang={lang}/>

      <main>
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <GlowTitle 
            as="h1" 
            className="text-6xl text-slate-900"
            glowSize="px-40 py-28"
            glowColor="100, 255, 100"
          >
            {dict.hero.titleLine1} <br className="hidden sm:block" /> {dict.hero.titleLine2} <span className="text-brand-600">{dict.hero.highlight}</span>
          </GlowTitle>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            {dict.hero.description}
          </p>
          
          <div className="bg-brand-100 border-l-4 border-brand-600 p-6 max-w-4xl mx-auto text-left rounded-r-lg shadow-sm">
            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic">
              "{dict.hero.quote}"
            </blockquote>
          </div>
        </section>

        {/* IDENTITY & ROLES SECTION */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">{dict.identity.title}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-brand-600" />
                  {dict.identity.kat3xTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.identity.kat3xDesc}
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  {dict.identity.chkcdTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.identity.chkcdDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE 3 PILLARS */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <article className="p-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pillars.p1Title}</h3>
              <p className="text-slate-600">{dict.pillars.p1Desc}</p>
            </article>
            <article className="p-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ScanEye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pillars.p2Title}</h3>
              <p className="text-slate-600">{dict.pillars.p2Desc}</p>
            </article>
            <article className="p-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Quote className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{dict.pillars.p3Title}</h3>
              <p className="text-slate-600">{dict.pillars.p3Desc}</p>
            </article>
          </div>
        </section>

        {/* EXPERIMENTS DASHBOARD */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">{dict.experiments.title}</h2>
                <p className="text-slate-400">{dict.experiments.subtitle}</p>
              </div>
              <a href={`/${lang}/knowledge/experiments`} className="text-brand-400 hover:text-brand-300 font-medium mt-4 md:mt-0 flex items-center gap-1">
                {dict.experiments.viewAll} &rarr;
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reportsData.map((report) => (
                <div key={report.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{report.category}</div>
                    {report.status === 'coming_soon' && (
                      <span className="text-xs font-medium bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {dict.experiments.comingSoon}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{report.title}</h3>
                  <p className="text-sm text-slate-400 mb-6 flex-grow">{report.description}</p>
                  
                  {report.formats.length > 0 && (
                    <div className="flex gap-3 text-sm flex-wrap">
                      {report.formats.map((format) => (
                        <span key={format} className="flex items-center gap-1 text-slate-300 bg-slate-700 px-2 py-1 rounded">
                          <FileText className="h-4 w-4"/> {format}
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

        {/* CTA SECTION */}
        <section className="py-20 bg-brand-600 text-white text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{dict.ctaSection.title}</h2>
            <p className="text-xl text-brand-100 mb-10">
              {dict.ctaSection.desc}
            </p>
            <a href={`/${lang}/diagnostic`} className="inline-block bg-white text-brand-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-50 transition-all">
              {dict.ctaSection.button}
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};