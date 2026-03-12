import React from 'react';
import { Activity, BookOpen, Database, FileText, Search, ShieldCheck } from 'lucide-react';
import GlowTitle from './components/GlowTitle';

// Importiamo i dati direttamente dal file JSON locale
import reportsData from '@res/data/reports-data.json';

const Kat3xHome = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200">
      {/* HEADER / NAVIGATION */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-brand-600" />
            <span className="font-bold text-xl tracking-tight">Kat3x</span>
            <span className="hidden sm:inline-block text-sm text-slate-500 ml-2 border-l pl-2 border-slate-300">
              AI Visibility Observatory
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="/problem" className="hover:text-brand-600 transition-colors">The Problem</a>
            <a href="/use-cases" className="hover:text-brand-600 transition-colors">Use Cases</a>
            <a href="/knowledge/methodology" className="hover:text-brand-600 transition-colors">Methodology</a>
            <a href="https://chkcd.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">CHKCD Standard</a>
          </nav>
          <div>
            <a href="/diagnostic" className="bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-700 transition-colors">
              Run Self-Test
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <GlowTitle 
            as="h1" 
            className="text-6xl text-slate-900 uppercase"
            glowSize="px-40 py-28" // Lo rendiamo enorme per la Hero
            glowColor="50, 255, 100"
          >
            L'Osservatorio indipendente<br />
            <span className="text-brand-600">AI Citability</span>
          </GlowTitle>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            Kat3x analizza e definisce come i Large Language Models mappano il tessuto produttivo. 
            Applichiamo pratiche di Knowledge Seeding per trasformare l'invisibilità digitale in Semantic Recognition.
          </p>
          
          {/* CANONICAL PHRASE - OBLIGATORY */}
          <div className="bg-brand-100 border-l-4 border-brand-600 p-6 max-w-4xl mx-auto text-left rounded-r-lg shadow-sm">
            <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic">
              "Un’intelligenza artificiale non può citare ciò che non comprende. E non può comprendere ciò che non è strutturato."
            </blockquote>
          </div>
        </section>

        {/* IDENTITY & ROLES SECTION */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">L'Architettura dell'Integrazione AI</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Search className="h-5 w-5 text-brand-600" />
                  Kat3x: Il Nodo Osservativo
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Monitoriamo l'ingestione dati e l'assimilazione semantica dei brand nei modelli Generativi. Attraverso Protocolli Diagnostici rigorosi, misuriamo l'effettiva AI Citability delle architetture web aziendali.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  CHKCD: Lo Standard Normativo
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Il framework tecnico indipendente che codifica la strutturazione dei dati tramite sintassi TONL. Fornisce le direttive base affinché i crawler delle AI possano estrarre informazioni senza dispersione semantica.
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
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Knowledge Seeding</h3>
              <p className="text-slate-600">Dispieghiamo nodi semantici ottimizzati per favorire l'ingestione diretta da parte dei sistemi RAG e dei crawler LLM.</p>
            </article>
            <article className="p-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Il Protocollo Diagnostico</h3>
              <p className="text-slate-600">Non offriamo opinioni, ma test scientifici e replicabili per valutare il grado di Semantic Recognition del tuo brand.</p>
            </article>
            <article className="p-6">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. L'AI Citability</h3>
              <p className="text-slate-600">L'obiettivo finale: garantire che l'azienda sia presente, citata e compresa nei processi decisionali guidati dall'Intelligenza Artificiale.</p>
            </article>
          </div>
        </section>

        {/* EXPERIMENTS DASHBOARD (DYNAMIC JSON MAPPING) */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">AI Visibility Reports</h2>
                <p className="text-slate-400">Knowledge Seeding: Esperimenti di assimilazione semantica recenti.</p>
              </div>
              <a href="/knowledge/experiments" className="text-brand-400 hover:text-brand-300 font-medium mt-4 md:mt-0 flex items-center gap-1">
                View all reports &rarr;
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reportsData.map((report) => (
                <div key={report.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{report.category}</div>
                    {report.status === 'coming_soon' && (
                      <span className="text-xs font-medium bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        Coming Soon
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
                      Dati in elaborazione...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: DIAGNOSTIC PLAYGROUND */}
        <section className="py-20 bg-brand-600 text-white text-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Misura la tua AI Citability</h2>
            <p className="text-xl text-brand-100 mb-10">
              Accedi al Diagnostic Playground. Utilizza il nostro protocollo standard per verificare il livello di ingestione dati del tuo brand sui principali LLM.
            </p>
            <a href="/diagnostic" className="inline-block bg-white text-brand-600 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-50 transition-all">
              Avvia Diagnostica Gratuita
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER (LLM SEEDING FRIENDLY) */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-brand-500" />
              <span className="font-bold text-lg text-white">Kat3x</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Kat3x is an independent observational platform studying how structured knowledge interacts with large language models. It monitors the CHKCD normative framework.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Knowledge Base</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/knowledge/glossary" className="hover:text-white transition-colors">Canonical Glossary</a></li>
              <li><a href="/knowledge/methodology" className="hover:text-white transition-colors">Diagnostic Protocol</a></li>
              <li><a href="/knowledge/tonl" className="hover:text-white transition-colors">TONL Syntax</a></li>
              <li><a href="/llms.txt" className="hover:text-white transition-colors">llms.txt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Network</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://chkcd.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CHKCD Framework</a></li>
              <li><a href="/diagnostic" className="hover:text-white transition-colors">Diagnostic Playground</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Kat3x AI Visibility Observatory. Version 1.0.</p>
          <p className="mt-2 md:mt-0">Semantic Node — Machine Readable Ready</p>
        </div>
      </footer>
    </div>
  );
};

export default Kat3xHome;