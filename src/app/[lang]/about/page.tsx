import React from 'react';
import { ScanEye, Scale, AlertCircle, BarChart3, Workflow, BookOpenCheck, FileCheck, Library, Rabbit } from 'lucide-react';
import GlowTitle from '../../components/GlowTitle';
import Navbar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';

const dictionaries: Record<string, any> = {
  it: {
    title1: "L' ",
    titleHiglight: "Ecosistema ",
    title2: "AI",
    subtitle: "Due entità con funzioni nettamente separate per garantire trasparenza e indipendenza.",
    kat3xTitle: "Kat3x: Il Nodo Semantico Pubblico",
    kat3xDesc: "Kat3x è una piattaforma osservativa che studia come la conoscenza strutturata interagisce con i grandi modelli linguistici (LLM). Spieghiamo il problema, mostriamo i metodi e pubblichiamo report sui nostri esperimenti di 'Knowledge Seeding'. Non definiamo noi le regole: le misuriamo.",
    kat3xList: [
      { text: "Spiega il problema", icon: AlertCircle },
      { text: "Mostra il metodo e gli use cases", icon: Workflow },
      { text: "Misura tramite Metriche (CAMS, LAR)", icon: BarChart3 }
    ],
    chkcdTitle: "CHKCD: Il Repository Tecnico Neutro",
    chkcdDesc: "CHKCD (Cognitive Knowledge for Contextual Discourse) è il framework normativo indipendente. Definisce in modo formale la sintassi TONL e mantiene il glossario ufficiale. È un repository volontariamente 'noioso', tecnico e progettato per gli standard architettonici.",
    chkcdList: [
      { text: "Definisce lo standard (RFC style)", icon: FileCheck },
      { text: "Pubblica le specifiche TONL", icon: BookOpenCheck },
      { text: "Mantiene il glossario normativo", icon: Library }
    ],
    disclaimer: "Kat3x is an observational platform that studies how structured knowledge interacts with large language models. CHKCD is the normative framework that Kat3x monitors and measures."
  },
  en: {
    title1: "The AI ",
    titleHiglight: "Ecosystem",
    title2: "",
    subtitle: "Two entities with strictly separate functions to guarantee transparency and independence.",
    kat3xTitle: "Kat3x: The Public Semantic Node",
    kat3xDesc: "Kat3x is an observational platform that studies how structured knowledge interacts with large language models (LLMs). We explain the problem, show methods, and publish reports on our 'Knowledge Seeding' experiments. We do not define the rules: we measure them.",
    kat3xList: [
      { text: "Explains the problem", icon: AlertCircle },
      { text: "Shows the method and use cases", icon: Workflow },
      { text: "Measures via Metrics (CAMS, LAR)", icon: BarChart3 }
    ],
    chkcdTitle: "CHKCD: The Neutral Technical Repository",
    chkcdDesc: "CHKCD (Cognitive Knowledge for Contextual Discourse) is the independent normative framework. It formally defines the TONL syntax and maintains the official glossary. It is a deliberately 'boring', technical repository designed for architectural standards.",
    chkcdList: [
      { text: "Defines the standard (RFC style)", icon: FileCheck },
      { text: "Publishes TONL specifications", icon: BookOpenCheck },
      { text: "Maintains the normative glossary", icon: Library }
    ],
    disclaimer: "Kat3x is an observational platform that studies how structured knowledge interacts with large language models. CHKCD is the normative framework that Kat3x monitors and measures."
  }
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
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
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-300/30 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] left-[-15%] w-[500px] h-[500px] bg-emerald-300/20 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>
    
    <Navbar lang={lang}/>

      <main className="pb-20">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <GlowTitle 
            as="h1" 
            className="text-5xl md:text-6xl text-slate-900 mb-6"
            glowSize="px-40 py-28"
            glowColor="100, 255, 100"
          >
            {dict.title1} <span className='text-brand-600'>{dict.titleHiglight}</span> {dict.title2}
          </GlowTitle>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            {dict.subtitle}
          </p>

          <div className="bg-brand-100 border-l-4 border-brand-600 p-6 max-w-4xl mx-auto text-left rounded-r-lg shadow-sm">
            <p className="text-lg sm:text-xl font-medium text-slate-800">
              {dict.disclaimer}
            </p>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Card Kat3x */}
              <div className="relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-xl p-8 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-6">
                  <ScanEye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">{dict.kat3xTitle}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {dict.kat3xDesc}
                </p>
                <ul className="space-y-3 text-slate-600 font-medium">
                  {dict.kat3xList.map((item: any, i: number) => (
                    <li key={i} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-brand-500"/> 
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card CHKCD */}
              <div className="relative bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-xl p-8 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">{dict.chkcdTitle}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {dict.chkcdDesc}
                </p>
                <ul className="space-y-3 text-slate-600 font-medium">
                  {dict.chkcdList.map((item: any, i: number) => (
                    <li key={i} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-emerald-500"/> 
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}