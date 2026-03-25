import React from 'react';
import { FileText, Quote, ScanEye, Search, Share2, ShieldCheck, ChevronRight } from 'lucide-react';
import GlowTitle from '../components/GlowTitle';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

import reportsData from '@res/data/reports/reports-data.json';
import BlockQuote from '../components/blockquote';
import { getPageMetadata } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("home", lang);
}

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
      subtitle: "Come colmiamo il divario tra i dati aziendali e i Large Language Models.",
      kat3xTitle: "Kat3x: Il Nodo Osservativo",
      kat3xDesc: "Monitoriamo l'ingestione dati e l'assimilazione semantica dei brand nei modelli Generativi. Attraverso Protocolli Diagnostici rigorosi, misuriamo l'effettiva AI Citability delle architetture web aziendali.",
      chkcdTitle: "CHKCD: Lo Standard Normativo",
      chkcdDesc: "Il framework tecnico indipendente che codifica la strutturazione dei dati tramite sintassi TONL. Fornisce le direttive base affinché i crawler delle AI possano estrarre informazioni senza dispersione semantica."
    },
    pillars: {
      sectionTitle: "I Tre Pilastri del Riconoscimento",
      p1Title: "Knowledge Seeding",
      p1Desc: "Dispieghiamo nodi semantici ottimizzati per favorire l'ingestione diretta da parte dei sistemi RAG e dei crawler LLM. Prepariamo il terreno per gli algoritmi.",
      p2Title: "Protocollo Diagnostico",
      p2Desc: "Non offriamo opinioni, ma test scientifici e replicabili per valutare il grado di Semantic Recognition del tuo brand su scala globale.",
      p3Title: "AI Citability",
      p3Desc: "L'obiettivo finale: garantire che l'azienda sia presente, citata e compresa nei processi decisionali guidati dall'Intelligenza Artificiale."
    },
    experiments: {
      title: "AI Visibility Reports",
      subtitle: "Knowledge Seeding: Esperimenti di assimilazione semantica recenti.",
      viewAll: "Vedi tutti i report",
      comingSoon: "In Arrivo",
      processing: "In elaborazione..."
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
      subtitle: "How we bridge the gap between corporate data and Large Language Models.",
      kat3xTitle: "Kat3x: The Observational Node",
      kat3xDesc: "We monitor data ingestion and semantic brand assimilation in Generative models. Through rigorous Diagnostic Protocols, we measure the actual AI Citability of corporate web architectures.",
      chkcdTitle: "CHKCD: The Normative Standard",
      chkcdDesc: "The independent technical framework encoding data structuring via TONL syntax. It provides baseline directives so AI crawlers can extract information without semantic dispersion."
    },
    pillars: {
      sectionTitle: "The Three Pillars of Recognition",
      p1Title: "Knowledge Seeding",
      p1Desc: "We deploy optimized semantic nodes to favor direct ingestion by RAG systems and LLM crawlers. Setting the stage for algorithms.",
      p2Title: "Diagnostic Protocol",
      p2Desc: "We do not offer opinions, but scientific and replicable tests to assess your brand's degree of Semantic Recognition on a global scale.",
      p3Title: "AI Citability",
      p3Desc: "The ultimate goal: ensuring the company is present, cited, and understood in AI-driven decision-making processes."
    },
    experiments: {
      title: "AI Visibility Reports",
      subtitle: "Knowledge Seeding: Recent semantic assimilation experiments.",
      viewAll: "View all reports",
      comingSoon: "Coming Soon",
      processing: "Processing..."
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      
      {/* --- BACKGROUND GLOBALE (DOT PATTERN + ORBS) --- */}
      <div className="fixed inset-0 pointer-events-none -z-20" 
           style={{
             backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             opacity: 0.4
           }} 
      />
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse pointer-events-none -z-10" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-1/4 right-[-5%] w-[40vw] h-[40vw] bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse pointer-events-none -z-10" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      {/* ----------------------------------------------- */}

      <Navbar lang={lang}/>

      <main>
        {/* HERO SECTION - Resa più ariosa e bilanciata */}
        <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
          
          {/* Elemento decorativo dietro al titolo */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-gradient-to-r from-brand-100/50 to-emerald-100/50 blur-3xl -z-10 rounded-[100%]" />

          <div className="text-center w-full max-w-4xl relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-brand-200 shadow-sm text-sm font-medium text-brand-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Intelligence Visibility Protocol
            </div>

            <GlowTitle 
              as="h1" 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight leading-[1.1]"
              glowColor="100, 255, 100"
            >
              {dict.hero.titleLine1} <br className="hidden md:block" /> 
              <span className="text-slate-500 font-light">{dict.hero.titleLine2}</span> <span className="text-brand-600">{dict.hero.highlight}</span>
            </GlowTitle>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {dict.hero.description}
            </p>
          </div>

          {/* Blockquote posizionato in modo asimmetrico per spezzare */}
          <div className="w-full mt-16 md:mt-24 relative z-20 md:-mb-24">
            <BlockQuote quote={dict.hero.quote}/>
          </div>
        </section>

        {/* IDENTITY & ROLES - Layout Asimmetrico (Bento Grid) */}
        <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-16 md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">{dict.identity.title}</h2>
              <p className="text-xl text-slate-600">{dict.identity.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
              
              {/* CARD KAT3X - Più larga (7 colonne) */}
              <div className="md:col-span-7 relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 md:p-12 rounded-[2rem] flex flex-col justify-between overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100/50 rounded-full mix-blend-multiply blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8">
                    <Search className="h-8 w-8 text-brand-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                    {dict.identity.kat3xTitle}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    {dict.identity.kat3xDesc}
                  </p>
                </div>
              </div>

              {/* CARD CHKCD - Più stretta e alta (5 colonne) */}
              <div className="md:col-span-5 relative bg-gradient-to-br from-slate-800 to-slate-900 text-white backdrop-blur-xl border border-slate-700 shadow-xl p-8 md:p-12 rounded-[2rem] flex flex-col justify-between overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl -mr-20 -mb-20 transition-transform duration-700 group-hover:scale-110" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-inner border border-slate-600 flex items-center justify-center mb-8">
                    <ShieldCheck className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {dict.identity.chkcdTitle}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {dict.identity.chkcdDesc}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* THE 3 PILLARS - Layout Sfalsato (Staggered) */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">{dict.pillars.sectionTitle}</h2>
            <div className="w-12 h-1 bg-brand-200 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 items-start">
            
            {/* PILLAR 1 */}
            <article className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 lg:p-10 rounded-3xl overflow-hidden group transition-[transform] duration-500 hover:[transform:translateY(-8px)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Share2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{dict.pillars.p1Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p1Desc}</p>
            </article>

            {/* PILLAR 2 */}
            <article className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 lg:p-10 rounded-3xl overflow-hidden group transition-[transform] duration-500 md:[transform:translateY(3rem)] md:hover:[transform:translateY(calc(3rem_-_8px))]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ScanEye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{dict.pillars.p2Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p2Desc}</p>
            </article>

            {/* PILLAR 3 */}
            <article className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 lg:p-10 rounded-3xl overflow-hidden group transition-[transform] duration-500 md:[transform:translateY(6rem)] lg:[transform:translateY(6rem)] md:hover:[transform:translateY(calc(6rem_-_8px))] lg:hover:[transform:translateY(calc(6rem_-_8px))]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-50 border border-brand-200 text-brand-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Quote className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{dict.pillars.p3Title}</h3>
              <p className="text-slate-600 leading-relaxed">{dict.pillars.p3Desc}</p>
            </article>

          </div>
        </section>

        {/* EXPERIMENTS DASHBOARD - Estensione a tutto schermo e profondità */}
        <section className="py-32 mt-12 relative overflow-hidden bg-slate-950 border-t border-slate-800">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full mix-blend-screen filter blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">{dict.experiments.title}</h2>
                <p className="text-lg text-slate-400">{dict.experiments.subtitle}</p>
              </div>
              <a href={`/${lang}/knowledge/experiments`} className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-brand-300 transition-all font-medium">
                {dict.experiments.viewAll} 
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportsData.map((report) => (
                <div key={report.id} className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-brand-400 uppercase tracking-widest bg-brand-900/30 px-3 py-1.5 rounded-lg border border-brand-500/20">
                      {report.category}
                    </span>
                    {report.status === 'coming_soon' && (
                      <span className="text-xs font-medium bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700">
                        {dict.experiments.comingSoon}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-100">{report.title}</h3>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{report.description}</p>
                  
                  {report.formats.length > 0 ? (
                    <div className="flex gap-2 text-sm flex-wrap mt-auto">
                      {report.formats.map((format) => (
                        <span key={format} className="flex items-center gap-1.5 text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                          <FileText className="h-4 w-4 text-brand-400"/> {format}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-auto w-fit px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                      <span className="text-sm text-slate-400 font-medium">{dict.experiments.processing}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION - Sospesa sul footer */}
        <section className="py-24 px-4 sm:px-6 relative z-20 -mb-16">
          <div className="max-w-5xl mx-auto">
            {/* CONTAINER GLASSMORPHISM */}
            <div className="relative bg-brand-600/90 backdrop-blur-2xl border border-brand-400/50 shadow-[0_20px_60px_-15px_rgba(5,150,105,0.4)] rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden">
              
              {/* Effetti luminosi interni */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/40 to-emerald-800/40 mix-blend-overlay" />
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-8 border border-white/20 shadow-inner">
                  <ScanEye className="h-10 w-10 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{dict.ctaSection.title}</h2>
                <p className="text-xl md:text-2xl text-brand-50 mb-12 max-w-3xl leading-relaxed font-light">
                  {dict.ctaSection.desc}
                </p>
                <a href={`/${lang}/diagnostic`} className="inline-flex items-center gap-3 bg-white text-brand-700 font-bold text-lg px-10 py-5 rounded-2xl shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300">
                  {dict.ctaSection.button}
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Aggiunta di un po' di padding top al footer per compensare l'overlapping della CTA */}
      <div className="pt-16">
        <Footer lang={lang} />
      </div>
    </div>
  );
};