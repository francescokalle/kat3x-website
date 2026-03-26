// ============================================================
// PAGINA: /[lang]/invisibilita-semantica
// ============================================================

import React from "react";
import {
  EyeOff,
  TrendingDown,
  Brain,
  BarChart3,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  ScanEye,
  ShieldCheck,
  Search,
  Fingerprint
} from "lucide-react";
import GlowTitle from "../../components/GlowTitle";
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Blockquote from "@/app/components/blockquote";
import ProvaTuStesso from "@/app/components/ProvaTuStesso";
import FaqSection from "@/app/components/FaqSection";
import { getPageMetadata, getPageFaq } from "@/config/metadata-per-page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return getPageMetadata("invisibilita", lang);
}

const dictionaries: Record<string, any> = {
  it: {
    hero: {
      titleLine1: "Invisibilità",
      titleLine2: "Semantica",
      subtitle: "Il tuo sito è primo su Google. Ma ChatGPT non sa che esisti. Benvenuto nella nuova dimensione del vuoto digitale.",
      quote: "Un'intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato.",
      badge: "Semantic Recognition Protocol"
    },
    definition: {
      title: "Cos'è l'Invisibilità Semantica?",
      text: "È la condizione di un'entità digitale presente nei database dei motori di ricerca ma non correttamente mappata o citata dai Large Language Models. Il sito esiste per gli algoritmi di ranking, ma rimane un 'fantasma' nello spazio vettoriale delle AI per mancanza di strutture dati leggibili dalle macchine.",
      highlight: "Non è un errore di indicizzazione, è un fallimento di comprensione."
    },
    problem: {
      sectionTitle: "Il Problema Che Non Vedi",
      cards: [
        {
          icon: "EyeOff",
          title: "Siti per Umani",
          desc: "Un Large Language Model non vede il tuo design. Analizza nodi semantici. Se non li trova, per l'AI non esisti.",
        },
        {
          icon: "TrendingDown",
          title: "Ricerca Conversazionale",
          desc: "Entro il 2026, il 25% delle ricerche passerà da interfacce AI. Chi è invisibile ai modelli perde il mercato.",
        },
        {
          icon: "Brain",
          title: "Oltre la SEO",
          desc: "La SEO tradizionale ti posiziona su Google, ma gli LLM hanno sistemi di ingestione dati proprietari e indipendenti.",
        },
      ],
    },
    symptoms: {
      sectionTitle: "Sintomi dell'Invisibilità",
      subtitle: "Diagnosi rapida del posizionamento semantico aziendale",
      items: [
        "ChatGPT fornisce informazioni obsolete o errate sul tuo brand",
        "I concorrenti appaiono nelle raccomandazioni AI, tu no",
        "Il tuo sito è indicizzato su Google ma ignorato dai crawler AI",
        "I tuoi dati tecnici non vengono estratti correttamente dai sistemi RAG",
      ],
    },
    solution: {
      sectionTitle: "L'Architettura della Soluzione",
      subtitle: "Come Kat3x colma il divario tra dati e modelli.",
      items: [
        {
          title: "Knowledge Layer",
          desc: "Uno strato di dati in formato TONL, ottimizzato per ridurre il consumo di token e massimizzare la comprensione AI.",
        },
        {
          title: "Metriche CAMS",
          desc: "Misuriamo scientificamente l'effettiva AI Citability della tua architettura web con test replicabili.",
        },
        {
          title: "Protocollo CHKCD",
          desc: "Lo standard normativo che codifica la strutturazione dei dati aziendali per i Large Language Models.",
        },
      ],
    },
    ctaSection: {
      title: "Misura la tua AI Citability",
      desc: "Accedi al Diagnostic Playground. Utilizza il nostro protocollo standard per verificare il livello di ingestione dati del tuo brand sui principali LLM.",
      button: "Avvia Diagnostica Gratuita"
    }
  },
  
  en: {
    hero: {
      titleLine1: "Semantic",
      titleLine2: "Invisibility",
      subtitle: "Your site is #1 on Google. But ChatGPT doesn't know you exist. Welcome to the new dimension of the digital void.",
      quote: "An artificial intelligence cannot cite what it does not understand. And it cannot understand what is not structured.",
      badge: "Semantic Recognition Protocol"
    },
    definition: {
      title: "What is Semantic Invisibility?",
      text: "It is the condition of a digital entity that is present in search engine databases but not correctly mapped or cited by Large Language Models. The site exists for ranking algorithms, but remains a 'ghost' in the AI vector space due to a lack of machine-readable data structures.",
      highlight: "It's not an indexing error; it's a failure of comprehension."
    },
    problem: {
      sectionTitle: "The Problem You Can't See",
      cards: [
        {
          icon: "EyeOff",
          title: "Sites for Humans",
          desc: "A Large Language Model doesn't see your design. It analyzes semantic nodes. If it can't find them, you don't exist to the AI.",
        },
        {
          icon: "TrendingDown",
          title: "Conversational Search",
          desc: "By 2026, 25% of searches will flow through AI interfaces. Those invisible to models lose the market.",
        },
        {
          icon: "Brain",
          title: "Beyond SEO",
          desc: "Traditional SEO ranks you on Google, but LLMs have proprietary and independent data ingestion systems.",
        },
      ],
    },
    symptoms: {
      sectionTitle: "Symptoms of Invisibility",
      subtitle: "Quick diagnosis of your corporate semantic positioning",
      items: [
        "ChatGPT provides outdated or incorrect information about your brand",
        "Competitors appear in AI recommendations while you do not",
        "Your site is indexed on Google but ignored by AI crawlers",
        "Your technical data is not correctly extracted by RAG systems",
      ],
    },
    solution: {
      sectionTitle: "The Solution Architecture",
      subtitle: "How Kat3x bridges the gap between data and models.",
      items: [
        {
          title: "Knowledge Layer",
          desc: "A data layer in TONL format, optimized to reduce token consumption and maximize AI comprehension.",
        },
        {
          title: "CAMS Metrics",
          desc: "We scientifically measure the actual AI Citability of your web architecture with replicable tests.",
        },
        {
          title: "CHKCD Protocol",
          desc: "The regulatory standard that encodes the structuring of corporate data for Large Language Models.",
        },
      ],
    },
    ctaSection: {
      title: "Measure your AI Citability",
      desc: "Access the Diagnostic Playground. Use our standard protocol to verify the data ingestion level of your brand across major LLMs.",
      button: "Start Free Diagnostics"
    }
  }
};

