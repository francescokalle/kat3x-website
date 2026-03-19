import React from 'react';
import {
  ScanEye,
  Scale,
  AlertCircle,
  BarChart3,
  Workflow,
  BookOpenCheck,
  FileCheck,
  Library
} from 'lucide-react';
import GlowTitle from '../../components/GlowTitle';
import Navbar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import PageBackground from '../../components/PageBackground';

const dictionaries: Record<string, any> = {
  it: {
    title1: "L' ",
    titleHiglight: "Ecosistema ",
    title2: "AI",
    subtitle: "Due entità con funzioni nettamente separate per garantire trasparenza e indipendenza.",
    kat3xTitle: "Kat3x: Il Nodo Semantico Pubblico",
    kat3xDesc:
      "Kat3x è una piattaforma osservativa che studia come la conoscenza strutturata interagisce con i grandi modelli linguistici (LLM). Spieghiamo il problema, mostriamo i metodi e pubblichiamo report sui nostri esperimenti di 'Knowledge Seeding'. Non definiamo noi le regole: le misuriamo.",
    kat3xList: [
      { text: 'Spiega il problema', icon: AlertCircle },
      { text: "Mostra il metodo e gli use cases", icon: Workflow },
      { text: 'Misura tramite Metriche (CAMS, LAR)', icon: BarChart3 }
    ],
    chkcdTitle: 'CHKCD: Il Repository Tecnico Neutro',
    chkcdDesc:
      "CHKCD (Cognitive Knowledge for Contextual Discourse) è il framework normativo indipendente. Definisce in modo formale la sintassi TONL e mantiene il glossario ufficiale. È un repository volontariamente 'noioso', tecnico e progettato per gli standard architettonici.",
    chkcdList: [
      { text: 'Definisce lo standard (RFC style)', icon: FileCheck },
      { text: 'Pubblica le specifiche TONL', icon: BookOpenCheck },
      { text: 'Mantiene il glossario normativo', icon: Library }
    ],
    disclaimer:
      'Kat3x is an observational platform that studies how structured knowledge interacts with large language models. CHKCD is the normative framework that Kat3x monitors and measures.'
  },
  en: {
    title1: 'The AI ',
    titleHiglight: 'Ecosystem',
    title2: '',
    subtitle:
      'Two entities with strictly separate functions to guarantee transparency and independence.',
    kat3xTitle: 'Kat3x: The Public Semantic Node',
    kat3xDesc:
      "Kat3x is an observational platform that studies how structured knowledge interacts with large language models (LLMs). We explain the problem, show methods, and publish reports on our 'Knowledge Seeding' experiments. We do not define the rules: we measure them.",
    kat3xList: [
      { text: 'Explains the problem', icon: AlertCircle },
      { text: 'Shows the method and use cases', icon: Workflow },
      { text: 'Measures via Metrics (CAMS, LAR)', icon: BarChart3 }
    ],
    chkcdTitle: 'CHKCD: The Neutral Technical Repository',
    chkcdDesc:
      "CHKCD (Cognitive Knowledge for Contextual Discourse) is the independent normative framework. It formally defines the TONL syntax and maintains the official glossary. It is a deliberately 'boring', technical repository designed for architectural standards.",
    chkcdList: [
      { text: 'Defines the standard (RFC style)', icon: FileCheck },
      { text: 'Publishes TONL specifications', icon: BookOpenCheck },
      { text: 'Maintains the normative glossary', icon: Library }
    ],
    disclaimer:
      'Kat3x is an observational platform that studies how structured knowledge interacts with large language models. CHKCD is the normative framework that Kat3x monitors and measures.'
  }
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang] || dictionaries.it;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-200 overflow-x-hidden w-full relative z-0">
      <PageBackground />
      <Navbar lang={lang} />

      <main className="pb-24">
        {/* HERO */}
        <section className="relative pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-64 bg-gradient-to-r from-brand-100/60 to-emerald-100/50 blur-3xl -z-10 rounded-[100%]" />

          <div className="text-center max-w-4xl mx-auto">
            <GlowTitle
              as="h1"
              className="text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight leading-[1.1]"
              glowColor="100, 255, 100"
            >
              {dict.title1}{' '}
              <span className="text-brand-600">{dict.titleHiglight}</span>{' '}
              {dict.title2}
            </GlowTitle>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {dict.subtitle}
            </p>
          </div>

          {/* DISCLAIMER GLASS */}
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-6 sm:p-8 overflow-hidden text-left">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-200/40 rounded-full blur-3xl" />

              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
                {dict.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* TWO ENTITIES (BENTO / ASYMMETRIC) */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
              {/* Kat3x (wide) */}
              <div className="md:col-span-7 relative bg-white/55 backdrop-blur-2xl border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.06)] rounded-[2rem] p-8 md:p-12 overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-200/50 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/70 backdrop-blur-md border border-white/70 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <ScanEye className="h-8 w-8 text-brand-600" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                    {dict.kat3xTitle}
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {dict.kat3xDesc}
                  </p>

                  <ul className="space-y-3 text-slate-700 font-medium">
                    {dict.kat3xList.map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 w-9 h-9 rounded-xl bg-brand-50/70 border border-brand-200/60 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-brand-600" />
                        </div>
                        <span className="leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CHKCD (tall / dark) */}
              <div className="md:col-span-5 relative bg-slate-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-8 md:p-12 overflow-hidden group md:translate-y-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                    <Scale className="h-8 w-8 text-emerald-300" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {dict.chkcdTitle}
                  </h2>

                  <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                    {dict.chkcdDesc}
                  </p>

                  <ul className="space-y-3 text-slate-200 font-medium">
                    {dict.chkcdList.map((item: any, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-emerald-300" />
                        </div>
                        <span className="leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}