const iconMap: Record<string, React.ElementType> = {
  EyeOff: Search,
  TrendingDown: ScanEye,
  Brain: ShieldCheck,
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
      
      {/* --- BACKGROUND CONSISTENTE CON HOME --- */}
      <div className="fixed inset-0 pointer-events-none -z-20" 
           style={{
             backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             opacity: 0.4
           }} 
      />
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-[-5%] w-[40vw] h-[40vw] bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-pulse pointer-events-none -z-10" />

      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-gradient-to-r from-brand-100/50 to-emerald-100/50 blur-3xl -z-10 rounded-[100%]" />

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

        {/* NEW DEFINITION SECTION - COSA SIGNIFICA INVISIBILITÀ SEMANTICA */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Parte Testuale */}
              <div className="md:col-span-7 space-y-6">
                <div className="inline-block p-3 bg-brand-100 rounded-2xl text-brand-700 mb-2">
                  <Fingerprint className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                  {dict.definition.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {dict.definition.text}
                  </p>
                  <p className="text-lg font-bold text-brand-600 border-l-4 border-brand-500 pl-4 py-2 bg-brand-50/50">
                    {dict.definition.highlight}
                  </p>
                </div>
              </div>

{/* Box Minimalista - Stato di caricamento infinito */}
<div className="md:col-span-5 relative">
  <div className="relative bg-slate-900 border border-white/5 rounded-[2rem] p-10 shadow-xl overflow-hidden min-h-[350px] flex flex-col justify-center">
    
    {/* Effetto Shimmer (il riflesso che passa pulito) */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

    <div className="relative z-10 space-y-8">
      
      {/* Indicatore di stato semplice */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Analisi in corso...</span>
      </div>

      {/* Testo Skeleton (Barre che pulsano) */}
      <div className="space-y-6">
        {/* Titolo mancante */}
        <div className="h-7 bg-white/10 rounded-md w-3/4 animate-pulse" />
        
        {/* Descrizione mancante */}
        <div className="space-y-3">
          <div className="h-2.5 bg-white/5 rounded-sm w-full animate-pulse delay-75" />
          <div className="h-2.5 bg-white/5 rounded-sm w-full animate-pulse delay-150" />
          <div className="h-2.5 bg-white/5 rounded-sm w-4/5 animate-pulse delay-300" />
        </div>
      </div>

      {/* Messaggio finale semplice */}
      <div className="pt-4 border-t border-white/5">
        <p className="text-slate-400 text-sm leading-relaxed">
          Nessuna informazione strutturata trovata. <br />
          <span className="text-brand-500 font-medium text-xs uppercase tracking-wider">Risposta AI: Non pervenuta.</span>
        </p>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </section>

        {/* BENTO GRID PROBLEMS */}
        <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand-600 mb-2">{dict.problem.sectionTitle}</h2>
            <div className="w-12 h-1 bg-brand-300 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {dict.problem.cards.map((card: any, i: number) => {
              const Icon = iconMap[card.icon] || Search;
              return (
                <div 
                  key={i} 
                  className={`relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden group transition-all hover:bg-white/80 ${
                    i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-12"
                  }`}
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8">
                      <Icon className="h-7 w-7 text-brand-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{card.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SYMPTOMS - DARK VERSION */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto relative bg-slate-950 border border-slate-800 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-900/30 border border-brand-500/20 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-brand-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{dict.symptoms.sectionTitle}</h2>
              </div>
              <p className="text-slate-400 text-xl mb-12 font-light italic">{dict.symptoms.subtitle}</p>
              <div className="grid gap-6">
                {dict.symptoms.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.06] transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_#10b981]" />
                    <span className="text-slate-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900">{dict.solution.sectionTitle}</h2>
            <p className="text-xl text-slate-600">{dict.solution.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dict.solution.items.map((item: any, i: number) => (
              <article key={i} className="relative bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-10 rounded-3xl group hover:-translate-y-2 transition-all duration-500">
                <CheckCircle2 className="h-10 w-10 text-brand-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <ProvaTuStesso lang={lang} />

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

      <div className="pt-16">
        <Footer lang={lang} />
      </div>
    </div>
  );
}